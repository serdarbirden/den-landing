export default function Nav() {
  return (
    <nav aria-label="Ana menü">
      <a href="#top" className="nav-wordmark">
        <img src="/denlogo.png" alt="den" className="nav-logo" />
      </a>
      <ul className="nav-links">
        <li>
          <a href="#hakkinda">Hakkında</a>
        </li>
        <li>
          <a href="#istirakler">İştirakler</a>
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

