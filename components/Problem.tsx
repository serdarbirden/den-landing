type Lang = "tr" | "en";

const copy = {
  tr: {
    heading: "Kurumlar unutur. İnsanlar yorulur.",
    items: [
      "Kurumsal bilgi kişilerin zihninde yaşar; kişi gidince hafıza da gider.",
      "Aynı hatalar, aynı müzakereler, aynı kararlar tekrar tekrar sıfırdan yaşanır.",
      "Karar vericiler bilgiye değil, hatırlamaya vakit harcar.",
    ],
    punchline: "Oysa yaşanan her şey bir yerde birikiyor olmalıydı.",
  },
  en: {
    heading: "Organizations forget. People burn out.",
    items: [
      "Institutional knowledge lives in people's heads; when they leave, the memory leaves with them.",
      "The same mistakes, the same negotiations, the same decisions get replayed from scratch.",
      "Decision-makers spend their time not on knowledge, but on trying to remember.",
    ],
    punchline: "Everything you live through should have been accumulating somewhere.",
  },
};

export default function Problem({ lang = "tr" }: { lang?: Lang }) {
  const t = copy[lang];
  return (
    <section className="problem">
      <div className="problem-inner">
        <h2 className="problem-heading reveal">{t.heading}</h2>
        <div className="problem-list">
          {t.items.map((item, index) => (
            <div className={`problem-item reveal${index ? ` d${Math.min(index, 3)}` : ""}`} key={item}>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <p className="problem-punchline reveal">{t.punchline}</p>
      </div>
    </section>
  );
}
