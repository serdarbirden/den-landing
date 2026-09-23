import Head from "next/head";
import DenIntegration from "../../components/donusum/DenIntegration";
import Difference from "../../components/donusum/Difference";
import DnClosing from "../../components/donusum/DnClosing";
import DnHero from "../../components/donusum/DnHero";
import MaturityLadder from "../../components/donusum/MaturityLadder";
import TransformationTypes from "../../components/donusum/TransformationTypes";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import RevealObserver from "../../components/RevealObserver";
import { donusumCopy } from "../../content/donusum";

export default function DonusumPage() {
  const t = donusumCopy.tr;
  return (
    <>
      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="icon" href="/denlogo.png" type="image/png" />
        <link rel="canonical" href={`https://denofficial.com${t.meta.path}`} />
        <link rel="alternate" hrefLang="tr" href={`https://denofficial.com${t.meta.path}`} />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devchauhann/fonts@v1.1.0/cdn/v1/css/all.css"
        />
      </Head>

      <div id="top">
        <Nav lang="tr" home="/" current="/donusum" showLangSwitch={false} />
        <main className="dn">
          <DnHero
            label={t.hero.label}
            heading={t.hero.heading}
            sub={t.hero.sub}
            primary={t.hero.primary}
            secondary={t.hero.secondary}
          />
          <MaturityLadder num={1} t={t.ladder} />
          <TransformationTypes num={2} t={t.types} />
          <Difference num={3} t={t.difference} />
          <DenIntegration num={4} t={t.den} />
          <DnClosing
            heading={t.closing.heading}
            body={t.closing.body}
            primary={t.closing.primary}
            secondary={t.closing.secondary}
          />
        </main>
        <Footer lang="tr" home="/" />
      </div>
      <RevealObserver />
    </>
  );
}
