import Head from "next/head";
import About from "../components/About";
import Activities from "../components/Activities";
import CaseStudy from "../components/CaseStudy";
import DataSovereignty from "../components/DataSovereignty";
import EarlyAccess from "../components/EarlyAccess";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import MemoryCompounds from "../components/MemoryCompounds";
import Nav from "../components/Nav";
import Philosophy from "../components/Philosophy";
import Problem from "../components/Problem";
import ProductTwins from "../components/ProductTwins";
import RevealObserver from "../components/RevealObserver";
import ThreeRings from "../components/ThreeRings";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>İkinci Beyin | Hiçbir Deneyim Boşa Gitmez</title>
        <meta
          name="description"
          content="den, kurumunuzun ve yöneticilerinizin dijital ikizini kurar: yaşayan kurumsal hafıza, karar geçmişi ve on-premise yapay zeka. Hiçbir deneyim boşa gitmez."
        />
        <link rel="icon" href="/denlogo.png" type="image/png" />
        <link rel="canonical" href="https://denofficial.com/" />
        <link rel="alternate" hrefLang="tr" href="https://denofficial.com/" />
        <link rel="alternate" hrefLang="en" href="https://denofficial.com/en" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devchauhann/fonts@v1.1.0/cdn/v1/css/all.css"
        />
      </Head>

      <div id="top">
        <Nav lang="tr" />
        <Hero lang="tr" />
        <hr className="rule" />
        <MemoryCompounds lang="tr" />
        <Problem lang="tr" />
        <hr className="rule" />
        <ProductTwins lang="tr" />
        <ThreeRings lang="tr" />
        <HowItWorks lang="tr" />
        <hr className="rule" />
        <DataSovereignty lang="tr" />
        <CaseStudy lang="tr" />
        <hr className="rule" />
        <About lang="tr" />
        <hr className="rule" />
        <Activities lang="tr" />
        <Philosophy lang="tr" />
        <EarlyAccess lang="tr" />
        <Footer lang="tr" />
      </div>
      <RevealObserver />
    </>
  );
}
