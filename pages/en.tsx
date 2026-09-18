import Head from "next/head";
import About from "../components/About";
import Activities from "../components/Activities";
import CaseStudy from "../components/CaseStudy";
import DataSovereignty from "../components/DataSovereignty";
import EarlyAccess from "../components/EarlyAccess";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Nav from "../components/Nav";
import Philosophy from "../components/Philosophy";
import Problem from "../components/Problem";
import ProductTwins from "../components/ProductTwins";
import RevealObserver from "../components/RevealObserver";

export default function HomePageEn() {
  return (
    <>
      <Head>
        <title>den — Second Brain | No Experience Is Ever Wasted</title>
        <meta
          name="description"
          content="den builds the digital twin of your organization and its leaders: living organizational memory, decision history, and on-premise AI. No experience is ever wasted."
        />
        <link rel="icon" href="/denlogo.png" type="image/png" />
        <link rel="canonical" href="https://denofficial.com/en" />
        <link rel="alternate" hrefLang="en" href="https://denofficial.com/en" />
        <link rel="alternate" hrefLang="tr" href="https://denofficial.com/" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devchauhann/fonts@v1.1.0/cdn/v1/css/all.css"
        />
      </Head>

      <div id="top">
        <Nav lang="en" />
        <Hero lang="en" />
        <hr className="rule" />
        <Problem lang="en" />
        <hr className="rule" />
        <ProductTwins lang="en" />
        <HowItWorks lang="en" />
        <hr className="rule" />
        <DataSovereignty lang="en" />
        <CaseStudy lang="en" />
        <hr className="rule" />
        <About lang="en" />
        <hr className="rule" />
        <Activities lang="en" />
        <Philosophy lang="en" />
        <EarlyAccess lang="en" />
        <Footer lang="en" />
      </div>
      <RevealObserver />
    </>
  );
}
