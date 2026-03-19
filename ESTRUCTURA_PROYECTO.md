# Estructura del Proyecto React - Litek

## 📁 Estructura de Carpetas

```
src/
├── components/
│   └── Navbar.jsx          # Navbar responsivo Mobile-First
├── pages/
│   ├── Inicio.jsx          # Página de inicio
│   ├── Servicios.jsx       # Página de servicios
│   ├── Productos.jsx       # Página de productos
│   └── Contacto.jsx        # Página de contacto
├── styles/
│   └── Navbar.css          # Estilos del Navbar
├── App.jsx                 # Componente principal con routing
├── App.css                 # Estilos globales
├── main.jsx                # Punto de entrada configurado con BrowserRouter
└── index.css               # Estilos base
```

## 🎯 Características Implementadas

### 1. **Navbar Responsivo (Mobile-First)**
- **Mobile (por defecto)**:
  - Logo a la izquierda
  - Botón hamburguesa funcional
  - Menú desplegable oculto/visible con animación suave
  
- **Desktop (768px+)**:
  - Menú visible horizontalmente en el centro
  - Botón "Cotizar" destacado a la derecha
  - Logo a la izquierda
  - Efecto hover en enlaces

- **Características**:
  - Interfaz intuitiva con animación hamburguesa (tres líneas → X)
  - Cierre de menú automático al navegar
  - Diseño responsivo con puntos de quiebre claros
  - Colores profesionales: rojo destacado (#e74c3c)

### 2. **Sistema de Enrutamiento**
Usando `react-router-dom` v6:
- `/` → Inicio
- `/servicios` → Servicios
- `/productos` → Productos
- `/contacto` → Contacto

### 3. **Diseño Mobile-First**
- Estilos base optimizados para móvil
- Media queries para tablet (768px) y desktop (1024px)
- Versionamiento flexible y escalable

## 🚀 Cómo Usar

### Instalar dependencias
```bash
npm install
```

### Ejecutar en desarrollo
```bash
npm run dev
```
Luego accede a: `http://localhost:5173/`

### Compilar para producción
```bash
npm build
```

## 📝 Próximos Pasos Recomendados

1. **Agregar un logo**:
   - Reemplazar `/logo.svg` en la carpeta `public/`
   - O cambiar la referencia en `Navbar.jsx`

2. **Mejorar las páginas**:
   - Agregar contenido y componentes en cada página dentro de `src/pages/`

3. **Agregar más componentes**:
   - Crear componentes reutilizables en `src/components/`
   - Ejemplo: Footer, Hero, Cards, etc.

4. **Personalizar estilos**:
   - Actualizar colores en `Navbar.css` y `App.css`
   - Considerar agregar variables CSS globales en `index.css`

5. **Crear páginas con contenido**:
   - Cada página en `src/pages/` es un punto de partida para agregar contenido

## 🎨 Esquema de Colores Actual
- **Color Principal**: #e74c3c (Rojo destacado)
- **Fondo**: #fff (Blanco)
- **Texto**: #333 (Gris oscuro)
- **Bordes**: #e0e0e0 (Gris claro)

## 📱 Puntos de Quiebre (Breakpoints)
- **Mobile**: < 768px (comportamiento por defecto)
- **Tablet**: ≥ 768px
- **Desktop**: ≥ 1024px

## ✨ Mejores Prácticas Aplicadas
✅ Mobile-First approach  
✅ Componentes reutilizables y bien organizados  
✅ Enrutamiento limpio y escalable  
✅ Estilos modular y mantenibles  
✅ Código semántico y accesible  
✅ Responsive design con media queries  

---

**Proyecto:** Litek - Piensa Rojo  
**Versión:** 1.0.0  
**Última actualización:** 2026
