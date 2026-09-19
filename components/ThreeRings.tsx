type Ring = {
  tag: string;
  name: string;
  body: string;
  subline: string;
};

const copy: { label: string; heading: string; intro: string; rings: Ring[]; closing: string } = {
  label: "Product — continued",
  heading: "Three rings, one memory.",
  intro:
    "The complete digital twin of an organization is built from three accumulating layers of experience. Every ring flows into the same memory network — one graph, one twin.",
  rings: [
    {
      tag: "core",
      name: "Human Experience",
      body: "Emails, meetings, documents and decisions accumulate in one memory network. The organization's twin and the executive's twin are born here.",
      subline: "Email · Documents · Meetings · Decisions",
    },
    {
      tag: "expansion ring",
      name: "Process Experience",
      body: "ERP, workflow and orchestration records connect through integrations. Recurring exceptions and lessons from your processes meet human decisions in the same graph.",
      subline: "ERP · Workflows · System Logs",
    },
    {
      tag: "expansion ring",
      name: "Physical Experience",
      body: "Smart buildings and facilities: sensor events, failures and maintenance history enter memory as semantic events. The building's memory lives inside the building.",
      subline: "BMS · SCADA · IoT Events · Maintenance",
    },
  ],
  closing: "Systems record. den remembers.",
};

function RingMark({ stage }: { stage: 1 | 2 | 3 }) {
  return (
    <svg className="ring-mark" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <circle cx="40" cy="40" r="14" className={stage === 1 ? "ring-live" : "ring-dim"} />
      <circle cx="40" cy="40" r="3" className={stage === 1 ? "ring-dot" : "ring-dot ring-dot-dim"} />
      {stage >= 2 && (
        <circle
          cx="40"
          cy="40"
          r="24"
          strokeDasharray="3 4"
          className={stage === 2 ? "ring-live" : "ring-dim"}
        />
      )}
      {stage >= 3 && <circle cx="40" cy="40" r="34" className="ring-live" />}
    </svg>
  );
}

export default function ThreeRings() {
  return (
    <section className="rings" id="product-rings">
      <div className="rings-inner">
        <div className="section-bar reveal">
          <span className="section-bar-label">{copy.label}</span>
        </div>
        <h2 className="rings-heading reveal">{copy.heading}</h2>
        <p className="rings-intro reveal d1">{copy.intro}</p>
        <div className="rings-grid">
          {copy.rings.map((ring, index) => (
            <div className={`rings-col reveal${index ? ` d${Math.min(index, 3)}` : ""}`} key={ring.name}>
              <RingMark stage={(index + 1) as 1 | 2 | 3} />
              <p className="rings-num">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="rings-name">{ring.name}</h3>
              <span className="rings-tag">{ring.tag}</span>
              <p className="rings-body">{ring.body}</p>
              <p className="rings-subline">{ring.subline}</p>
            </div>
          ))}
        </div>
        <p className="rings-closing reveal">{copy.closing}</p>
      </div>
    </section>
  );
}
