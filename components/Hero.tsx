const steps = ["yap", "dene", "deneyimle", "hata yap", "anında öğren"];

export default function Hero() {
  return (
    <section className="hero">
      <img src="/ap1.png" alt="" className="hero-bg" />
      <p className="hero-eyebrow"><strong>d</strong>irect <strong>e</strong>xperience <strong>n</strong>etwork</p>
      <p className="hero-eyebrow"><strong>den</strong>eyim</p>
      <h1 className="hero-title">
        Hayatı düşünmez,
        <br />
        hayata temas eder.
      </h1>
      <p className="hero-sub">
        Teoriden değil, deneyimden inşa edilmiş ürünler. Gerçek temas
        noktalarında, gerçek problemlere.
      </p>
      <div className="hero-steps">
        {steps.map((step, index) => (
          <span key={step}>
            <span className="step-item">{step}</span>
            {index < steps.length - 1 ? <span className="step-sep" /> : null}
          </span>
        ))}
      </div>
      <div className="hero-scroll">
        <div className="scroll-bar" />
        <span>aşağı</span>
      </div>
    </section>
  );
}

