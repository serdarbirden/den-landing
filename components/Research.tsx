const pillars = [
  {
    num: "001",
    name: "Yapay Zeka Araştırması",
    body: "Yapay zeka araştırmalarına doğrudan yatırım yapıyoruz; teoriden değil, sahadan gelen gerçek problemlerden yola çıkan modeller ve yöntemler geliştiriyoruz.",
  },
  {
    num: "002",
    name: "Yerel Dil Modeli",
    body: "Kendi yerel dil modelimizi sıfırdan geliştiriyoruz. Türkçe'yi ve sahadan topladığımız deneyimi merkezine alan, bize özgü bir zeka inşa ediyoruz.",
  },
  {
    num: "003",
    name: "Ürünler",
    body: "Bu modelin üzerine, gerçek sürtünmeleri çözen ürünler inşa ediyoruz. CoBoT, bu yaklaşımın bugün sahada olan ilk somut örneği.",
  },
];

export default function Research() {
  return (
    <section className="research" id="yapay-zeka">
      <div className="research-inner">
        <div className="section-bar reveal">
          <span className="section-bar-label">Yapay Zeka</span>
        </div>
        <h2 className="research-title reveal">Şimdi hedefimiz: yapay zeka.</h2>
        <p className="research-intro reveal d1">
          Bugüne kadar sahada biriktirdiğimiz deneyimi, artık yapay zeka
          araştırmalarına ve kendi yerel dil modelimize taşıyoruz. Gerçek
          dünyadan öğrenen bir zeka inşa ediyor, bu zekanın üzerine ürünler
          geliştiriyoruz.
        </p>
        <div className="research-grid">
          {pillars.map((pillar, index) => (
            <div className={`research-item reveal${index ? ` d${Math.min(index, 3)}` : ""}`} key={pillar.name}>
              <p className="research-num">{pillar.num}</p>
              <h3 className="research-name">{pillar.name}</h3>
              <p className="research-body">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
