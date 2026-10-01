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

// /urun ve /en/product — büyük ekran görüntüleri etrafında kurulu ürün vitrini.
export default function ProductPage({ lang }: { lang: Lang }) {
  const t = productCopy[lang];
  const shot = (name: string) => `${t.shotPrefix} — ${name}`;
  const sb = t.secondBrain;
  const pm = t.portable;

  return (
    <PageShell lang={lang} title={t.meta.title} description={t.meta.description} paths={PATHS.product}>
      <DnHero
        brain={false}
        label={t.hero.label}
        heading={t.hero.heading}
        sub={t.hero.sub}
        media={<Screenshot label={shot(t.hero.shot)} />}
      />

      <section className="dn-section" id="ikinci-beyin">
        <div className="dn-inner">
          <DnSectionBar num={1} label={sb.audience} />
          <p className="dn-product-name reveal">{sb.name}</p>
          <h2 className="dn-heading reveal">{sb.heading}</h2>
          <p className="dn-intro reveal d1">{sb.sub}</p>

          <div className="dn-features">
            {sb.blocks.map((block, index) => (
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
            <p className="dn-kicker reveal">{sb.twins.kicker}</p>
            <h3 className="dn-feature-title reveal">{sb.twins.title}</h3>
            <div className="dn-twins">
              {sb.twins.cards.map((card, index) => (
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

          <Badges items={sb.badges} />
        </div>
      </section>

      <section className="dn-section" id="tasinabilir-hafiza">
        <div className="dn-inner">
          <DnSectionBar num={2} label={pm.audience} />
          <p className="dn-product-name reveal">{pm.name}</p>
          <h2 className="dn-heading reveal">{pm.heading}</h2>
          <p className="dn-intro reveal d1">{pm.sub}</p>
          <div className="dn-programs">
            {pm.features.map((feature, index) => (
              <article className={`dn-program reveal${index ? ` d${Math.min(index, 3)}` : ""}`} key={feature.name}>
                <p className="dn-num">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="dn-program-name">{feature.name}</h3>
                <p className="dn-program-audience">{feature.body}</p>
              </article>
            ))}
          </div>
          <p className="dn-closing-line reveal">{pm.closingLine}</p>
          <Badges items={pm.badges} />
        </div>
      </section>

      <section className="dn-section" id="karsilastirma">
        <div className="dn-inner">
          <DnSectionBar label={t.compare.label} />
          <div className="dn-table-wrap reveal" tabIndex={0} role="region" aria-label={t.compare.label}>
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
