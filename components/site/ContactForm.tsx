import { ChangeEvent, FormEvent, useState } from "react";
import { CONTACT_EMAIL, ContactCopy } from "../../content/site";

// Ana sayfadaki Erken Erişim formu buraya taşındı; gönderim e-posta istemcisini açar.
export default function ContactForm({ t }: { t: ContactCopy["form"] }) {
  const [values, setValues] = useState({ name: "", email: "", company: "", role: "", note: "" });

  function handleChange(field: keyof typeof values) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(t.subject);
    const body = encodeURIComponent(t.body(values));
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <form className="ea-form" onSubmit={handleSubmit}>
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
      <p className="ea-secondary">
        {t.secondaryPrefix} <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </>
  );
}
