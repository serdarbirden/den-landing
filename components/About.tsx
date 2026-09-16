type Lang = "tr" | "en";

const copy = {
  tr: {
    id: "hakkinda",
    label: "Nereden doğdu",
    heading: ["Teoriden değil,", <br key="br1" />, "deneyimden", <br key="br2" />, "doğduk."],
    body: [
      <>
        <strong>den</strong>, gerçek dünya temas noktalarında inşa edilen bir
        yapay zeka ürünüdür. Adımızın ilham kaynağı Türkçe&apos;nin en yoğun
        fiil köklerinden biridir: <strong>denemek</strong>,{" "}
        <strong>deneyimlemek</strong>.
      </>,
      <>
        den de bu köklerden doğdu — teoriden değil, gerçekte var olan bir
        ağrıya doğrudan temas ederek.
      </>,
    ],
  },
  en: {
    id: "about",
    label: "Where it comes from",
    heading: ["Born from", <br key="br1" />, "experience,", <br key="br2" />, "not theory."],
    body: [
      <>
        <strong>den</strong> is an AI product built at real-world points of
        contact, not in a lab. Its name comes from the Turkish verb roots{" "}
        <strong>denemek</strong> (to try) and <strong>deneyimlemek</strong>{" "}
        (to experience).
      </>,
      <>
        den was born from those same roots — not from theory, but from
        direct contact with a real, lived pain point.
      </>,
    ],
  },
};

export default function About({ lang = "tr" }: { lang?: Lang }) {
  const t = copy[lang];
  return (
    <section className="about" id={t.id}>
      <div className="reveal">
        <p className="label">{t.label}</p>
        <h2 className="about-heading">{t.heading}</h2>
      </div>
      <div className="reveal d1">
        <div className="about-body">
          {t.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
