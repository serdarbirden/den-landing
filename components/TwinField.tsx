import dynamic from "next/dynamic";

const PointCloud = dynamic(() => import("./BrainField"), { ssr: false });

export default function TwinField({ shape }: { shape: "factory" | "head" }) {
  return (
    <div className="twin-card-visual">
      <PointCloud shape={shape} cameraZ={4.2} scale={1.2} />
    </div>
  );
}
