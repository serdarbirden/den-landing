import Head from "next/head";
import { Lang, PATHS } from "../../content/site";
import CaseStudy from "../CaseStudy";
import DataSovereignty from "../DataSovereignty";
import Footer from "../Footer";
import Hero from "../Hero";
import HomeClosing from "../HomeClosing";
import HomeProducts from "../HomeProducts";
import HowItWorks from "../HowItWorks";
import LegacyAnchorRedirect from "../LegacyAnchorRedirect";
import MemoryCompounds from "../MemoryCompounds";
import Nav from "../Nav";
import Problem from "../Problem";
import RevealObserver from "../RevealObserver";
import ThreeRings from "../ThreeRings";

const meta = {
  tr: {
    title: "İkinci Beyin | Hiçbir Deneyim Boşa Gitmez",
    description:
      "den, kurumunuzun ve yöneticilerinizin dijital ikizini kurar: yaşayan kurumsal hafıza, karar geçmişi ve on-premise yapay zeka. Hiçbir deneyim boşa gitmez.",
  },
  en: {
    title: "Second Brain | No Experience Is Ever Wasted",
    description:
      "den builds the digital twin of your organization and its leaders: living organizational memory, decision history, and on-premise AI. No experience is ever wasted.",
  },
};

// / ve /en — ürün sayfası. Hakkında, Deneyim Alanları ve Felsefe /hakkinda'ya, form /iletisim'e taşındı.
export default function HomePage({ lang }: { lang: Lang }) {
  const t = meta[lang];
  const other: Lang = lang === "tr" ? "en" : "tr";
  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <link rel="icon" href="/denlogo.png" type="image/png" />
        <link rel="canonical" href={`https://denofficial.com${PATHS.home[lang]}`} />
        <link rel="alternate" hrefLang="tr" href={`https://denofficial.com${PATHS.home.tr}`} />
        <link rel="alternate" hrefLang="en" href={`https://denofficial.com${PATHS.home.en}`} />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devchauhann/fonts@v1.1.0/cdn/v1/css/all.css"
        />
      </Head>

      <div id="top">
        <Nav lang={lang} alternate={PATHS.home[other]} />
        <Hero lang={lang} />
        <hr className="rule" />
        <MemoryCompounds lang={lang} />
        <Problem lang={lang} />
        <hr className="rule" />
        <HomeProducts lang={lang} />
        <ThreeRings lang={lang} />
        <HowItWorks lang={lang} />
        <hr className="rule" />
        <DataSovereignty lang={lang} />
        <CaseStudy lang={lang} />
        <HomeClosing lang={lang} />
        <Footer lang={lang} alternate={PATHS.home[other]} showTagline />
      </div>
      <RevealObserver />
      <LegacyAnchorRedirect lang={lang} />
    </>
  );
}
