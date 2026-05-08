export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <a href="#top" className="footer-word">
          <img src="/denlogo.png" alt="den" className="footer-logo" />
        </a>
        <span className="footer-dn"><strong>d</strong>irect <strong>e</strong>xperience <strong>n</strong>etwork</span>
      </div>
      <ul className="footer-links">
        <li>
          <a href="#cobot">CoBoT</a>
        </li>
        <li>
          <a href="#karemetre">Karemetre</a>
        </li>
        <li>
          <a href="#hakkinda">Hakkında</a>
        </li>
        <li>
          <a href="#iletisim">İletişim</a>
        </li>
      </ul>
      <span className="footer-copy">© 2025 den</span>
    </footer>
  );
}

