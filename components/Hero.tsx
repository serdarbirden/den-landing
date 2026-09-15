import dynamic from "next/dynamic";

const BrainField = dynamic(() => import("./BrainField"), { ssr: false });

const steps = ["yap", "dene", "deneyimle", "hata yap", "anında öğren"];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-brain">
        <BrainField />
      </div>
      <p className="hero-eyebrow"><strong>d</strong>irect <strong>e</strong>xperience <strong>n</strong>etwork</p>
      <p className="hero-eyebrow"><strong>den</strong>eyim</p>
      <h1 className="hero-title">İkinci Beyin.</h1>
      <p className="hero-sub">
        Sizin veya işletmenizin dijital ikizi, <span className="hero-sub-accent">ikinci beyniniz</span>.
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

