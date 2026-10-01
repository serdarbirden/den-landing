import { Lang, PATHS, productCopy } from "../../content/site";
import DnClosing from "../donusum/DnClosing";
import DnHero from "../donusum/DnHero";
import DnSectionBar from "../donusum/DnSectionBar";
import PageShell from "../PageShell";
import Screenshot from "../Screenshot";
import TwinField from "../TwinField";

function Badges({ items }: { items: string[] }) {
  return (
    <ul className="dn-badges dn-badges--spaced reveal">
      {items.map((item) => (
        <li className="dn-badge" key={item}>{item}</li>
      ))}
    </ul>
  );
}

// /urun ve /en/product — tek ürün (den İkinci Beyin), iki sürüm: Yerinde ve Taşınabilir.
export default function ProductPage({ lang }: { lang: Lang }) {
  const t = productCopy[lang];
  const shot = (name: string) => `${t.shotPrefix} — ${name}`;

  return (
    <PageShell lang={lang} title={t.meta.title} description={t.meta.description} paths={PATHS.product}>
      <DnHero
        brain={false}
        label={t.hero.label}
        heading={t.hero.heading}
        sub={t.hero.sub}
        media={<Screenshot label={shot(t.hero.shot)} />}
      />

      {/* A — her iki sürümde de aynı */}
      <section className="dn-section" id="ortak">
        <div className="dn-inner">
          <DnSectionBar label={t.shared.label} />
          <div className="dn-features">
            {t.shared.blocks.map((block, index) => (
              <div className={`dn-feature${index % 2 ? " dn-feature--flip" : ""} reveal`} key={block.kicker}>
                <div className="dn-feature-media">
                  <Screenshot label={shot(block.shot)} />
                </div>
                <div className="dn-feature-text">
                  <p className="dn-kicker">{block.kicker}</p>
                  <h3 className="dn-feature-title">{block.title}</h3>
                  <p className="dn-feature-body">{block.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="dn-twins-block">
            <p className="dn-kicker reveal">{t.shared.twins.kicker}</p>
            <h3 className="dn-feature-title reveal">{t.shared.twins.title}</h3>
            <div className="dn-twins">
              {t.shared.twins.cards.map((card, index) => (
                <div className={`dn-twin reveal${index ? " d1" : ""}`} key={card.tag}>
                  <TwinField shape={card.shape} tone="cream" />
                  <div>
                    <p className="dn-num">{String(index + 1).padStart(2, "0")}</p>
                    <h4 className="dn-twin-name">{card.tag}</h4>
                    <p className="dn-twin-body">{card.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B — Sürüm 01: Yerinde */}
      <section className="dn-section" id="yerinde">
        <div className="dn-inner">
          <DnSectionBar num={1} label={t.onSite.label} />
          <p className="dn-product-name reveal">{t.onSite.name}</p>
          <h2 className="dn-heading reveal">{t.onSite.heading}</h2>
          <p className="dn-intro reveal d1">{t.onSite.body}</p>
          <Badges items={t.onSite.badges} />
        </div>
      </section>

      {/* C — Sürüm 02: Taşınabilir */}
      <section className="dn-section" id="tasinabilir">
        <div className="dn-inner">
          <DnSectionBar num={2} label={t.portable.label} />
          <p className="dn-product-name reveal">{t.portable.name}</p>
          <h2 className="dn-heading reveal">{t.portable.heading}</h2>
          <p className="dn-intro reveal d1">{t.portable.body}</p>
          <div className="dn-programs">
            {t.portable.features.map((feature, index) => (
              <article className={`dn-program reveal${index ? ` d${Math.min(index, 3)}` : ""}`} key={feature.name}>
                <p className="dn-num">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="dn-program-name">{feature.name}</h3>
                <p className="dn-program-audience">{feature.body}</p>
              </article>
            ))}
          </div>
          <Badges items={t.portable.badges} />
        </div>
      </section>

      {/* D — Karşılaştırma */}
      <section className="dn-section" id="karsilastirma">
        <div className="dn-inner">
          <DnSectionBar label={t.compare.label} />
          <h2 className="dn-heading reveal">{t.compare.heading}</h2>
          <div className="dn-table-wrap reveal" tabIndex={0} role="region" aria-label={t.compare.heading}>
            <table className="dn-table dn-table--compare">
              <thead>
                <tr>
                  {t.compare.columns.map((col, index) =>
                    index === 0 ? <td key="corner" /> : <th scope="col" key={col}>{col}</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {t.compare.rows.map(([label, first, second]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{first}</td>
                    <td>{second}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="dn-closing-line reveal">{t.compare.note}</p>
        </div>
      </section>

      <DnClosing
        heading={t.closing.heading}
        primary={t.closing.primary}
        secondary={t.closing.secondary}
        showEmail={false}
      />
    </PageShell>
  );
}
