import { Fragment, useEffect, useRef, useState } from "react";

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
    cta: { href: "#erken-erisim", label: "İletişim" },
    menuLabel: "Menüyü aç/kapat",
  },
  en: {
    links: [
      { href: "#product", label: "Product" },
      { href: "#how-it-works", label: "How It Works" },
      { href: "#security", label: "Security" },
      { href: "/en/transformation", label: "Transformation" },
      { href: "#about", label: "About" },
    ],
    cta: { href: "#early-access", label: "Contact" },
    menuLabel: "Toggle menu",
  },
};

type NavProps = {
  lang?: Lang;
  // Ürün sayfasının yolu; alt sayfalarda "#urun" gibi bağlantılar bu yola eklenir.
  home?: string;
  // Alt sayfadaysak o sayfanın yolu (ör. "/donusum/program"); ilgili menü öğesi aktif gösterilir.
  current?: string;
  // Bu sayfanın diğer dildeki eşleniği. Eşlenik yoksa diğer dilin ana sayfasına gidilir.
  alternate?: string;
};

const LANG_HOME: Record<Lang, string> = { tr: "/", en: "/en" };

export default function Nav({ lang = "tr", home, current, alternate }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const t = copy[lang];
  const resolve = (href: string) => (home && href.startsWith("#") ? `${home}${href}` : href);
  const isCurrent = (href: string) => current !== undefined && current.startsWith(href);
  const langHref = (target: Lang) =>
    target === lang ? current ?? LANG_HOME[lang] : alternate ?? LANG_HOME[target];

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
        <li>
          <span className="nav-lang">
            {(["tr", "en"] as Lang[]).map((target, index) => (
              <Fragment key={target}>
                {index > 0 && <span className="nav-lang-sep">/</span>}
                <a
                  href={langHref(target)}
                  hrefLang={target}
                  lang={target}
                  className={target === lang ? "active" : undefined}
                  aria-current={target === lang ? "true" : undefined}
                >
                  {target.toUpperCase()}
                </a>
              </Fragment>
            ))}
          </span>
        </li>
      </ul>
    </nav>
  );
}
