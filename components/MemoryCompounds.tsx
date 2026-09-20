import {
  denGrowthSvg2014,
  denGrowthSvg2018,
  denGrowthSvg2022,
  denGrowthSvgToday,
} from "./denGrowthSvgs";

type Lang = "tr" | "en";

type Panel = {
  year: string;
  meta: string;
  ariaLabel: string;
  body: string;
  now?: boolean;
};

const copy: Record<Lang, { label: string; heading: string; lead: string; closing: string; panels: Panel[] }> = {
  tr: {
    label: "Hafıza",
    heading: "Hafıza birikir.",
    lead: "Aynı ağ, dört dönemde. Her yeni deneyim bir düğüm, her karar bir bağ olur. Siz çalıştıkça hafızanız büyür.",
    closing: "Hiçbir deneyim boşa gitmez.",
    panels: [
      { year: "2014", meta: "1.716 deneyim · 0 karar", ariaLabel: "2014 döneminde hafıza ağı", body: denGrowthSvg2014 },
      { year: "2018", meta: "5.265 deneyim · 22 karar", ariaLabel: "2018 döneminde hafıza ağı", body: denGrowthSvg2018 },
      { year: "2022", meta: "11.388 deneyim · 55 karar", ariaLabel: "2022 döneminde hafıza ağı", body: denGrowthSvg2022 },
      { year: "BUGÜN", meta: "18.330 deneyim · 143 karar", ariaLabel: "BUGÜN döneminde hafıza ağı", body: denGrowthSvgToday, now: true },
    ],
  },
  en: {
    label: "Memory",
    heading: "Memory compounds.",
    lead: "The same network across four periods. Every new experience becomes a node, every decision a link. Your memory grows as you work.",
    closing: "No experience is ever wasted.",
    panels: [
      { year: "2014", meta: "1,716 experiences · 0 decisions", ariaLabel: "Memory network in 2014", body: denGrowthSvg2014 },
      { year: "2018", meta: "5,265 experiences · 22 decisions", ariaLabel: "Memory network in 2018", body: denGrowthSvg2018 },
      { year: "2022", meta: "11,388 experiences · 55 decisions", ariaLabel: "Memory network in 2022", body: denGrowthSvg2022 },
      { year: "TODAY", meta: "18,330 experiences · 143 decisions", ariaLabel: "Memory network today", body: denGrowthSvgToday, now: true },
    ],
  },
};

export default function MemoryCompounds({ lang = "tr" }: { lang?: Lang }) {
  const t = copy[lang];
  return (
    <section className="den-growth" aria-labelledby="den-growth-title">
      <div className="den-growth__inner">
        <p className="den-growth__label">{t.label}</p>
        <h2 id="den-growth-title">{t.heading}</h2>
        <p className="den-growth__lead">{t.lead}</p>
        <div className="den-growth__grid">
          {t.panels.map((panel) => (
            <figure className={`den-panel${panel.now ? " den-panel--now" : ""}`} key={panel.year}>
              <svg
                viewBox="0 0 300 300"
                role="img"
                aria-label={panel.ariaLabel}
                preserveAspectRatio="xMidYMid meet"
                dangerouslySetInnerHTML={{ __html: panel.body }}
              />
              <figcaption>
                <span className="den-panel__year">{panel.year}</span>
                <span className="den-panel__meta">{panel.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="den-growth__closing">{t.closing}</p>
      </div>
    </section>
  );
}
