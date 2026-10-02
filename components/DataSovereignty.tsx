type Lang = "tr" | "en";

const copy = {
  tr: {
    id: "guvenlik",
    label: "Güvenlik",
    heading: "İkinci beyniniz binanızdan çıkmaz.",
    body: "den, kurum içi (on-premise) çalışacak şekilde tasarlandı. Verileriniz kendi altyapınızda kalır; mimari KVKK'ya uygundur, veri yurt dışına çıkmaz. İsterseniz açık kaynak modellerle, tamamen kapalı devre.",
    badges: ["On-premise", "KVKK'ya uygun mimari", "Açık kaynak model desteği"],
  },
  en: {
    id: "security",
    label: "Security",
    heading: "Your second brain never leaves your building.",
    body: "den is designed to run on-premise. Your data stays on your own infrastructure; the architecture is built for data protection rules (KVKK / GDPR), and data never leaves the country. If you choose, it runs entirely air-gapped on open-source models.",
    badges: ["On-premise", "KVKK/GDPR-ready architecture", "Open-source model support"],
  },
};

export default function DataSovereignty({ lang = "tr" }: { lang?: Lang }) {
  const t = copy[lang];
  return (
    <section className="sovereignty" id={t.id}>
      <div className="sovereignty-inner">
        <div className="section-bar reveal">
          <span className="section-bar-label">{t.label}</span>
        </div>
        <h2 className="sovereignty-heading reveal" style={{ marginTop: 28 }}>{t.heading}</h2>
        <p className="sovereignty-body reveal d1">{t.body}</p>
        <div className="badge-row reveal d2">
          {t.badges.map((badge) => (
            <span className="badge-item" key={badge}>{badge}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
