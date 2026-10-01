import { homeCopy, Lang } from "../content/site";
import NodeGraph from "./NodeGraph";

// Ana sayfa: "Tek hafıza, iki sürüm." — Yerinde ve Taşınabilir sürümlerin kısa hâli; ayrıntı /urun sayfasında.
export default function HomeProducts({ lang = "tr" }: { lang?: Lang }) {
  const t = homeCopy[lang].products;
  return (
    <section className="twins" id={lang === "tr" ? "urunler" : "products"}>
      <div className="twins-inner">
        <div className="section-bar reveal">
          <span className="section-bar-label">{t.label}</span>
        </div>
        <h2 className="twins-heading reveal">{t.heading}</h2>
        <p className="home-products-intro reveal d1">{t.intro}</p>
        <NodeGraph />
        <div className="twins-grid">
          {t.cards.map((card, index) => (
            <div className={`twin-card reveal${index ? ` d${index}` : ""}`} key={card.name}>
              <div className="twin-card-content">
                <p className="twin-card-label">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="twin-card-name">{card.name}</h3>
                <p className="twin-card-body">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
        <a href={t.link.href} className="hero-cta-secondary home-products-link reveal">
          {t.link.label} →
        </a>
      </div>
    </section>
  );
}
