export default function Philosophy() {
  return (
    <section className="philosophy" id="felsefe">
      <div className="phi-inner">
        <div className="phi-header reveal">
          <div className="label phi-label">Felsefemiz</div>
          <h2 className="phi-title-big">Üç ilke, bir yön.</h2>
        </div>
        <div className="phi-grid">
          <div className="phi-item reveal">
            <p className="phi-num">001</p>
            <h3 className="phi-name">Temas önce gelir</h3>
            <p className="phi-body">
              Araştırma, hipotez, pivot - hepsi güzel. Ama biz bunlardan önce
              gerçeğe dokunuruz. Ürünümüz önce hayatın içine girer, sonra rafine
              edilir.
            </p>
          </div>
          <div className="phi-item reveal d1">
            <p className="phi-num">002</p>
            <h3 className="phi-name">Hata bir sinyal</h3>
            <p className="phi-body">
              Hata yaptığımızda özür dilemeyiz, veri toplarız. Başarısızlık bizim
              için maliyetli değil, öğrenme hızlanıcısıdır. Hızlı hata, hızlı
              öğrenmedir.
            </p>
          </div>
          <div className="phi-item reveal d2">
            <p className="phi-num">003</p>
            <h3 className="phi-name">Ölçek sonra gelir</h3>
            <p className="phi-body">
              Önce bir problemi gerçekten çözeriz. Sonra ölçeklendiririz. Hiçbir
              ürünümüz henüz ihtiyacı kanıtlanmadan büyümez.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

