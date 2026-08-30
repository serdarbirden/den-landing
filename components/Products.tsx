const soonProducts = [
  {
    num: "02",
    name: "Karemetre",
    logo: "/Karemetre-transparent-trimmed.png",
    tag: "Gayrimenkul · Veri",
    desc: "Türkiye gayrimenkul piyasasında gerçek zamanlı veri katmanı. Alıcıya, satıcıya ve yatırımcıya temiz, doğrulanabilir bilgi sunar. Tahmin değil, temas.",
  },
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
  },
];

export default function Products() {
  return (
    <section className="products" id="istirakler">
      <div className="section-bar reveal">
        <span className="section-bar-label">İştirakler & Markalar</span>
        <span className="section-bar-count">04</span>
      </div>
      <div className="product-grid">
        <a
          href="https://www.cobot-ai.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="pcard reveal"
        >
          <span className="pcard-arrow">↗</span>
          <p className="pcard-num">01</p>
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
        {soonProducts.map((p, i) => (
          <div key={p.name} className={`pcard pcard-soon reveal d${i + 1}`}>
            <p className="pcard-num">{p.num}</p>
            <img src={p.logo} alt={p.name} className="pcard-logo" />
            <div className="pcard-tag">{p.tag}</div>
            <p className="pcard-desc">{p.desc}</p>
            <span className="pcard-soon-badge">Çok Yakında</span>
          </div>
        ))}
      </div>
    </section>
  );
}
