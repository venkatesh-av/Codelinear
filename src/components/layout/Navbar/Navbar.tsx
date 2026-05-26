import { useState } from 'react';
import './Navbar.css';
import { ActionButton } from '../../shared/UI/ActionButton';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <span className="navbar-logo">N7</span>

        <div className={`navbar-menu ${menuOpen ? 'mobile-open' : ''}`}>
          <div className="nav-links">
            <a href="#solutions" className="nav-link">
              SOLUTIONS
              <svg width="9" height="9" viewBox="0 0 14 14" fill="none" style={{ marginLeft: '4px' }}>
                <path d="M0.797 3.83L6.864 9.897L12.931 3.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#insights" className="nav-link">
              RESOURCES
              <svg width="9" height="9" viewBox="0 0 14 14" fill="none" style={{ marginLeft: '4px' }}>
                <path d="M0.797 3.83L6.864 9.897L12.931 3.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#about" className="nav-link">ABOUT US</a>
          </div>
          <ActionButton
            href="#demo"
            variant="nav"
            size="nav"
            hover="soft"
            className="navbar-cta mobile-cta-only"
          >
            REQUEST DEMO
          </ActionButton>
        </div>

        <div className="navbar-right">
          <ActionButton
            href="#demo"
            variant="nav"
            size="nav"
            hover="soft"
            className="navbar-cta desktop-cta-only"
          >
            REQUEST DEMO
          </ActionButton>

          <button
            className="navbar-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`} />
            <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`} />
            <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>
    </nav>
  );
}
