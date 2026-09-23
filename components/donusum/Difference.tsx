import { DonusumCopy } from "../../content/donusum";
import DnSectionBar from "./DnSectionBar";

export default function Difference({ num, t }: { num: number; t: DonusumCopy["difference"] }) {
  return (
    <section className="dn-section" id="farkimiz">
      <div className="dn-inner">
        <DnSectionBar num={num} label={t.label} />
        <div className="dn-diff">
          <h2 className="dn-heading reveal">{t.heading}</h2>
          <div className="dn-diff-body">
            <p className="reveal d1">{t.paragraphs[0]}</p>
            <p className="dn-diff-emph reveal d2">{t.paragraphs[1]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
