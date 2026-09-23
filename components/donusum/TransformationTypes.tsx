import { DonusumCopy } from "../../content/donusum";
import DnSectionBar from "./DnSectionBar";

export default function TransformationTypes({ num, t }: { num: number; t: DonusumCopy["types"] }) {
  return (
    <section className="dn-section" id="donusum-turleri">
      <div className="dn-inner">
        <DnSectionBar num={num} label={t.label} />
        <h2 className="dn-heading reveal">{t.heading}</h2>
        <p className="dn-intro reveal d1">{t.intro}</p>
        <div className="dn-table-wrap reveal d1" tabIndex={0} role="region" aria-label={t.heading}>
          <table className="dn-table">
            <thead>
              <tr>
                {t.columns.map((col) => (
                  <th scope="col" key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.rows.map((row) => (
                <tr key={row.name}>
                  <th scope="row">{row.name}</th>
                  <td>{row.changes}</td>
                  <td>{row.owner}</td>
                  <td>{row.prerequisite}</td>
                  <td>
                    <ul>
                      {row.outputs.map((output) => (
                        <li key={output}>{output}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="dn-closing-line reveal">{t.dependency}</p>
      </div>
    </section>
  );
}
