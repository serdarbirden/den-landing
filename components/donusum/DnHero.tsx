import type { ReactNode } from "react";
import HeroCloud from "./HeroCloud";

type Cta = { href: string; label: string };

type Props = {
  label: ReactNode;
  heading: string;
  sub: string;
  primary?: Cta;
  secondary?: Cta;
  // Ana sayfadaki hafıza ağının nokta bulutu: "entry" giriş sayfası, "edge" program sayfası.
  cloud?: "entry" | "edge";
};

export default function DnHero({ label, heading, sub, primary, secondary, cloud }: Props) {
  return (
    <section className={`dn-hero${cloud ? ` dn-hero--cloud dn-hero--${cloud}` : ""}`}>
      {cloud && <HeroCloud variant={cloud} />}
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
