import '../styles/Inicio.css';

export default function Inicio() {
  return (
    <main className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Soluciones de Impresión y Corte Profesionales</h1>
          <p>
            En Litek contamos con la tecnología más avanzada en impresión, corte láser, 
            CNC y offset para transformar tus ideas en realidad con la más alta calidad.
          </p>
          <button className="btn-primary">Conocer Servicios</button>
        </div>
        <div className="hero-image">
          <img src="" alt="Servicios Litek" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Por qué elegirnos</h2>
        <div className="features-container">
          <article className="feature">
            <h3>Tecnología Moderna</h3>
            <p>Equipos de última generación para resultados excepcionales.</p>
          </article>
          <article className="feature">
            <h3>Equipo Experto</h3>
            <p>Profesionales con años de experiencia en el sector.</p>
          </article>
          <article className="feature">
            <h3>Atención Personalizada</h3>
            <p>Soluciones adaptadas a tus necesidades específicas.</p>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>¿Listo para empezar?</h2>
        <p>Contacta con nosotros para más información sobre nuestros servicios.</p>
        <button className="btn-primary">Contactar Ahora</button>
      </section>
    </main>
  );
}
