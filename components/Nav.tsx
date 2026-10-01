import { useEffect, useRef, useState } from "react";
import { Lang, PATHS } from "../content/site";
import LangSwitch from "./LangSwitch";

// Menü öğeleri ayrı sayfalara gider; çapa (#) bağlantısı kullanılmaz.
const copy = {
  tr: {
    links: [
      { href: PATHS.product.tr, label: "Ürün" },
      { href: PATHS.transformation.tr, label: "Dönüşüm" },
      { href: PATHS.about.tr, label: "Hakkında" },
    ],
    cta: { href: PATHS.contact.tr, label: "İletişim" },
    menuLabel: "Menüyü aç/kapat",
    navLabel: "Ana menü",
  },
  en: {
    links: [
      { href: PATHS.product.en, label: "Product" },
      { href: PATHS.transformation.en, label: "Transformation" },
      { href: PATHS.about.en, label: "About" },
    ],
    cta: { href: PATHS.contact.en, label: "Contact" },
    menuLabel: "Toggle menu",
    navLabel: "Main menu",
  },
};

type NavProps = {
  lang?: Lang;
  // Bu sayfanın yolu (ör. "/donusum/program"); ilgili menü öğesi aktif gösterilir.
  current?: string;
  // Bu sayfanın diğer dildeki eşleniği.
  alternate?: string;
};

export default function Nav({ lang = "tr", current, alternate }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const t = copy[lang];
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
    <nav aria-label={t.navLabel} ref={navRef}>
      <div className="nav-brand">
        <a href={PATHS.home[lang]} className="nav-wordmark">
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
              href={link.href}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li className="nav-cta-item">
          <a
            href={t.cta.href}
            className="nav-cta"
            aria-current={isCurrent(t.cta.href) ? "page" : undefined}
            onClick={() => setMobileOpen(false)}
          >
            {t.cta.label}
          </a>
        </li>
        <li>
          <LangSwitch lang={lang} current={current} alternate={alternate} />
        </li>
      </ul>
    </nav>
  );
}
