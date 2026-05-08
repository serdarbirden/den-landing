export default function Products() {
  return (
    <section className="products" id="istirakler">
      <div className="section-bar reveal">
        <span className="section-bar-label">Ürün&amp;Hizmetler</span>
        <span className="section-bar-count">02</span>
      </div>
      <div className="product-grid">
        <a id="cobot" href="https://www.cobot-ai.co/" target="_blank" rel="noopener noreferrer" className="pcard reveal">
          <span className="pcard-arrow">↗</span>
          <p className="pcard-num">01</p>
          <div className="pcard-name">CoBoT</div>
          <div className="pcard-tag">Yapay Zeka · Mühendislik</div>
          <p className="pcard-desc">
            Harita mühendisliği iş akışlarını otomatize eden AI tasarım ajanı.
            Günlerce süren manuel üretimi dakikalara indirger; lisanslı
            mühendislerin yanında çalışır, onların yerine geçmez.
          </p>
        </a>
        <a id="karemetre" href="https://www.karemetre.net/" target="_blank" rel="noopener noreferrer" className="pcard reveal d1">
          <span className="pcard-arrow">↗</span>
          <p className="pcard-num">02</p>
          <div className="pcard-name">Karemetre</div>
          <div className="pcard-tag">Gayrimenkul · Veri</div>
          <p className="pcard-desc">
            Türkiye gayrimenkul piyasasında gerçek zamanlı veri katmanı. Alıcıya,
            satıcıya ve yatırımcıya temiz, doğrulanabilir bilgi sunar. Tahmin
            değil, temas.
          </p>
        </a>
      </div>
    </section>
  );
}

