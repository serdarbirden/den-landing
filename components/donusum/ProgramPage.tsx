import { DonusumLang, programCopy } from "../../content/donusum";
import PageShell from "../PageShell";
import DnClosing from "./DnClosing";
import DnHero from "./DnHero";
import Faq from "./Faq";
import Frameworks from "./Frameworks";
import Process from "./Process";
import Programs from "./Programs";

// /donusum/program ve /en/transformation/programs
export default function ProgramPage({ lang }: { lang: DonusumLang }) {
  const t = programCopy[lang];
  return (
    <PageShell
      lang={lang}
      title={t.meta.title}
      description={t.meta.description}
      paths={{ tr: programCopy.tr.meta.path, en: programCopy.en.meta.path }}
    >
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
      <DnClosing heading={t.closing.heading} primary={t.closing.primary} secondary={t.closing.secondary} />
    </PageShell>
  );
}
