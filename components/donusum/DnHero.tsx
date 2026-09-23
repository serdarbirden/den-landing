import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const BrainField = dynamic(() => import("../BrainField"), { ssr: false });

type Cta = { href: string; label: string };

type Props = {
  label: ReactNode;
  heading: string;
  sub: string;
  primary?: Cta;
  secondary?: Cta;
};

export default function DnHero({ label, heading, sub, primary, secondary }: Props) {
  return (
    <section className="dn-hero">
      {/* Ana sayfa hero'sundaki nokta bulutu beyin, koyu zeminde krem tonda. */}
      <div className="dn-hero-brain" aria-hidden="true">
        <BrainField tone="cream" />
      </div>
      <div className="dn-inner">
        <p className="dn-hero-label">{label}</p>
        <h1 className="dn-hero-title">{heading}</h1>
        <p className="dn-hero-sub">{sub}</p>
        {(primary || secondary) && (
          <div className="dn-ctas">
            {primary && <a href={primary.href} className="dn-btn">{primary.label}</a>}
            {secondary && <a href={secondary.href} className="dn-link">{secondary.label}</a>}
          </div>
        )}
      </div>
    </section>
  );
}
