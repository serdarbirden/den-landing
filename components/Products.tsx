type SoonProduct = {
  num: string;
  name: string;
  logo: string;
  logoClass?: string;
  tag: string;
  desc: string;
  hidden?: boolean;
};

const soonProducts: SoonProduct[] = [
  {
    num: "03",
    name: "E-Fill Enerji",
    logo: "/efill-transparent-trimmed.png",
    tag: "Enerji · Şarj Teknolojileri",
    desc: "Güneş ve rüzgâr yatırımlarından şebeke altyapısına, elektrikli araç şarj çözümlerinden yerli şarj ünitesi Ar-Ge'sine kadar enerjinin tüm değer zincirinde çalışan bir enerji şirketi.",
  },
  {
    num: "04",
    name: "PAF",
    logo: "/PAF-transparent-trimmed.png",
    tag: "Endüstriyel Çözümler · Mühendislik",
    desc: "Ürün satışını mühendislik, teknik uzmanlık, proje yönetimi ve sürdürülebilir tedarik yaklaşımıyla aynı yapı altında birleştiren yeni nesil bir endüstriyel çözüm merkezi.",
    hidden: true,
  },
];

const visibleSoonProducts = soonProducts.filter((p) => !p.hidden);

export default function Products() {
  return (
    <section className="products" id="istirakler">
      <div className="section-bar reveal">
        <span className="section-bar-label">İştirakler & Markalar</span>
        <span className="section-bar-count">
          {String(2 + visibleSoonProducts.length).padStart(2, "0")}
        </span>
      </div>
      <div className="product-grid product-grid-centered">
        <div className="pcard pcard-soon reveal">
          <p className="pcard-num">01</p>
          <img
            src="/Karemetre-yeni-transparent-trimmed.png"
            alt="Karemetre"
            className="pcard-logo pcard-logo-square"
          />
          <div className="pcard-tag">Gayrimenkul · Veri</div>
          <p className="pcard-desc">
            Gayrimenkul danışmanlığı, fizibilite ve proje yönetimi uzmanlığına
            teknoloji ve veri odaklı bir bakış açısı katan; danışmanlıktan
            kendi projelerine satış ve kiralamada uçtan uca değer yaratan bir
            gayrimenkul şirketi.
          </p>
          <span className="pcard-soon-badge">Çok Yakında</span>
        </div>
        <a
          href="https://www.cobot-ai.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="pcard reveal"
        >
          <span className="pcard-arrow">↗</span>
          <p className="pcard-num">02</p>
          <img
            src="/CoBoT-transparent-trimmed.png"
            alt="CoBoT"
            className="pcard-logo"
          />
          <div className="pcard-tag">Yapay Zeka · İnşaat & Savunma</div>
          <p className="pcard-desc">
            İnşaat, gayrimenkul ve savunma sanayii için yapay zeka destekli tek
            platform. BIM analizi, imar otomasyonu, ihale takibi, metraj ve iş
            programı üretimi gibi sekiz modülü tek arayüzde birleştirir.
          </p>
        </a>
        {visibleSoonProducts.map((p, i) => (
          <div key={p.name} className={`pcard pcard-soon reveal d${i + 1}`}>
            <p className="pcard-num">{p.num}</p>
            <img
              src={p.logo}
              alt={p.name}
              className={`pcard-logo ${p.logoClass ?? ""}`}
            />
            <div className="pcard-tag">{p.tag}</div>
            <p className="pcard-desc">{p.desc}</p>
            <span className="pcard-soon-badge">Çok Yakında</span>
          </div>
        ))}
      </div>
    </section>
  );
}
