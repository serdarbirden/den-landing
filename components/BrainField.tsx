import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

const BASE_COLOR = new THREE.Color("#6b6560");
const GLOW_COLOR = new THREE.Color("#491720");

const BrainPointsMaterial = shaderMaterial(
  {
    uTime: 0,
    uPixelRatio: 1,
    uBaseSize: 34,
    uColorBase: BASE_COLOR,
    uColorGlow: GLOW_COLOR,
  },
  /* vertex */ `
    attribute float aPhase;
    uniform float uTime;
    uniform float uPixelRatio;
    uniform float uBaseSize;
    varying float vGlow;
    void main() {
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      float pulse = 0.5 + 0.5 * sin(uTime * 1.4 + aPhase * 6.2831853);
      vGlow = pulse;
      gl_PointSize = uBaseSize * (0.55 + pulse * 0.85) * uPixelRatio * (1.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  /* fragment */ `
    uniform vec3 uColorBase;
    uniform vec3 uColorGlow;
    varying float vGlow;
    void main() {
      vec2 uv = gl_PointCoord - vec2(0.5);
      float d = length(uv);
      if (d > 0.5) discard;
      float alpha = smoothstep(0.5, 0.0, d);
      vec3 color = mix(uColorBase, uColorGlow, pow(vGlow, 2.0));
      gl_FragColor = vec4(color, alpha * (0.3 + 0.6 * vGlow));
    }
  `
);

extend({ BrainPointsMaterial });

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      brainPointsMaterial: any;
    }
  }
}

function noise(a: number, b: number, c: number) {
  return (
    0.5 * Math.sin(a * 8.0 + c * 2.3) +
    0.3 * Math.sin(b * 11.0 - a * 4.0) +
    0.2 * Math.sin(a * 17.0 + b * 6.0 + c * 3.1)
  );
}

function buildBrain(count: number) {
  const positions = new Float32Array(count * 3);
  const phases = new Float32Array(count);

  const stemCount = Math.round(count * 0.1);
  const cortexCount = count - stemCount;

  for (let i = 0; i < cortexCount; i++) {
    const side = i % 2 === 0 ? 1 : -1;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    let lx = Math.sin(phi) * Math.cos(theta);
    const ly = Math.cos(phi);
    const lz = Math.sin(phi) * Math.sin(theta);

    // flatten the medial face so the two hemispheres read as separate lobes
    const medial = lx * side < 0 ? lx * side : 0;
    const flatten = 1 + medial * (0.72 + 0.18 * ly);

    const rx = 0.82;
    const ry = 0.66;
    const rz = 0.88;

    const fold = 1 + 0.08 * noise(theta, phi, side);
    const taper = ly < -0.2 ? 1 + ly * 0.25 : 1;

    const px = (0.46 * side + lx * rx * flatten) * fold;
    const py = ly * ry * fold * taper - 0.05;
    const pz = lz * rz * fold;

    positions[i * 3] = px;
    positions[i * 3 + 1] = py;
    positions[i * 3 + 2] = pz;
    phases[i] = Math.random();
  }

  for (let i = 0; i < stemCount; i++) {
    const t = Math.random();
    const angle = Math.random() * Math.PI * 2;
    const isCerebellum = i < stemCount * 0.55;

    let px: number, py: number, pz: number;
    if (isCerebellum) {
      const r = 0.3 * Math.sqrt(Math.random());
      px = Math.cos(angle) * r * 1.3;
      py = -0.72 + Math.sin(angle) * r * 0.6;
      pz = -0.55 - Math.random() * 0.15;
    } else {
      const radius = 0.16 * (1 - t * 0.4);
      px = Math.cos(angle) * radius;
      py = -0.85 - t * 0.55;
      pz = -0.08 + Math.sin(angle) * radius;
    }

    const idx = cortexCount + i;
    positions[idx * 3] = px;
    positions[idx * 3 + 1] = py;
    positions[idx * 3 + 2] = pz;
    phases[idx] = Math.random();
  }

  return { positions, phases };
}

function buildEdges(positions: Float32Array, count: number, k: number, maxDist: number) {
  const maxDistSq = maxDist * maxDist;
  const seen = new Set<string>();
  const edgePositions: number[] = [];

  for (let i = 0; i < count; i++) {
    const ix = positions[i * 3];
    const iy = positions[i * 3 + 1];
    const iz = positions[i * 3 + 2];
    const candidates: { j: number; d: number }[] = [];

    for (let j = 0; j < count; j++) {
      if (i === j) continue;
      const dx = positions[j * 3] - ix;
      const dy = positions[j * 3 + 1] - iy;
      const dz = positions[j * 3 + 2] - iz;
      const d = dx * dx + dy * dy + dz * dz;
      if (d < maxDistSq) candidates.push({ j, d });
    }

    candidates.sort((a, b) => a.d - b.d);
    for (let n = 0; n < Math.min(k, candidates.length); n++) {
      const j = candidates[n].j;
      const key = i < j ? `${i}_${j}` : `${j}_${i}`;
      if (seen.has(key)) continue;
      seen.add(key);
      edgePositions.push(ix, iy, iz, positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
    }
  }

  return new Float32Array(edgePositions);
}

function BrainGroup({
  reducedMotion,
  scale,
  offsetY,
}: {
  reducedMotion: boolean;
  scale: number;
  offsetY: number;
}) {
  const count = useMemo(() => (typeof window !== "undefined" && window.innerWidth < 640 ? 380 : 720), []);
  const { positions, phases } = useMemo(() => buildBrain(count), [count]);
  const edgePositions = useMemo(() => buildEdges(positions, count, 4, 0.24), [positions, count]);

  const { size } = useThree();
  const fittedScale = useMemo(() => {
    const aspect = size.width / size.height;
    const fit = Math.min(1, Math.max(0.55, aspect / 0.75));
    return scale * fit;
  }, [scale, size.width, size.height]);

  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<any>(null);
  const lineMaterialRef = useRef<THREE.LineBasicMaterial>(null);
  const autoRotate = useRef(0);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function onMove(e: MouseEvent) {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (!reducedMotion) {
      autoRotate.current += delta * 0.1;
    }
    const targetY = autoRotate.current + mouse.current.x * 0.35;
    const targetX = -0.12 + mouse.current.y * 0.18;
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.04;

    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = reducedMotion ? 0 : state.clock.elapsedTime;
      materialRef.current.uniforms.uPixelRatio.value = state.viewport.dpr;
    }
    if (lineMaterialRef.current) {
      lineMaterialRef.current.opacity = reducedMotion ? 0.14 : 0.1 + 0.05 * Math.sin(state.clock.elapsedTime * 0.5);
    }
  });

  return (
    <group ref={groupRef} scale={fittedScale} position={[0, offsetY, 0]}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[edgePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          ref={lineMaterialRef}
          color="#2c2b2a"
          transparent
          opacity={0.14}
          depthWrite={false}
        />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-aPhase" args={[phases, 1]} />
        </bufferGeometry>
        <brainPointsMaterial ref={materialRef} transparent depthWrite={false} />
      </points>
    </group>
  );
}

export default function BrainField({
  cameraZ = 4.4,
  scale = 1.35,
  offsetY = 0,
}: {
  cameraZ?: number;
  scale?: number;
  offsetY?: number;
}) {
  const reducedMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  return (
    <Canvas
      className="hero-brain-canvas"
      camera={{ position: [0, 0, cameraZ], fov: 42 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
    >
      <BrainGroup reducedMotion={reducedMotion} scale={scale} offsetY={offsetY} />
    </Canvas>
  );
}
