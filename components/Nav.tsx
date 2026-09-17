import { useEffect, useRef, useState } from "react";

type Lang = "tr" | "en";

const copy = {
  tr: {
    links: [
      { href: "#urun", label: "Ürün" },
      { href: "#nasil-calisir", label: "Nasıl Çalışır" },
      { href: "#guvenlik", label: "Güvenlik" },
      { href: "#hakkinda", label: "Hakkında" },
    ],
    cta: { href: "#erken-erisim", label: "İletişim" },
    menuLabel: "Menüyü aç/kapat",
  },
  en: {
    links: [
      { href: "#product", label: "Product" },
      { href: "#how-it-works", label: "How It Works" },
      { href: "#security", label: "Security" },
      { href: "#about", label: "About" },
    ],
    cta: { href: "#early-access", label: "Early Access" },
    menuLabel: "Toggle menu",
  },
};

export default function Nav({ lang = "tr" }: { lang?: Lang }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const t = copy[lang];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", mobileOpen);
    return () => document.body.classList.remove("nav-open");
  }, [mobileOpen]);

  return (
    <nav aria-label={lang === "tr" ? "Ana menü" : "Main menu"} ref={navRef}>
      <div className="nav-brand">
        <a href="#top" className="nav-wordmark">
          <img src="/denlogo.png" alt="den" className="nav-logo" />
        </a>
        <span className="nav-dn"><strong>d</strong>irect <strong>e</strong>xperience <strong>n</strong>etwork</span>
      </div>
      <button
        type="button"
        className="nav-hamburger"
        aria-haspopup="true"
        aria-expanded={mobileOpen}
        aria-label={t.menuLabel}
        onClick={() => setMobileOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`nav-links${mobileOpen ? " nav-links-open" : ""}`}>
        {t.links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</a>
          </li>
        ))}
        <li>
          <a href={t.cta.href} className="nav-cta" onClick={() => setMobileOpen(false)}>
            {t.cta.label}
          </a>
        </li>
        <li>
          <span className="nav-lang">
            <a href="/" className={lang === "tr" ? "active" : undefined}>TR</a>
            <span className="nav-lang-sep">/</span>
            <a href="/en" className={lang === "en" ? "active" : undefined}>EN</a>
          </span>
        </li>
      </ul>
    </nav>
  );
}
