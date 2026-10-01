import { donusumCopy, DonusumLang } from "../../content/donusum";
import PageShell from "../PageShell";
import DenIntegration from "./DenIntegration";
import Difference from "./Difference";
import DnClosing from "./DnClosing";
import DnHero from "./DnHero";
import MaturityLadder from "./MaturityLadder";
import TransformationTypes from "./TransformationTypes";

// /donusum ve /en/transformation
export default function DonusumPage({ lang }: { lang: DonusumLang }) {
  const t = donusumCopy[lang];
  return (
    <PageShell
      lang={lang}
      title={t.meta.title}
      description={t.meta.description}
      paths={{ tr: donusumCopy.tr.meta.path, en: donusumCopy.en.meta.path }}
    >
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
    </PageShell>
  );
}
