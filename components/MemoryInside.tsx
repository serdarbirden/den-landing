import { homeCopy, Lang } from "../content/site";

// Alt katman: hafızanın içinde ne var — kişi / kurum ikizi ve ürün yüzeyleri (ayrıntı /urun sayfasında).
export default function MemoryInside({ lang = "tr" }: { lang?: Lang }) {
  const t = homeCopy[lang].inside;
  return (
    <section className="twins" id={lang === "tr" ? "hafizanin-icinde" : "inside-the-memory"}>
      <div className="twins-inner">
        <div className="section-bar reveal">
          <span className="section-bar-label">{t.label}</span>
        </div>
        <h2 className="twins-heading reveal">{t.heading}</h2>
        <p className="home-products-intro reveal d1">{t.intro}</p>
        <div className="twins-grid">
          {t.twins.map((twin, index) => (
            <div className={`twin-card reveal${index ? ` d${index}` : ""}`} key={twin.name}>
              <div className="twin-card-content">
                <p className="twin-card-label">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="twin-card-name">{twin.name}</h3>
                <p className="twin-card-body">{twin.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="how-steps inside-surfaces">
          {t.surfaces.map((surface, index) => (
            <div className={`how-step reveal${index ? ` d${Math.min(index, 3)}` : ""}`} key={surface.name}>
              <h3 className="how-step-name">{surface.name}</h3>
              <p className="how-step-body">{surface.body}</p>
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
