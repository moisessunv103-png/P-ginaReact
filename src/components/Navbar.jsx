import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import litekLogo from '../assets/litek.svg';
import { useScrollDetection } from '../hooks/useAnimations';
import '../styles/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isScrolled = useScrollDetection();
  const location = useLocation();
  const isProductosPage = location.pathname === '/productos';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isProductosPage ? 'productos-mode' : 'sticky-mode'}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={litekLogo} alt="Logo Litek" className="logo-image" />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/servicios" className="nav-link" onClick={closeMenu}>
              Servicios
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/productos" className="nav-link" onClick={closeMenu}>
              Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacto" className="nav-link" onClick={closeMenu}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
