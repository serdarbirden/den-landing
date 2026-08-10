const areas = [
  {
    num: "01",
    name: "İnşaat",
    body: "Yapı ve altyapı projelerinde saha bilgisini süreç ve teknolojiyle birleştiren faaliyetler yürütürüz.",
  },
  {
    num: "02",
    name: "Gayrimenkul",
    body: "Gayrimenkul geliştirme, yapım ve proje yönetiminde uçtan uca çözümler sunarız; fizibiliden anahtar teslime kadar sahadayız.",
  },
  {
    num: "03",
    name: "Teknoloji",
    body: "Yapay zeka ve mühendislik alanında gerçek problemlere doğrudan temas eden ürünler tasarlarız.",
  },
  {
    num: "04",
    name: "Girişimcilik",
    body: "Gerçek bir sürtünme gördüğümüzde yeni bir girişim kurarız; fikirden ürüne, deneyerek ve sahada öğrenerek ilerleriz.",
  },
  {
    num: "05",
    name: "Enerji",
    body: "Enerji verimliliği ve sürdürülebilirlik odaklı ürün ve hizmetler üzerinde çalışırız.",
  },
  {
    num: "06",
    name: "Savunma Sanayi",
    body: "Savunma sanayinde mühendislik disipliniyle teknoloji odaklı faaliyetler yürütürüz.",
  },
];

export default function Activities() {
  return (
    <section className="activities" id="deneyim-alanlari">
      <div className="section-bar reveal">
        <span className="section-bar-label">Deneyim Alanları</span>
        <span className="section-bar-count">06</span>
      </div>
      <p className="activities-intro reveal">
        Ürün, hizmet ve faaliyetlerimizi tek bir sektörle sınırlamayız.
        Deneyimden doğan temas noktalarını, aralarında güçlü bağlar kurduğumuz
        altı alanda hayata geçiririz.
      </p>
      <div className="activities-grid">
        {areas.map((area, index) => (
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
