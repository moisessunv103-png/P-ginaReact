import { useState } from 'react';
import ProductoCard from '../components/ProductoCard';
import '../styles/Productos.css';

export default function Productos() {
  // Array de productos con categorías
  const todosProductos = [
    { id: 1, titulo: "Lona Publicitaria 1", categoria: "Lonas", imagen: "https://via.placeholder.com/400x300?text=Lona+1" },
    { id: 2, titulo: "Lona Publicitaria 2", categoria: "Lonas", imagen: "https://via.placeholder.com/400x300?text=Lona+2" },
    { id: 3, titulo: "Lona Publicitaria 3", categoria: "Lonas", imagen: "https://via.placeholder.com/400x300?text=Lona+3" },
    { id: 4, titulo: "Vinilo Grande 1", categoria: "Gran Formato", imagen: "https://via.placeholder.com/400x300?text=Vinilo+1" },
    { id: 5, titulo: "Vinilo Grande 2", categoria: "Gran Formato", imagen: "https://via.placeholder.com/400x300?text=Vinilo+2" },
    { id: 6, titulo: "Acrílico Cortado 1", categoria: "Acrílico", imagen: "https://via.placeholder.com/400x300?text=Acrilico+1" },
    { id: 7, titulo: "Acrílico Cortado 2", categoria: "Acrílico", imagen: "https://via.placeholder.com/400x300?text=Acrilico+2" },
    { id: 8, titulo: "Acrílico Cortado 3", categoria: "Acrílico", imagen: "https://via.placeholder.com/400x300?text=Acrilico+3" },
    { id: 9, titulo: "Madera MDF 1", categoria: "MDF", imagen: "https://via.placeholder.com/400x300?text=MDF+1" },
    { id: 10, titulo: "Madera MDF 2", categoria: "MDF", imagen: "https://via.placeholder.com/400x300?text=MDF+2" },
  ];

  // Categorías únicas
  const categorias = ['Todos', ...new Set(todosProductos.map(p => p.categoria))];

  // Estado para la categoría seleccionada
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  // Filtrar productos según la categoría
  const productosFiltrados = categoriaSeleccionada === 'Todos'
    ? todosProductos
    : todosProductos.filter(producto => producto.categoria === categoriaSeleccionada);

  return (
    <main className="page-container">
      <header className="section-header">
        <h1>Nuestros Productos</h1>
        <p>Explora nuestro catálogo de trabajos realizados en impresión, corte y diseño</p>
      </header>

      {/* Botones de Filtro */}
      <section className="filtros-section">
        <div className="filtros-container">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className={`filtro-btn ${categoriaSeleccionada === categoria ? 'active' : ''}`}
              onClick={() => setCategoriaSeleccionada(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>
      </section>

      {/* Galería de Productos */}
      <section className="galeria-section">
        <div className="productos-grid">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (
              <ProductoCard key={producto.id} producto={producto} />
            ))
          ) : (
            <div className="no-productos">
              <p>No hay productos en esta categoría</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="productos-cta">
        <h2>¿Tienes un proyecto en mente?</h2>
        <p>Contacta con nosotros para obtener más información sobre nuestros productos y servicios</p>
        <a href="/contacto" className="btn-primary btn-link">Solicitar Cotización</a>
      </section>
    </main>
  );
}
