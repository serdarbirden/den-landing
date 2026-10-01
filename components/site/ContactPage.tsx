import { contactCopy, Lang, PATHS } from "../../content/site";
import DnHero from "../donusum/DnHero";
import PageShell from "../PageShell";
import ContactForm from "./ContactForm";

// /iletisim ve /en/contact — form solda, masaüstünde sağda yönlendirme kartları.
export default function ContactPage({ lang }: { lang: Lang }) {
  const t = contactCopy[lang];
  return (
    <PageShell lang={lang} title={t.meta.title} description={t.meta.description} paths={PATHS.contact}>
      <DnHero brain={false} label={t.hero.label} heading={t.hero.heading} sub={t.hero.sub} />

      <section className="dn-section dn-section--tight" id="form">
        <div className="dn-inner dn-contact">
          <div className="dn-contact-form reveal">
            <ContactForm t={t.form} />
          </div>
          <aside className="dn-contact-routes reveal d1">
            <p className="dn-field-label">{t.routes.label}</p>
            {t.routes.cards.map((card) => (
              <a className="dn-route-card" href={card.href} key={card.href}>
                <span className="dn-route-title">{card.title} →</span>
                <span className="dn-route-body">{card.body}</span>
              </a>
            ))}
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
