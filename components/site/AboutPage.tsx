import { aboutCopy, Lang, PATHS } from "../../content/site";
import DnClosing from "../donusum/DnClosing";
import DnHero from "../donusum/DnHero";
import DnSectionBar from "../donusum/DnSectionBar";
import PageShell from "../PageShell";

// /hakkinda ve /en/about — ana sayfadan taşınan Nereden doğdu, Deneyim Alanları ve Felsefe.
export default function AboutPage({ lang }: { lang: Lang }) {
  const t = aboutCopy[lang];
  return (
    <PageShell lang={lang} title={t.meta.title} description={t.meta.description} paths={PATHS.about}>
      <DnHero label={t.hero.label} heading={t.hero.heading} />

      <section className="dn-section" id="nereden-dogdu">
        <div className="dn-inner">
          <DnSectionBar num={1} label={t.origin.label} />
          <div className="dn-prose reveal">
            {t.origin.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="dn-section" id="deneyim-alanlari">
        <div className="dn-inner">
          <DnSectionBar num={2} label={t.areas.label} />
          <ul className="dn-badges reveal">
            {t.areas.tags.map((tag) => (
              <li className="dn-badge" key={tag}>{tag}</li>
            ))}
          </ul>
          <p className="dn-note reveal d1">{t.areas.note}</p>
        </div>
      </section>

      <section className="dn-section" id="felsefe">
        <div className="dn-inner">
          <DnSectionBar num={3} label={t.philosophy.label} />
          <h2 className="dn-heading reveal">{t.philosophy.heading}</h2>
          <div className="dn-programs">
            {t.philosophy.items.map((item, index) => (
              <article className={`dn-program reveal${index ? ` d${Math.min(index, 3)}` : ""}`} key={item.name}>
                <p className="dn-num">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="dn-program-name">{item.name}</h3>
                <p className="dn-program-audience">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DnClosing primary={t.closing} showEmail={false} />
    </PageShell>
  );
}
