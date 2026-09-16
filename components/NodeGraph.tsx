const nodes = [
  { x: 20, y: 40 }, { x: 90, y: 14 }, { x: 160, y: 46 }, { x: 230, y: 18 },
  { x: 300, y: 44 }, { x: 370, y: 16 }, { x: 440, y: 42 }, { x: 510, y: 14 },
  { x: 580, y: 44 }, { x: 620, y: 20 },
];

const edges: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9],
  [0, 2], [2, 4], [4, 6], [6, 8], [1, 3], [3, 5], [5, 7], [7, 9],
];

export default function NodeGraph() {
  return (
    <svg className="node-graph" viewBox="0 0 640 60" fill="none" aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={i % 4 === 0 ? 4 : 2.5} className={i === 5 ? "accent" : undefined} />
      ))}
    </svg>
  );
}
