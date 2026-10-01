import dynamic from "next/dynamic";

const PointCloud = dynamic(() => import("./BrainField"), { ssr: false });

export default function TwinField({ shape, tone = "dark" }: { shape: "factory" | "head"; tone?: "dark" | "cream" }) {
  return (
    <div className="twin-card-visual">
      <PointCloud shape={shape} cameraZ={4.2} scale={1.2} pointSize={22} tone={tone} />
    </div>
  );
}
