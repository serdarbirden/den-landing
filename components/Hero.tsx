import dynamic from "next/dynamic";
import { PATHS } from "../content/site";

const BrainField = dynamic(() => import("./BrainField"), { ssr: false });

type Lang = "tr" | "en";

// Konumlandırma: den, yapay zekânın hafızası. Büyük başlık ("İkinci Beyin.") aynen kalır;
// ikinci seviye mesaj slogan 1'dir, dijital ikiz / ikinci beyin cümlesi kısa bir alt satıra iner.
const copy = {
  tr: {
    title: "İkinci Beyin.",
    statement: "Her yapay zekânın bir hafızaya ihtiyacı var.",
    sub: (
      <>
        den, <span className="hero-sub-accent">yapay zekânın hafızasıdır</span>. Hangi yapay zekâyı kullanırsanız
        kullanın, aynı hafızaya bağlanır.
      </>
    ),
    twinLine: (
      <>
        Size ve şirketinize ait <span className="hero-sub-accent">dijital ikiz</span>,{" "}
        <span className="hero-sub-accent">ikinci beyin</span>.
      </>
    ),
    primary: { href: PATHS.contact.tr, label: "İletişim" },
    secondary: { href: "#nasil-calisir", label: "Nasıl çalışır?" },
    scroll: "aşağı",
    showWordplay: true,
  },
  en: {
    title: "Second Brain.",
    statement: "Every AI needs a memory.",
    sub: (
      <>
        den is <span className="hero-sub-accent">the memory for AI</span>. Whichever AI you use, it connects to the
        same memory.
      </>
    ),
    twinLine: (
      <>
        The <span className="hero-sub-accent">digital twin</span> that belongs to you and your company, your{" "}
        <span className="hero-sub-accent">second brain</span>.
      </>
    ),
    primary: { href: PATHS.contact.en, label: "Contact" },
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
      <p className="hero-statement">{t.statement}</p>
      <p className="hero-sub hero-sub--lead">{t.sub}</p>
      <p className="hero-sub hero-sub--twin">{t.twinLine}</p>
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
