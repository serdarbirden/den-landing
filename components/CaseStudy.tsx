type Lang = "tr" | "en";

const copy = {
  tr: {
    heading: "İlk kullanıcısı: kurucusu.",
    body: "den'i önce kendimiz için kurduk. Kurucumuzun yıllara yayılan yazışmaları, projeleri ve kararları bugün yaşayan bir ikinci beyin. Satış sunumu yapmıyoruz; kendi den'imizle konuşuyoruz.",
    badge: "Case study — Yakında",
  },
  en: {
    heading: "Its first user: its founder.",
    body: "We built den for ourselves first. Our founder's years of correspondence, projects and decisions are now a living second brain. We don't give sales pitches; we talk to our own den.",
    badge: "Case study — Coming soon",
  },
};

export default function CaseStudy({ lang = "tr" }: { lang?: Lang }) {
  const t = copy[lang];
  return (
    <section className="case-study">
      <h2 className="case-study-heading reveal">{t.heading}</h2>
      <p className="case-study-body reveal d1">{t.body}</p>
      <span className="case-study-badge reveal d2">{t.badge}</span>
    </section>
  );
}
