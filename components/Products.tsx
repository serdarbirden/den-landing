export default function Products() {
  return (
    <section className="products" id="istirakler">
      <div className="section-bar reveal">
        <span className="section-bar-label">İştirakler & Markalar</span>
        <span className="section-bar-count">01</span>
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
          <div className="pcard-name">GoDoT</div>
          <div className="pcard-tag">Yapay Zeka · İnşaat & Savunma</div>
          <p className="pcard-desc">
            İnşaat, gayrimenkul ve savunma sanayii için yapay zeka destekli tek
            platform. BIM analizi, imar otomasyonu, ihale takibi, metraj ve iş
            programı üretimi gibi sekiz modülü tek arayüzde birleştirir.
          </p>
        </a>
      </div>
    </section>
  );
}
