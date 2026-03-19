import '../styles/Servicios.css';

export default function Servicios() {
  const servicios = [
    {
      id: 1,
      titulo: "Lonas",
      descripcion: "Impresión de alta calidad en lonas publicitarias. Resistentes al agua y UV para exteriores.",
      imagen: ""
    },
    {
      id: 2,
      titulo: "Corte Láser",
      descripcion: "Corte y grabado láser de precisión en madera, acrílico y otros materiales.",
      imagen: ""
    },
    {
      id: 3,
      titulo: "Router CNC",
      descripcion: "Fresado y roteado CNC de alta precisión para trabajos en madera y materiales sintéticos.",
      imagen: ""
    },
    {
      id: 4,
      titulo: "Offset",
      descripcion: "Impresión offset profesional para proyectos de gran volumen con excelente definición de color.",
      imagen: ""
    }
  ];

  return (
    <main className="page-container">
      <header className="section-header">
        <h1>Nuestros Servicios</h1>
        <p>Contamos con tecnología de punta para ofrecer la mejor solución a tus proyectos</p>
      </header>

      {/* Bento Box Layout */}
      <section className="servicios-container">
        {servicios.map((servicio) => (
          <article key={servicio.id} className="service-card">
            <div className="service-image">
              <img src={servicio.imagen} alt={servicio.titulo} />
            </div>
            <div className="service-content">
              <h2>{servicio.titulo}</h2>
              <p>{servicio.descripcion}</p>
            </div>
          </article>
        ))}
      </section>

      {/* CTA Section */}
      <section className="servicios-cta">
        <h2>¿Necesitas más información?</h2>
        <p>Hablemos sobre tu proyecto y encontremos la solución perfecta.</p>
        <button className="btn-primary">Solicitar Cotización</button>
      </section>
    </main>
  );
}
