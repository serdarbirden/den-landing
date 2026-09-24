import { ProgramCopy } from "../../content/donusum";
import DnSectionBar from "./DnSectionBar";

export default function Programs({ num, t }: { num: number; t: ProgramCopy["programs"] }) {
  return (
    <section className="dn-section" id="programlar">
      <div className="dn-inner">
        <DnSectionBar num={num} label={t.label} />
        <div className="dn-programs">
          {t.items.map((program, index) => (
            <article className={`dn-program reveal${index ? ` d${Math.min(index, 3)}` : ""}`} key={program.name}>
              <p className="dn-num">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="dn-program-name">{program.name}</h3>
              <p className="dn-field-label">{t.audienceLabel}</p>
              <p className="dn-program-audience">{program.audience}</p>
              <p className="dn-field-label">{t.deliverablesLabel}</p>
              <ul className="dn-list">
                {program.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
