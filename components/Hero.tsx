import dynamic from "next/dynamic";

const BrainField = dynamic(() => import("./BrainField"), { ssr: false });

type Lang = "tr" | "en";

const copy = {
  tr: {
    title: "İkinci Beyin.",
    sub: (
      <>
        Sizin ve şirketinizin <span className="hero-sub-accent">dijital ikizi</span>,{" "}
        <span className="hero-sub-accent">ikinci beyni</span>.
      </>
    ),
    primary: { href: "#erken-erisim", label: "Erken Erişim İste" },
    secondary: { href: "#nasil-calisir", label: "Nasıl çalışır?" },
    scroll: "aşağı",
    showWordplay: true,
  },
  en: {
    title: "Second Brain.",
    sub: "den builds the digital twin of your organization — and of you. Your emails, meetings, documents and decisions merge into one living memory that recalls with context and reasoning when you ask.",
    primary: { href: "#early-access", label: "Request Early Access" },
    secondary: { href: "#how-it-works", label: "How it works" },
    scroll: "scroll",
    showWordplay: false,
  },
};

export default function Hero({ lang = "tr" }: { lang?: Lang }) {
  const t = copy[lang];
  return (
    <section className="hero">
      <div className="hero-brain">
        <BrainField />
      </div>
      <p className="hero-eyebrow"><strong>d</strong>irect <strong>e</strong>xperience <strong>n</strong>etwork</p>
      {t.showWordplay && <p className="hero-eyebrow"><strong>den</strong>eyim</p>}
      <h1 className="hero-title">{t.title}</h1>
      <p className="hero-sub">{t.sub}</p>
      <div className="hero-ctas">
        <a href={t.primary.href} className="hero-cta-primary">{t.primary.label}</a>
        <a href={t.secondary.href} className="hero-cta-secondary">{t.secondary.label}</a>
      </div>
      <div className="hero-scroll">
        <div className="scroll-bar" />
        <span>{t.scroll}</span>
      </div>
    </section>
  );
}
