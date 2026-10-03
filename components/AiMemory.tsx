import { homeCopy, Lang } from "../content/site";

// Slogan 2: "AI değişebilir. Hafızanız değişmez." — hero'nun hemen ardından gelen ayrışma bölümü.
// Dayanaklar üründe gerçekten var olanlarla sınırlıdır (modelden bağımsızlık, Markdown hafıza, MCP + onaylı yazma, şifreli paket).
export default function AiMemory({ lang = "tr" }: { lang?: Lang }) {
  const t = homeCopy[lang].aiMemory;
  return (
    <section className="how ai-memory" id={lang === "tr" ? "yapay-zeka-hafizasi" : "ai-memory"}>
      <div className="section-bar reveal">
        <span className="section-bar-label">{t.label}</span>
      </div>
      <h2 className="ai-memory-heading reveal">
        {/* İki cümle ayrı satırda: "AI değişebilir." / "Hafızanız değişmez." */}
        {t.heading.split(". ").map((part, i, all) => (i < all.length - 1 ? `${part}.` : part)).map((line) => (
          <span className="ai-memory-line" key={line}>{line}</span>
        ))}
      </h2>
      <p className="ai-memory-intro reveal d1">{t.intro}</p>
      <div className="how-steps">
        {t.pillars.map((pillar, index) => (
          <div className={`how-step reveal${index ? ` d${Math.min(index, 3)}` : ""}`} key={pillar.name}>
            <p className="how-step-num">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="how-step-name">{pillar.name}</h3>
            <p className="how-step-body">{pillar.body}</p>
          </div>
        ))}
      </div>
      <p className="how-punchline reveal">{t.punchline}</p>
    </section>
  );
}
