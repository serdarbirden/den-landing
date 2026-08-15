import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav aria-label="Ana menü">
      <div className="nav-brand">
        <a href="#top" className="nav-wordmark">
          <img src="/denlogo.png" alt="den" className="nav-logo" />
        </a>
        <span className="nav-dn"><strong>d</strong>irect <strong>e</strong>xperience <strong>n</strong>etwork</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#hakkinda">Hakkında</a>
        </li>
        <li>
          <a href="#deneyim-alanlari">Deneyim Alanları</a>
        </li>
        <li>
          <a href="#yapay-zeka">Yapay Zeka</a>
        </li>
        <li>
          <a href="#felsefe">Felsefe</a>
        </li>
        <li className="nav-dropdown" ref={dropdownRef}>
          <div className="nav-cta-split">
            <a
              href="https://www.cobot-ai.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta-main"
            >
              CoBoT Dene
            </a>
            <button
              type="button"
              className="nav-cta-chevron"
              aria-haspopup="true"
              aria-expanded={open}
              aria-label="CoBoT ürünlerini göster"
              onClick={() => setOpen((v) => !v)}
            >
              ⌄
            </button>
          </div>
          {open && (
            <ul className="nav-dropdown-menu">
              <li>
                <a href="https://www.cobot-ai.co/" target="_blank" rel="noopener noreferrer">
                  CoBoT Yapı Zekası
                </a>
              </li>
              <li>
                <a href="https://www.cobot-ai.co/" target="_blank" rel="noopener noreferrer">
                  CoBoT Tesis Zekası
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#iletisim" className="nav-cta">
            İletişim
          </a>
        </li>
      </ul>
    </nav>
  );
}

