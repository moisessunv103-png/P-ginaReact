import { useIntersectionObserver } from '../hooks/useAnimations';

export default function ProductoCard({ producto }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <article 
      ref={ref}
      className={`producto-card ${isVisible ? 'visible' : ''}`}
    >
      <div className="producto-imagen">
        <img src={producto.imagen} alt={producto.titulo} loading="lazy" />
        <div className="overlay">
          <span className="categoria-badge">{producto.categoria}</span>
        </div>
      </div>
      <div className="producto-content">
        <h3>{producto.titulo}</h3>
        <button className="btn-ver-mas">Ver Más</button>
      </div>
    </article>
  );
}
