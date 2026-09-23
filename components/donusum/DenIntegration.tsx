import { DonusumCopy } from "../../content/donusum";
import DnSectionBar from "./DnSectionBar";

// Dönüşüm sayfalarında ürünün geçtiği TEK bölüm. Ürün ayrıntısı buraya yazılmaz;
// ayrıntı için ana sayfaya (ürün sayfası) link verilir.
export default function DenIntegration({ num, t }: { num: number; t: DonusumCopy["den"] }) {
  return (
    <section className="dn-section" id="kurumsal-hafiza">
      <div className="dn-inner">
        <DnSectionBar num={num} label={t.label} />
        <div className="dn-den">
          <h2 className="dn-subheading reveal">{t.heading}</h2>
          <div className="reveal d1">
            <p className="dn-den-body">{t.body}</p>
            <a href={t.link.href} className="dn-link">{t.link.label} →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
