import { ProgramCopy } from "../../content/donusum";
import DnSectionBar from "./DnSectionBar";

export default function Frameworks({ num, t }: { num: number; t: ProgramCopy["frameworks"] }) {
  return (
    <section className="dn-section" id="cerceveler">
      <div className="dn-inner">
        <DnSectionBar num={num} label={t.label} />
        <ul className="dn-badges reveal">
          {t.items.map((item) => (
            <li className="dn-badge" key={item}>{item}</li>
          ))}
        </ul>
        <p className="dn-note reveal d1">{t.note}</p>
      </div>
    </section>
  );
}
