type Lang = "tr" | "en";

type Ring = {
  tag: string;
  name: string;
  body: string;
  subline: string;
};

type Copy = { label: string; heading: string; intro: string; rings: Ring[]; closing: string };

const copy: Record<Lang, Copy> = {
  tr: {
    label: "Ürün — devamı",
    heading: "Üç halka, tek hafıza.",
    intro:
      "Bir kurumun eksiksiz dijital ikizi, birbiri üzerine biriken üç deneyim katmanından kurulur. Her halka aynı hafıza ağına akar — tek graf, tek ikiz.",
    rings: [
      {
        tag: "çekirdek",
        name: "İnsan Deneyimi",
        body: "E-postalar, toplantılar, belgeler ve kararlar tek bir hafıza ağında birikir. Kurumun ikizi ve yöneticinin ikizi burada doğar.",
        subline: "E-posta · Belgeler · Toplantılar · Kararlar",
      },
      {
        tag: "genişleme halkası",
        name: "Süreç Deneyimi",
        body: "ERP, iş akışı ve orkestrasyon kayıtları entegrasyonlarla bağlanır. Süreçlerinizdeki tekrar eden istisnalar ve dersler, aynı grafta insan kararlarıyla buluşur.",
        subline: "ERP · İş Akışları · Sistem Kayıtları",
      },
      {
        tag: "genişleme halkası",
        name: "Fiziksel Deneyim",
        body: "Akıllı binalar ve tesisler: sensör olayları, arızalar ve bakım geçmişi anlamlı olaylar olarak hafızaya girer. Binanın hafızası, binanın içinde yaşar.",
        subline: "BMS · SCADA · IoT Olayları · Bakım",
      },
    ],
    closing: "Sistemler kaydeder. den hatırlar.",
  },
  en: {
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
  },
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

export default function ThreeRings({ lang = "tr" }: { lang?: Lang }) {
  const t = copy[lang];
  return (
    <section className="rings" id="product-rings">
      <div className="rings-inner">
        <div className="section-bar reveal">
          <span className="section-bar-label">{t.label}</span>
        </div>
        <h2 className="rings-heading reveal">{t.heading}</h2>
        <p className="rings-intro reveal d1">{t.intro}</p>
        <div className="rings-grid">
          {t.rings.map((ring, index) => (
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
        <p className="rings-closing reveal">{t.closing}</p>
      </div>
    </section>
  );
}
