import { ChangeEvent, FormEvent, useState } from "react";

type Lang = "tr" | "en";

const EMAIL = "serdarbirden@denofficial.com";

const copy = {
  tr: {
    id: "erken-erisim",
    heading: "Biriktirmeye bugün başlayın.",
    subline: "Kurumunuzun hafızası, sizinle konuşmaya hazır.",
    fields: {
      name: "Ad Soyad",
      email: "E-posta",
      company: "Şirket",
      role: "Rol",
      note: "Sizi en çok ne yoruyor? (opsiyonel)",
    },
    submit: "İletişim",
    secondaryPrefix: "Ya da doğrudan yazın:",
    subject: "Erken Erişim Talebi",
    crossLink: {
      before: "Kurumsal dönüşüm programlarımız için ",
      link: { href: "/donusum", label: "Dönüşüm" },
      after: " bölümüne bakın.",
    },
    body: (v: Record<string, string>) =>
      `Ad Soyad: ${v.name}\nE-posta: ${v.email}\nŞirket: ${v.company}\nRol: ${v.role}\nSizi en çok ne yoruyor?: ${v.note}`,
  },
  en: {
    id: "early-access",
    heading: "Start compounding today.",
    subline: "Your organization's memory is ready to talk to you.",
    fields: {
      name: "Full name",
      email: "Email",
      company: "Company",
      role: "Role",
      note: "What wears you out the most? (optional)",
    },
    submit: "Contact",
    secondaryPrefix: "Or write directly:",
    subject: "Early Access Request",
    crossLink: {
      before: "For our organizational transformation programs, see ",
      link: { href: "/en/transformation", label: "Transformation" },
      after: ".",
    },
    body: (v: Record<string, string>) =>
      `Name: ${v.name}\nEmail: ${v.email}\nCompany: ${v.company}\nRole: ${v.role}\nWhat wears you out the most?: ${v.note}`,
  },
};

export default function EarlyAccess({ lang = "tr" }: { lang?: Lang }) {
  const t = copy[lang];
  const [values, setValues] = useState({ name: "", email: "", company: "", role: "", note: "" });

  function handleChange(field: keyof typeof values) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(t.subject);
    const body = encodeURIComponent(t.body(values));
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="early-access" id={t.id}>
      <div className="early-access-inner">
        <h2 className="early-access-heading reveal">{t.heading}</h2>
        <p className="early-access-subline reveal">{t.subline}</p>
        <form className="ea-form reveal d1" onSubmit={handleSubmit}>
          <div className="ea-row">
            <div className="ea-field">
              <label htmlFor="ea-name">{t.fields.name}</label>
              <input id="ea-name" type="text" required value={values.name} onChange={handleChange("name")} />
            </div>
            <div className="ea-field">
              <label htmlFor="ea-email">{t.fields.email}</label>
              <input id="ea-email" type="email" required value={values.email} onChange={handleChange("email")} />
            </div>
          </div>
          <div className="ea-row">
            <div className="ea-field">
              <label htmlFor="ea-company">{t.fields.company}</label>
              <input id="ea-company" type="text" required value={values.company} onChange={handleChange("company")} />
            </div>
            <div className="ea-field">
              <label htmlFor="ea-role">{t.fields.role}</label>
              <input id="ea-role" type="text" required value={values.role} onChange={handleChange("role")} />
            </div>
          </div>
          <div className="ea-field">
            <label htmlFor="ea-note">{t.fields.note}</label>
            <textarea id="ea-note" rows={3} value={values.note} onChange={handleChange("note")} />
          </div>
          <button type="submit" className="ea-submit">{t.submit}</button>
        </form>
        <p className="ea-secondary reveal d2">
          {t.secondaryPrefix} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
        {t.crossLink && (
          <p className="ea-crosslink reveal d2">
            {t.crossLink.before}
            <a href={t.crossLink.link.href}>{t.crossLink.link.label}</a>
            {t.crossLink.after}
          </p>
        )}
      </div>
    </section>
  );
}
