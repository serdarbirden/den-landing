import Head from "next/head";
import { Lang, PATHS } from "../../content/site";
import AiMemory from "../AiMemory";
import CaseStudy from "../CaseStudy";
import DataSovereignty from "../DataSovereignty";
import Footer from "../Footer";
import Hero from "../Hero";
import HomeClosing from "../HomeClosing";
import HomeProducts from "../HomeProducts";
import HowItWorks from "../HowItWorks";
import LegacyAnchorRedirect from "../LegacyAnchorRedirect";
import MemoryCompounds from "../MemoryCompounds";
import MemoryInside from "../MemoryInside";
import Nav from "../Nav";
import Problem from "../Problem";
import RevealObserver from "../RevealObserver";
import ThreeRings from "../ThreeRings";

// Konumlandırma: den, yapay zekânın hafızası. Başlık ve açıklama OG/Twitter etiketlerinde de kullanılır.
const meta = {
  tr: {
    title: "den İkinci Beyin | Her yapay zekânın bir hafızaya ihtiyacı var.",
    description:
      "den, yapay zekânın hafızasıdır: sizin ve kurumunuzun bilgisini, kararlarını ve deneyimini tutar; MCP destekleyen yapay zekâ araçları aynı hafızaya bağlanır. AI değişebilir. Hafızanız değişmez.",
    locale: "tr_TR",
  },
  en: {
    title: "den Second Brain | Every AI needs a memory.",
    description:
      "den is the memory for AI: it holds the knowledge, decisions and experience of you and your organization; MCP-capable AI tools connect to the same memory. AI can change. Your memory doesn't.",
    locale: "en_US",
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
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="den" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.description} />
        <meta property="og:url" content={`https://denofficial.com${PATHS.home[lang]}`} />
        <meta property="og:locale" content={t.locale} />
        <meta property="og:image" content={`https://denofficial.com/og-${lang}.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.title} />
        <meta name="twitter:description" content={t.description} />
        <meta name="twitter:image" content={`https://denofficial.com/og-${lang}.png`} />
        <link rel="icon" href="/denlogo.png" type="image/png" />
        <link rel="canonical" href={`https://denofficial.com${PATHS.home[lang]}`} />
        <link rel="alternate" hrefLang="tr" href={`https://denofficial.com${PATHS.home.tr}`} />
        <link rel="alternate" hrefLang="en" href={`https://denofficial.com${PATHS.home.en}`} />
      </Head>

      <div id="top">
        <Nav lang={lang} alternate={PATHS.home[other]} />
        <Hero lang={lang} />
        <hr className="rule" />
        <AiMemory lang={lang} />
        <MemoryCompounds lang={lang} />
        <Problem lang={lang} />
        <HowItWorks lang={lang} />
        <MemoryInside lang={lang} />
        <HomeProducts lang={lang} />
        <ThreeRings lang={lang} />
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
