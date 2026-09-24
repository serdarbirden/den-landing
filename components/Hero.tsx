import dynamic from "next/dynamic";

const BrainField = dynamic(() => import("./BrainField"), { ssr: false });

type Lang = "tr" | "en";

const copy = {
  tr: {
    title: "İkinci Beyin.",
    slogan: "Hiçbir deneyim boşa gitmez.",
    sub: (
      <>
        Size ve şirketinize ait <span className="hero-sub-accent">dijital ikiz</span>,{" "}
        <span className="hero-sub-accent">ikinci beyin</span>.
      </>
    ),
    primary: { href: "#erken-erisim", label: "İletişim" },
    secondary: { href: "#nasil-calisir", label: "Nasıl çalışır?" },
    scroll: "aşağı",
    showWordplay: true,
  },
  en: {
    title: "Second Brain.",
    slogan: "No experience is ever wasted.",
    sub: (
      <>
        The <span className="hero-sub-accent">digital twin</span> that belongs to you and your company,{" "}
        your <span className="hero-sub-accent">second brain</span>.
      </>
    ),
    primary: { href: "#early-access", label: "Contact" },
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
      <p className="hero-slogan">{t.slogan}</p>
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
