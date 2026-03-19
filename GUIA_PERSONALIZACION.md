# Guía de Personalización

## 🎨 Personalizar Colores del Navbar

En [src/styles/Navbar.css](src/styles/Navbar.css), modifica:

```css
/* Color del botón "Cotizar" */
.btn-cotizar {
  background-color: #e74c3c;  /* Cambiar aquí */
}

.btn-cotizar:hover {
  background-color: #c0392b;  /* Cambiar aquí */
}

/* Color del hover en enlaces */
.nav-link:hover {
  color: #e74c3c;  /* Cambiar aquí */
  border-bottom-color: #e74c3c;  /* Cambiar aquí */
}
```

## 🏠 Agregar Contenido a las Páginas

Ejemplo para [src/pages/Inicio.jsx](src/pages/Inicio.jsx):

```jsx
export default function Inicio() {
  return (
    <div className="page-container">
      <h1>Inicio</h1>
      <p>Contenido principal de tu página</p>
      
      {/* Agregar tu contenido aquí */}
      <section>
        <h2>Sección Principal</h2>
        <p>Tu contenido...</p>
      </section>
    </div>
  );
}
```

## 📸 Cambiar Logo

1. Coloca tu archivo de logo en `public/logo.svg` (o la extensión que uses)
2. O actualiza la ruta en [src/components/Navbar.jsx](src/components/Navbar.jsx#L12):

```jsx
<img src="/ruta-a-tu-logo.png" alt="Logo Litek" className="logo-image" />
```

## 🔗 Agregar Nuevas Rutas

1. Crea una nueva página en `src/pages/MiPagina.jsx`
2. Importa en [src/App.jsx](src/App.jsx#L1-L6)
3. Agrega la ruta:

```jsx
import MiPagina from './pages/MiPagina';

// Dentro del Routes
<Route path="/mi-pagina" element={<MiPagina />} />
```

4. Agrega el enlace en [src/components/Navbar.jsx](src/components/Navbar.jsx#L27-L47):

```jsx
<li className="nav-item">
  <Link to="/mi-pagina" className="nav-link" onClick={closeMenu}>
    Mi Página
  </Link>
</li>
```

## 📝 Crear Componentes Reutilizables

Ejemplo: Crear `src/components/Card.jsx`

```jsx
export default function Card({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

Luego usa en tus páginas:

```jsx
import Card from '../components/Card';

export default function Inicio() {
  return (
    <div className="page-container">
      <Card title="Mi Título" description="Mi descripción" />
    </div>
  );
}
```

## 🎯 Tamaños de Fuentes Personalizados

En [src/App.css](src/App.css), modifica:

```css
.page-container h1 {
  font-size: 2.5rem;  /* En móvil */
}

@media (min-width: 768px) {
  .page-container h1 {
    font-size: 3rem;  /* En tablet+ */
  }
}
```

## 🌐 Cambiar Nombre de la Empresa

En [src/components/Navbar.jsx](src/components/Navbar.jsx#L19):

```jsx
<span>Tu Nombre de Empresa</span>
```

## 📱 Agregar Más Breakpoints

En los CSS, puedes agregar más puntos de quiebre:

```css
/* Móvil pequeño - 320px */
@media (min-width: 320px) {
  /* Estilos para móvil pequeño */
}

/* Móvil grande - 600px */
@media (min-width: 600px) {
  /* Estilos para móvil grande */
}

/* Tablet - 768px */
@media (min-width: 768px) {
  /* Estilos para tablet */
}

/* Desktop - 1024px */
@media (min-width: 1024px) {
  /* Estilos para desktop */
}

/* Desktop XL - 1440px */
@media (min-width: 1440px) {
  /* Estilos para desktop extra grande */
}
```

## 🎵 Agregar Animaciones

Ejemplo en `src/styles/Navbar.css`:

```css
.nav-link {
  transition: all 0.3s ease;  /* Transición suave */
}

.nav-link:hover {
  transform: translateY(-2px);  /* Efecto levitación */
}
```

---

**Tip:** Siempre haz cambios pequeños y prueba en diferentes dispositivos usando la herramienta de desarrollador del navegador (F12) para verificar responsividad.
