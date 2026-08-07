const areas = [
  {
    num: "01",
    name: "İnşaat",
    body: "Yapı ve altyapı projelerinde saha bilgisini süreç ve teknolojiyle birleştiren faaliyetler yürütürüz.",
  },
  {
    num: "02",
    name: "Gayrimenkul",
    body: "Gayrimenkul piyasasında veri, ürün ve hizmet katmanları geliştiririz; alıcıya, satıcıya ve yatırımcıya temas ederiz.",
  },
  {
    num: "03",
    name: "Teknoloji",
    body: "Yapay zeka ve mühendislik alanında gerçek problemlere doğrudan temas eden ürünler tasarlarız.",
  },
  {
    num: "04",
    name: "Enerji",
    body: "Enerji verimliliği ve sürdürülebilirlik odaklı ürün ve hizmetler üzerinde çalışırız.",
  },
  {
    num: "05",
    name: "Savunma Sanayi",
    body: "Savunma sanayinde mühendislik disipliniyle teknoloji odaklı faaliyetler yürütürüz.",
  },
];

export default function Activities() {
  return (
    <section className="activities" id="faaliyet-alanlari">
      <div className="section-bar reveal">
        <span className="section-bar-label">Faaliyet Alanları</span>
        <span className="section-bar-count">05</span>
      </div>
      <p className="activities-intro reveal">
        Ürün, hizmet ve faaliyetlerimizi tek bir sektörle sınırlamayız.
        Deneyimden doğan temas noktalarını, aralarında güçlü bağlar kurduğumuz
        beş alanda hayata geçiririz.
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
