import { denGrowthSvgToday } from "../denGrowthSvgs";

// Ana sayfadaki "Hafıza birikir" bölümünün BUGÜN ağı: aynı düğümler ve bağlantılar,
// hero genişliğine yayılmış hâli. Statik, satır içi SVG; renk/opaklık CSS'te (.dn-cloud).

const W = 1600;
const H = 800;
// Ağın merkezi (~151, 153) hero'nun sağına kayık bir noktaya taşınır.
const CX = 151;
const CY = 153;
const SX = 12;
const SY = 7;
const OX = 900;
const OY = 380;

const px = (x: string) => ((parseFloat(x) - CX) * SX + OX).toFixed(1);
const py = (y: string) => ((parseFloat(y) - CY) * SY + OY).toFixed(1);
const attr = (el: string, name: string) => new RegExp(`\\b${name}="([^"]+)"`).exec(el)?.[1] ?? "0";

type Link = { x1: string; y1: string; x2: string; y2: string; strong: boolean };
type Node = { cx: string; cy: string; kind: "node" | "hub" | "ring" | "square" | "diamond" };

function parse() {
  const links: Link[] = [];
  const nodes: Node[] = [];

  for (const el of denGrowthSvgToday.match(/<line[^>]*>/g) ?? []) {
    links.push({
      x1: px(attr(el, "x1")),
      y1: py(attr(el, "y1")),
      x2: px(attr(el, "x2")),
      y2: py(attr(el, "y2")),
      strong: parseFloat(attr(el, "stroke-width")) > 0.5,
    });
  }

  // Kaynakta halkalar ve kareler fill="none" grubunda; diğer daireler dolu.
  for (const group of denGrowthSvgToday.split("<g ").slice(1)) {
    const outlined = group.startsWith('fill="none"');
    for (const el of group.match(/<circle[^>]*>/g) ?? []) {
      const r = parseFloat(attr(el, "r"));
      nodes.push({
        cx: px(attr(el, "cx")),
        cy: py(attr(el, "cy")),
        kind: outlined ? "ring" : r > 1.5 ? "hub" : "node",
      });
    }
    for (const el of group.match(/<rect[^>]*>/g) ?? []) {
      const half = parseFloat(attr(el, "width")) / 2;
      nodes.push({
        cx: px(String(parseFloat(attr(el, "x")) + half)),
        cy: py(String(parseFloat(attr(el, "y")) + half)),
        kind: "square",
      });
    }
    for (const el of group.match(/<path[^>]*>/g) ?? []) {
      // Eşkenar dörtgen: "M x y-3.4 L ..." — ilk noktanın altındaki merkez.
      const m = /M([\d.]+) ([\d.]+)/.exec(attr(el, "d"));
      if (m) nodes.push({ cx: px(m[1]), cy: py(String(parseFloat(m[2]) + 3.4)), kind: "diamond" });
    }
  }
  return { links, nodes };
}

const { links, nodes } = parse();

export default function HeroCloud() {
  return (
    <div className="dn-cloud" aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMaxYMin slice" fill="none">
        <g strokeLinecap="round">
          {links.map((l, i) => (
            <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} className={l.strong ? "dn-cloud-link-strong" : "dn-cloud-link"} />
          ))}
        </g>
        {nodes.map((n, i) => {
          const cls = `dn-cloud-${n.kind}`;
          if (n.kind === "square") {
            return <rect key={i} x={+n.cx - 3.5} y={+n.cy - 3.5} width={7} height={7} className={cls} />;
          }
          if (n.kind === "diamond") {
            const x = +n.cx;
            const y = +n.cy;
            return <path key={i} d={`M${x} ${y - 5}L${x + 5} ${y}L${x} ${y + 5}L${x - 5} ${y}Z`} className={cls} />;
          }
          const r = n.kind === "ring" ? 5.5 : n.kind === "hub" ? 3 : 2;
          return <circle key={i} cx={n.cx} cy={n.cy} r={r} className={cls} />;
        })}
      </svg>
    </div>
  );
}
