import { CONTACT_EMAIL } from "../../content/donusum";

type Cta = { href: string; label: string };

type Props = {
  heading: string;
  body?: string;
  primary: Cta;
  secondary?: Cta;
  showEmail?: boolean;
};

export default function DnClosing({ heading, body, primary, secondary, showEmail = true }: Props) {
  return (
    <section className="dn-closing" id="gorusme">
      <div className="dn-closing-inner">
        <h2 className="dn-closing-heading reveal">{heading}</h2>
        {body && <p className="dn-closing-body reveal d1">{body}</p>}
        <div className="dn-ctas dn-ctas-center reveal d1">
          <a href={primary.href} className="dn-btn">{primary.label}</a>
          {secondary && <a href={secondary.href} className="dn-link">{secondary.label}</a>}
        </div>
        {showEmail && (
          <p className="dn-closing-email reveal d2">
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        )}
      </div>
    </section>
  );
}
