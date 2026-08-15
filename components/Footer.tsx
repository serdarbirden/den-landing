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
          <a href="#yapay-zeka">Yapay Zeka</a>
        </li>
        <li>
          <a href="#hakkinda">Hakkında</a>
        </li>
        <li>
          <a href="#deneyim-alanlari">Deneyim Alanları</a>
        </li>
        <li>
          <a href="#iletisim">İletişim</a>
        </li>
      </ul>
      <div className="footer-right">
        <div className="footer-social">
          <a href="https://x.com/denofficial_tr" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.instagram.com/denofficial.tr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465a4.9 4.9 0 0 1 1.771 1.153 4.9 4.9 0 0 1 1.153 1.771c.248.637.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.217 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.771 4.9 4.9 0 0 1-1.771 1.153c-.637.248-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.217-2.428-.465a4.9 4.9 0 0 1-1.771-1.153 4.9 4.9 0 0 1-1.153-1.771c-.248-.637-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428A4.9 4.9 0 0 1 3.678 3.68 4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.363-.415 2.428-.465C8.944 2.01 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.567.684-.748 1.15-.137.353-.3.882-.344 1.857-.05 1.055-.06 1.372-.06 4.04s.01 2.986.06 4.04c.045.976.207 1.505.344 1.858.181.466.399.8.748 1.15.35.35.684.567 1.15.748.353.137.882.3 1.857.344 1.054.05 1.37.06 4.041.06s2.987-.01 4.04-.06c.976-.045 1.505-.207 1.858-.344.466-.181.8-.398 1.15-.748.35-.35.567-.684.748-1.15.137-.353.3-.882.344-1.857.05-1.055.06-1.372.06-4.041s-.01-2.986-.06-4.04c-.045-.976-.207-1.505-.344-1.858a3.1 3.1 0 0 0-.748-1.15 3.1 3.1 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.05-1.372-.06-4.041-.06zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/denofficial-tr" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z"/></svg>
          </a>
        </div>
        <span className="footer-copy">© 2025 den</span>
      </div>
    </footer>
  );
}

