const areas = [
  {
    num: "01",
    name: "Proje Yönetimi",
    body: "İnşaat altyapı ve üstyapı, fabrika ve gayrimenkul projelerinde fizibiliteden teslime uçtan uca proje yönetimi hizmeti sunarız.",
    visible: true,
  },
  {
    num: "02",
    name: "İnşaat Uygulama",
    body: "Akaryakıt enerji tesisleri, fabrika, konut, raylı sistemler ve fit-out projelerinde sahada uygulama ve yapım yönetimi yürütürüz.",
    visible: true,
  },
  {
    num: "03",
    name: "Yazılım, Otomasyon ve Yapay Zeka",
    body: "Yapay zeka, otomasyon ve yazılım çözümleriyle yapı ve endüstriyel süreçleri uçtan uca dijitalleştiririz.",
    visible: true,
  },
  {
    num: "04",
    name: "Dijital İkiz ve Veri Yönetimi",
    body: "Yapı bilgi yönetimi (BIM) süreçlerini 3 boyuttan 7 boyuta kadar uçtan uca yönetir, dijital ikiz teknolojisiyle proje verisini yaşam döngüsü boyunca değerli kılarız.",
    visible: true,
  },
  {
    num: "05",
    name: "Girişimcilik",
    body: "Sistem kurma ve ürün geliştirmeden şirket değerlemeye, yatırım süreçlerinden şirket satın alma ve birleşmelerine girişimci bir yaklaşımla değer üretiriz.",
    visible: true,
  },
];

export default function Activities() {
  const visibleAreas = areas.filter((area) => area.visible);

  return (
    <section className="activities" id="deneyim-alanlari">
      <div className="section-bar reveal">
        <span className="section-bar-label">Deneyim Alanları</span>
        <span className="section-bar-count">{String(visibleAreas.length).padStart(2, "0")}</span>
      </div>
      <p className="activities-intro reveal">
        Ürün, hizmet ve faaliyetlerimizi tek bir sektörle sınırlamayız.
        Deneyimden doğan temas noktalarını, aralarında güçlü bağlar kurduğumuz
        alanlarda hayata geçiririz.
      </p>
      <div className="activities-grid" style={{ gridTemplateColumns: `repeat(${visibleAreas.length}, 1fr)` }}>
        {visibleAreas.map((area, index) => (
          <div className={`activity-item reveal${index ? ` d${Math.min(index, 3)}` : ""}`} key={area.name}>
            <p className="activity-num">{area.num}</p>
            <h3 className="activity-name">{area.name}</h3>
            <p className="activity-body">{area.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
