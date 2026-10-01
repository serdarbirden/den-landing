import { homeCopy, Lang } from "../content/site";

// Ana sayfa kapanışı: form /iletisim sayfasına taşındı; burada iki buton ve Dönüşüm satırı kalır.
export default function HomeClosing({ lang = "tr" }: { lang?: Lang }) {
  const t = homeCopy[lang].closing;
  return (
    <section className="early-access dn">
      <div className="early-access-inner">
        <h2 className="early-access-heading reveal">{t.heading}</h2>
        <p className="early-access-subline reveal">{t.subline}</p>
        <div className="dn-ctas dn-ctas-center reveal d1">
          <a href={t.primary.href} className="dn-btn">{t.primary.label}</a>
          <a href={t.secondary.href} className="dn-link">{t.secondary.label}</a>
        </div>
        <p className="ea-crosslink reveal d2">
          {t.crossLink.before}
          <a href={t.crossLink.link.href}>{t.crossLink.link.label}</a>
          {t.crossLink.after}
        </p>
      </div>
    </section>
  );
}
