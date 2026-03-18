import { useState } from 'react'
import litekLogo from './assets/litek.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo-section">
            <img src={litekLogo} alt="Litek Logo" className="logo" />
            <span className="brand-name">LITEK</span>
          </div>
          <nav className="nav">
            <a href="#services">Servicios</a>
            <a href="#about">Sobre Nosotros</a>
            <a href="#contact">Contacto</a>
            <button className="cta-button">Cotizar</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Soluciones Tecnológicas Innovadoras</h1>
          <p>Transformamos tu negocio con tecnología de punta y soluciones personalizadas</p>
          <button className="hero-button">Comienza Ahora</button>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Soluciones Litek" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Desarrollo Web</h3>
            <p>Aplicaciones web modernas y responsivas con las últimas tecnologías</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Aplicaciones Móviles</h3>
            <p>Apps nativas y cross-platform para iOS y Android</p>
          </div>
          <div className="service-card">
            <div className="service-icon">☁️</div>
            <h3>Cloud & DevOps</h3>
            <p>Infraestructura escalable y deployment automatizado</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔐</div>
            <h3>Soluciones en la Nube</h3>
            <p>Seguridad y escalabilidad en plataformas cloud líderes</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <h2>Sobre LITEK</h2>
          <p>En LITEK somos especialistas en transformación digital. Con más de 10 años de experiencia, hemos ayudado a empresas de todos los tamaños a alcanzar sus objetivos tecnológicos.</p>
          <div className="about-stats">
            <div className="stat">
              <h4>500+</h4>
              <p>Proyectos Exitosos</p>
            </div>
            <div className="stat">
              <h4>10+</h4>
              <p>Años de Experiencia</p>
            </div>
            <div className="stat">
              <h4>50+</h4>
              <p>Profesionales</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>¿Listo para Transformar tu Negocio?</h2>
        <p>Contacta con nosotros hoy y descubre cómo podemos ayudarte</p>
        <button className="hero-button">Solicitar Consulta</button>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>LITEK</h4>
            <p>Soluciones tecnológicas para tu empresa</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#about">Sobre Nosotros</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <ul>
              <li>Email: info@litek.com</li>
              <li>Teléfono: +1 (555) 123-4567</li>
              <li>Dirección: Tech Park, Ciudad</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 LITEK. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}

export default App
