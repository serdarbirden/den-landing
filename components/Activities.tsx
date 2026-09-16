type Lang = "tr" | "en";

const copy = {
  tr: {
    label: "Deneyim Alanları",
    tags: ["İnşaat", "Enerji", "Dijital İkiz & BIM", "Finans", "Yazılım & YZ", "Girişimcilik"],
    note: "den bu sahalarda, gerçek işlerin içinde test edilir.",
  },
  en: {
    label: "Experience Areas",
    tags: ["Construction", "Energy", "Digital Twin & BIM", "Finance", "Software & AI", "Entrepreneurship"],
    note: "den is tested inside real businesses, in these fields, every day.",
  },
};

export default function Activities({ lang = "tr" }: { lang?: Lang }) {
  const t = copy[lang];
  return (
    <section className="activities" id="deneyim-alanlari">
      <div className="activities-inner">
        <div className="section-bar reveal">
          <span className="section-bar-label">{t.label}</span>
        </div>
        <div className="tag-strip reveal">
          {t.tags.map((tag, index) => (
            <span key={tag}>
              <span className="tag-strip-item">{tag}</span>
              {index < t.tags.length - 1 ? <span className="tag-strip-sep">·</span> : null}
            </span>
          ))}
        </div>
        <p className="tag-strip-note reveal d1">{t.note}</p>
      </div>
    </section>
  );
}
