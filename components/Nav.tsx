export default function Nav() {
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
          <a href="#istirakler">Ürün&amp;Hizmetler</a>
        </li>
        <li>
          <a href="https://www.cobot-ai.co/" target="_blank" rel="noopener noreferrer">CoBoT</a>
        </li>
        <li>
          <a href="https://www.karemetre.net/" target="_blank" rel="noopener noreferrer">Karemetre</a>
        </li>
        <li>
          <a href="#felsefe">Felsefe</a>
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

