import { denGrowthSvgToday } from "../denGrowthSvgs";

// Ana sayfadaki "Hafıza birikir" bölümünün BUGÜN ağı: aynı düğümler ve bağlantılar.
// Statik, satır içi SVG; krem (#f5f5f0), tam opak. Okunabilirlik yalnızca konumla
// sağlanır: bulut hero'da metin bloğunun altındaki bantta, sağa yaslı durur (CSS: .dn-cloud).
//   entry: giriş sayfası, ağın tamamı.
//   edge:  program sayfası, ağın sağ-alt yarısı (daha seyrek kenar bölgesi).

type Variant = "entry" | "edge";

type Kind = "node" | "hub" | "ring" | "square" | "diamond";
type RawNode = { x: number; y: number; kind: Kind };
type RawLink = { x1: number; y1: number; x2: number; y2: number; strong: boolean };

// Çizim alanı (bandın en-boy oranı) ve kenar boşluğu.
const W = 640;
const H = 280;
const PAD = 8;

// Kaynak ağın merkezi (300x300 viewBox içinde).
const CX = 151;
const CY = 153;

const attr = (el: string, name: string) => parseFloat(new RegExp(`\\b${name}="([^"]+)"`).exec(el)?.[1] ?? "0");

function parse() {
  const links: RawLink[] = (denGrowthSvgToday.match(/<line[^>]*>/g) ?? []).map((el) => ({
    x1: attr(el, "x1"),
    y1: attr(el, "y1"),
    x2: attr(el, "x2"),
    y2: attr(el, "y2"),
    strong: attr(el, "stroke-width") > 0.5,
  }));

  const nodes: RawNode[] = [];
  // Kaynakta halkalar ve kareler fill="none" grubunda; diğer daireler dolu.
  for (const group of denGrowthSvgToday.split("<g ").slice(1)) {
    const outlined = group.startsWith('fill="none"');
    for (const el of group.match(/<circle[^>]*>/g) ?? []) {
      nodes.push({ x: attr(el, "cx"), y: attr(el, "cy"), kind: outlined ? "ring" : attr(el, "r") > 1.5 ? "hub" : "node" });
    }
    for (const el of group.match(/<rect[^>]*>/g) ?? []) {
      const half = attr(el, "width") / 2;
      nodes.push({ x: attr(el, "x") + half, y: attr(el, "y") + half, kind: "square" });
    }
    for (const el of group.match(/<path[^>]*>/g) ?? []) {
      // Eşkenar dörtgen: ilk nokta tepe, merkez 3.4 birim aşağıda.
      const m = /M([\d.]+) ([\d.]+)/.exec(new RegExp('d="([^"]+)"').exec(el)?.[1] ?? "");
      if (m) nodes.push({ x: parseFloat(m[1]), y: parseFloat(m[2]) + 3.4, kind: "diamond" });
    }
  }
  return { links, nodes };
}

const raw = parse();
// Sağ-alt köşegen yönündeki izdüşüm: büyüdükçe ağın sağ-alt kenarına yaklaşılır.
const toward = (x: number, y: number) => x - CX + (y - CY);
const key = (x: number, y: number) => `${x.toFixed(1)},${y.toFixed(1)}`;

function select(variant: Variant) {
  if (variant === "entry") return raw;
  // Kenar kesiti: sağ-alt köşegende medyanın ötesindeki düğümler (yarısı)
  // ve iki ucu da bu kümede olan bağlantılar.
  const sorted = raw.nodes.map((n) => toward(n.x, n.y)).sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)];
  const nodes = raw.nodes.filter((n) => toward(n.x, n.y) > median);
  const kept = new Set(nodes.map((n) => key(n.x, n.y)));
  const links = raw.links.filter((l) => kept.has(key(l.x1, l.y1)) && kept.has(key(l.x2, l.y2)));
  return { nodes, links };
}

export default function HeroCloud({ variant = "entry" }: { variant?: Variant }) {
  const { nodes, links } = select(variant);

  // Seçilen düğümlerin sınır kutusu, çizim alanına yayılır.
  const xs = nodes.map((n) => n.x);
  const ys = nodes.map((n) => n.y);
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);
  const sx = (W - 2 * PAD) / (Math.max(...xs) - minX);
  const sy = (H - 2 * PAD) / (Math.max(...ys) - minY);
  const px = (x: number) => +((x - minX) * sx + PAD).toFixed(1);
  const py = (y: number) => +((y - minY) * sy + PAD).toFixed(1);

  return (
    <div className={`dn-cloud dn-cloud--${variant}`} aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMaxYMax meet" fill="none">
        <g strokeLinecap="round">
          {links.map((l, i) => (
            <line
              key={i}
              x1={px(l.x1)}
              y1={py(l.y1)}
              x2={px(l.x2)}
              y2={py(l.y2)}
              className={l.strong ? "dn-cloud-link-strong" : "dn-cloud-link"}
            />
          ))}
        </g>
        {nodes.map((n, i) => {
          const x = px(n.x);
          const y = py(n.y);
          const cls = `dn-cloud-${n.kind}`;
          if (n.kind === "square") return <rect key={i} x={x - 2.5} y={y - 2.5} width={5} height={5} className={cls} />;
          if (n.kind === "diamond") return <path key={i} d={`M${x} ${y - 3.5}L${x + 3.5} ${y}L${x} ${y + 3.5}L${x - 3.5} ${y}Z`} className={cls} />;
          const r = n.kind === "ring" ? 3.5 : n.kind === "hub" ? 2.2 : 1.4;
          return <circle key={i} cx={x} cy={y} r={r} className={cls} />;
        })}
      </svg>
    </div>
  );
}
