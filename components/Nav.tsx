import { useEffect, useRef, useState } from "react";

type Lang = "tr" | "en";

const copy = {
  tr: {
    links: [
      { href: "#urun", label: "Ürün" },
      { href: "#nasil-calisir", label: "Nasıl Çalışır" },
      { href: "#guvenlik", label: "Güvenlik" },
      { href: "/donusum", label: "Dönüşüm" },
      { href: "#hakkinda", label: "Hakkında" },
    ],
    cta: { href: "#erken-erisim", label: "Erken Erişim" },
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

type NavProps = {
  lang?: Lang;
  // Ürün sayfasının yolu; alt sayfalarda "#urun" gibi bağlantılar bu yola eklenir.
  home?: string;
  // Alt sayfadaysak o sayfanın yolu (ör. "/donusum"); menüde aktif gösterilir.
  current?: string;
  // Sayfanın diğer dildeki karşılığı yoksa dil seçici gizlenir.
  showLangSwitch?: boolean;
};

export default function Nav({ lang = "tr", home, current, showLangSwitch = true }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const t = copy[lang];
  const resolve = (href: string) => (home && href.startsWith("#") ? `${home}${href}` : href);
  const isCurrent = (href: string) => current !== undefined && current.startsWith(href);

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
        <a href={home ?? "#top"} className="nav-wordmark">
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
            <a
              href={resolve(link.href)}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a href={resolve(t.cta.href)} className="nav-cta" onClick={() => setMobileOpen(false)}>
            {t.cta.label}
          </a>
        </li>
        {showLangSwitch && (
          <li>
            <span className="nav-lang">
              <a href="/" className={lang === "tr" ? "active" : undefined}>TR</a>
              <span className="nav-lang-sep">/</span>
              <a href="/en" className={lang === "en" ? "active" : undefined}>EN</a>
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
}
