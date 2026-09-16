import NodeGraph from "./NodeGraph";

type Lang = "tr" | "en";

const copy = {
  tr: {
    id: "nasil-calisir",
    label: "Nasıl Çalışır",
    heading: "Not tutmazsınız. den yaşar.",
    steps: [
      { name: "Yakalar", body: "E-posta, belge, toplantı, mesajlaşma; zaten ürettiğiniz veriyi kendiliğinden toplar." },
      { name: "Bağlar", body: "Kişi, kurum, proje ve kararları birbirine bağlayan canlı bir bilgi ağı kurar." },
      { name: "Hatırlar", body: "Sorduğunuzda arama sonucu değil, bağlamıyla ve gerekçesiyle hafıza döndürür." },
      { name: "Öğrenir", body: "Her yeni deneyimle ağ büyür; kararlarınızın tutarlılığını zamanla izler." },
    ],
    punchline: "Diğer benzer araçlar not tutmanızı bekler. den, sizin yerinize hatırlar.",
  },
  en: {
    id: "how-it-works",
    label: "How It Works",
    heading: "You don't take notes. den lives.",
    steps: [
      { name: "Captures", body: "Emails, documents, meetings, messages; it collects the data you already produce, automatically." },
      { name: "Connects", body: "Builds a living knowledge graph linking people, organizations, projects and decisions." },
      { name: "Recalls", body: "Ask, and get memory with context and reasoning — not a list of search results." },
      { name: "Learns", body: "The network grows with every new experience; it tracks the consistency of your decisions over time." },
    ],
    punchline: "Tools like Obsidian wait for you to take notes. den remembers for you.",
  },
};

export default function HowItWorks({ lang = "tr" }: { lang?: Lang }) {
  const t = copy[lang];
  return (
    <section className="how" id={t.id}>
      <div className="section-bar reveal">
        <span className="section-bar-label">{t.label}</span>
      </div>
      <h2 className="how-heading reveal">{t.heading}</h2>
      <NodeGraph />
      <div className="how-steps">
        {t.steps.map((step, index) => (
          <div className={`how-step reveal${index ? ` d${Math.min(index, 3)}` : ""}`} key={step.name}>
            <p className="how-step-num">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="how-step-name">{step.name}</h3>
            <p className="how-step-body">{step.body}</p>
          </div>
        ))}
      </div>
      <p className="how-punchline reveal">{t.punchline}</p>
    </section>
  );
}
