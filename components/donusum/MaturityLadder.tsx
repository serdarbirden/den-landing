import { DonusumCopy } from "../../content/donusum";
import DnSectionBar from "./DnSectionBar";

// Basamak çizgisi + her basamakta bir halka daha: Three Rings'teki halka estetiği.
const TREADS = [
  { x1: 20, x2: 180, y: 196 },
  { x1: 180, x2: 360, y: 150 },
  { x1: 360, x2: 540, y: 104 },
  { x1: 540, x2: 700, y: 58 },
];

function LadderGraphic({ label, names }: { label: string; names: string[] }) {
  const path = TREADS.map((t, i) => `${i ? `V ${t.y}` : `M ${t.x1} ${t.y}`} H ${t.x2}`).join(" ");
  return (
    <svg className="dn-ladder-svg" viewBox="0 0 720 230" fill="none" role="img" aria-label={label}>
      <path d={path} className="dn-ladder-line" />
      <path d="M 700 58 H 716" className="dn-ladder-line dn-ladder-open" />
      {TREADS.map((t, i) => {
        const cx = (t.x1 + t.x2) / 2;
        const cy = t.y - 34;
        return (
          <g key={i}>
            {Array.from({ length: i + 1 }, (_, k) => (
              <circle
                key={k}
                cx={cx}
                cy={cy}
                r={7 + k * 7}
                strokeDasharray={k > 0 && k < i ? "3 4" : undefined}
                className={k === i ? "dn-ring-live" : "dn-ring-dim"}
              />
            ))}
            <circle cx={cx} cy={cy} r={2.5} className="dn-ring-dot" />
            <text x={t.x1 + 8} y={t.y + 22} className="dn-ladder-num">
              {String(i + 1).padStart(2, "0")}
            </text>
            <text x={t.x1 + 34} y={t.y + 22} className="dn-ladder-name">
              {names[i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function MaturityLadder({ num, t }: { num: number; t: DonusumCopy["ladder"] }) {
  return (
    <section className="dn-section" id="olgunluk-merdiveni">
      <div className="dn-inner">
        <DnSectionBar num={num} label={t.label} />
        <h2 className="dn-heading reveal">{t.heading}</h2>
        <p className="dn-intro reveal d1">{t.intro}</p>
        <div className="dn-ladder-figure reveal d1">
          <LadderGraphic label={t.svgLabel} names={t.steps.map((s) => s.name)} />
        </div>
        <ol className="dn-steps">
          {t.steps.map((step, index) => (
            <li className="dn-step reveal" key={step.name}>
              <div className="dn-step-head">
                <p className="dn-num">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="dn-step-name">{step.name}</h3>
              </div>
              <dl className="dn-step-fields">
                <div>
                  <dt>{t.fieldLabels.changes}</dt>
                  <dd>{step.changes}</dd>
                </div>
                <div>
                  <dt>{t.fieldLabels.fallacy}</dt>
                  <dd>{step.fallacy}</dd>
                </div>
                <div>
                  <dt>{t.fieldLabels.threshold}</dt>
                  <dd>{step.threshold}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
