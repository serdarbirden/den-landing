import Head from "next/head";
import DnClosing from "../../components/donusum/DnClosing";
import DnHero from "../../components/donusum/DnHero";
import Faq from "../../components/donusum/Faq";
import Frameworks from "../../components/donusum/Frameworks";
import Process from "../../components/donusum/Process";
import Programs from "../../components/donusum/Programs";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import RevealObserver from "../../components/RevealObserver";
import { programCopy } from "../../content/donusum";

export default function DonusumProgramPage() {
  const t = programCopy.tr;
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
            label={
              <>
                <a href={t.hero.parent.href}>{t.hero.parent.label}</a> · {t.hero.label}
              </>
            }
            heading={t.hero.heading}
            sub={t.hero.sub}
          />
          <Programs num={1} t={t.programs} />
          <Process num={2} t={t.process} />
          <Frameworks num={3} t={t.frameworks} />
          <Faq num={4} t={t.faq} />
          <DnClosing
            heading={t.closing.heading}
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
