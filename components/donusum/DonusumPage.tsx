import { donusumCopy, DonusumLang } from "../../content/donusum";
import Footer from "../Footer";
import Nav from "../Nav";
import RevealObserver from "../RevealObserver";
import DenIntegration from "./DenIntegration";
import Difference from "./Difference";
import DnClosing from "./DnClosing";
import DnHead from "./DnHead";
import DnHero from "./DnHero";
import MaturityLadder from "./MaturityLadder";
import TransformationTypes from "./TransformationTypes";

// /donusum ve /en/transformation
export default function DonusumPage({ lang }: { lang: DonusumLang }) {
  const t = donusumCopy[lang];
  const other: DonusumLang = lang === "tr" ? "en" : "tr";
  const home = lang === "tr" ? "/" : "/en";
  return (
    <>
      <DnHead
        title={t.meta.title}
        description={t.meta.description}
        lang={lang}
        paths={{ tr: donusumCopy.tr.meta.path, en: donusumCopy.en.meta.path }}
      />

      <div id="top">
        <Nav lang={lang} home={home} current={t.meta.path} alternate={donusumCopy[other].meta.path} />
        <main className="dn">
          <DnHero
            cloud="entry"
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
        <Footer lang={lang} home={home} showTagline={false} />
      </div>
      <RevealObserver />
    </>
  );
}
