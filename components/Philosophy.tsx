type Lang = "tr" | "en";

const copy = {
  tr: {
    label: "Felsefemiz",
    heading: "Üç ilke, bir yön.",
    items: [
      { name: "Temas önce gelir", body: "den gerçek verinizle kurulur, demo verisiyle değil." },
      { name: "Hata bir sinyal", body: "den'de hata bile boşa gitmez; hafızanızda bir öğrenme düğümüne dönüşür." },
      { name: "Ölçek sonra gelir", body: "Önce sizin ikizinizi doğru kurarız." },
    ],
  },
  en: {
    label: "Our Philosophy",
    heading: "Three principles, one direction.",
    items: [
      { name: "Contact comes first", body: "den is built on your real data, not demo data." },
      { name: "Mistakes are signals", body: "In den, even mistakes aren't wasted; they become learning nodes in your memory." },
      { name: "Scale comes later", body: "First, we get your twin right." },
    ],
  },
};

export default function Philosophy({ lang = "tr" }: { lang?: Lang }) {
  const t = copy[lang];
  return (
    <section className="philosophy" id="felsefe">
      <div className="phi-inner">
        <div className="phi-header reveal">
          <div className="label phi-label">{t.label}</div>
          <h2 className="phi-title-big">{t.heading}</h2>
        </div>
        <div className="phi-grid">
          {t.items.map((item, index) => (
            <div className={`phi-item reveal${index ? ` d${Math.min(index, 3)}` : ""}`} key={item.name}>
              <p className="phi-num">{String(index + 1).padStart(3, "0")}</p>
              <h3 className="phi-name">{item.name}</h3>
              <p className="phi-body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
