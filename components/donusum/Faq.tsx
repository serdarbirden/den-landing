import { ProgramCopy } from "../../content/donusum";
import DnSectionBar from "./DnSectionBar";

export default function Faq({ num, t }: { num: number; t: ProgramCopy["faq"] }) {
  return (
    <section className="dn-section" id="sss">
      <div className="dn-inner">
        <DnSectionBar num={num} label={t.label} />
        <div className="dn-faq">
          {t.items.map((item) => (
            <details className="dn-faq-item reveal" key={item.q}>
              <summary>
                <span>{item.q}</span>
                <span className="dn-faq-icon" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
