export default function Products() {
  return (
    <section className="products" id="istirakler">
      <div className="section-bar reveal">
        <span className="section-bar-label">İştirakler</span>
        <span className="section-bar-count">02</span>
      </div>
      <div className="product-grid">
        <a id="cobot" href="https://www.cobot-ai.co/" target="_blank" rel="noopener noreferrer" className="pcard reveal">
          <span className="pcard-arrow">↗</span>
          <p className="pcard-num">01</p>
          <div className="pcard-name">CoBoT</div>
          <div className="pcard-tag">Yapay Zeka · İnşaat & Savunma</div>
          <p className="pcard-desc">
            İnşaat, gayrimenkul ve savunma sanayii için yapay zeka destekli tek
            platform. BIM analizi, imar otomasyonu, ihale takibi, metraj ve iş
            programı üretimi gibi sekiz modülü tek arayüzde birleştirir.
          </p>
        </a>
        <a id="karemetre" href="https://www.karemetre.net/" target="_blank" rel="noopener noreferrer" className="pcard reveal d1">
          <span className="pcard-arrow">↗</span>
          <p className="pcard-num">02</p>
          <div className="pcard-name">Karemetre</div>
          <div className="pcard-tag">İnşaat 4.0 · Gayrimenkul Geliştirme</div>
          <p className="pcard-desc">
            15 yıllık inşaat ve proje yönetimi tecrübesiyle gayrimenkul
            geliştirme, yapım, tasarım ve fizibilite alanlarında uçtan uca
            çözümler sunar. Anahtar teslimden bütçe ve kalite yönetimine kadar
            yeni nesil yapı teknolojileriyle çalışır.
          </p>
        </a>
      </div>
    </section>
  );
}

