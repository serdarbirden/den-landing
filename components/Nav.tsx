import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

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
    <nav aria-label="Ana menü" ref={navRef}>
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
        aria-label="Menüyü aç/kapat"
        onClick={() => setMobileOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`nav-links${mobileOpen ? " nav-links-open" : ""}`}>
        <li>
          <a href="#hakkinda" onClick={() => setMobileOpen(false)}>Hakkında</a>
        </li>
        <li>
          <a href="#deneyim-alanlari" onClick={() => setMobileOpen(false)}>Deneyim Alanları</a>
        </li>
        <li>
          <a href="#istirakler" onClick={() => setMobileOpen(false)}>İştirakler</a>
        </li>
        <li>
          <a href="#felsefe" onClick={() => setMobileOpen(false)}>Felsefe</a>
        </li>
        <li>
          <a href="#iletisim" className="nav-cta" onClick={() => setMobileOpen(false)}>
            İletişim
          </a>
        </li>
      </ul>
    </nav>
  );
}

