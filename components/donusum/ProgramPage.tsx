import { DonusumLang, programCopy } from "../../content/donusum";
import Footer from "../Footer";
import Nav from "../Nav";
import RevealObserver from "../RevealObserver";
import DnClosing from "./DnClosing";
import DnHead from "./DnHead";
import DnHero from "./DnHero";
import Faq from "./Faq";
import Frameworks from "./Frameworks";
import Process from "./Process";
import Programs from "./Programs";

// /donusum/program ve /en/transformation/programs
export default function ProgramPage({ lang }: { lang: DonusumLang }) {
  const t = programCopy[lang];
  const other: DonusumLang = lang === "tr" ? "en" : "tr";
  const home = lang === "tr" ? "/" : "/en";
  return (
    <>
      <DnHead
        title={t.meta.title}
        description={t.meta.description}
        lang={lang}
        paths={{ tr: programCopy.tr.meta.path, en: programCopy.en.meta.path }}
      />

      <div id="top">
        <Nav lang={lang} home={home} current={t.meta.path} alternate={programCopy[other].meta.path} />
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
        <Footer lang={lang} home={home} showTagline={false} />
      </div>
      <RevealObserver />
    </>
  );
}
