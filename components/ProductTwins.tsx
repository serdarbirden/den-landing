import NodeGraph from "./NodeGraph";

type Lang = "tr" | "en";

const copy = {
  tr: {
    id: "urun",
    label: "Ürün",
    heading: "Bir ürün, iki ikiz.",
    cards: [
      {
        tag: "Kurumun İkizi",
        body: "Sözleşmeler, e-postalar, toplantılar, projeler... Kurumunuzun tüm deneyimi bağlantılı bir hafıza ağına dönüşür. 'Bu tedarikçiyle geçmişte ne yaşadık?' sorusunun cevabı artık kimsenin hafızasına bağlı değil.",
      },
      {
        tag: "Yöneticinin İkizi",
        body: "Kararlarınız, gerekçeleriniz, vazgeçtikleriniz. den, sizin karar geçmişinizi öğrenir; 'bu konuda geçen yıl ne düşünmüştüm?' dediğinizde tarih, bağlam ve gerekçeyle cevap verir. Hatta çeliştiğinizde söyler.",
      },
    ],
  },
  en: {
    id: "product",
    label: "Product",
    heading: "One product, two twins.",
    cards: [
      {
        tag: "The Organization's Twin",
        body: "Contracts, emails, meetings, projects... Your organization's entire experience becomes a connected memory network. 'What happened with this supplier before?' no longer depends on anyone's recollection.",
      },
      {
        tag: "The Executive's Twin",
        body: "Your decisions, your reasoning, the paths you didn't take. den learns your decision history; ask 'what did I think about this last year?' and it answers with date, context and rationale. It even tells you when you contradict yourself.",
      },
    ],
  },
};

export default function ProductTwins({ lang = "tr" }: { lang?: Lang }) {
  const t = copy[lang];
  return (
    <section className="twins" id={t.id}>
      <div className="twins-inner">
        <div className="section-bar reveal">
          <span className="section-bar-label">{t.label}</span>
        </div>
        <h2 className="twins-heading reveal">{t.heading}</h2>
        <NodeGraph />
        <div className="twins-grid">
          {t.cards.map((card, index) => (
            <div className={`twin-card reveal${index ? ` d${index}` : ""}`} key={card.tag}>
              <p className="twin-card-label">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="twin-card-name">{card.tag}</h3>
              <p className="twin-card-body">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
