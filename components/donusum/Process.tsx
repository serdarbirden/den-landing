import { ProgramCopy } from "../../content/donusum";
import DnSectionBar from "./DnSectionBar";

export default function Process({ num, t }: { num: number; t: ProgramCopy["process"] }) {
  return (
    <section className="dn-section" id="nasil-calisiyoruz">
      <div className="dn-inner">
        <DnSectionBar num={num} label={t.label} />
        <h2 className="dn-heading reveal">{t.heading}</h2>
        <ol className="dn-flow">
          {t.steps.map((step, index) => (
            <li className={`dn-flow-step reveal${index ? ` d${Math.min(index, 3)}` : ""}`} key={step.name}>
              <p className="dn-num">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="dn-flow-name">{step.name}</h3>
              <p className="dn-flow-body">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
