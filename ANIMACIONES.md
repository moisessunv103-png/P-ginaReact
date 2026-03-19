# Animaciones y Transiciones del Proyecto

Este documento explica todas las animaciones y transiciones implementadas en el proyecto para crear una experiencia visual moderna y fluida.

## 🎨 Animaciones Globales Implementadas

### 1. **Navbar - Efecto de Scroll Dinámico**

**Ubicación:** `src/components/Navbar.jsx` y `src/styles/Navbar.css`

**Comportamiento:**
- Cuando el usuario hace scroll hacia abajo más de 50px, el navbar cambia:
  - Fondo: de `rgba(255, 255, 255, 0.95)` a `#ffffff` (100% opaco)
  - Sombra: de `0 2px 4px` a `0 4px 12px rgba(0, 0, 0, 0.08)`
  - Transición: `0.4s cubic-bezier(0.4, 0, 0.2, 1)` (timing suave profesional)

**Hook personalizado:** `useScrollDetection()` en `src/hooks/useAnimations.js`

```javascript
const isScrolled = useScrollDetection();
return <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
```

**Transiciones adicionales:**
- Logo al hover: `rotate(5deg)` con transición suave
- Enlaces con underline animado: ancho `0%` → `100%` en hover
- Hamburguesa: escala `1.1` en hover con transición cubic-bezier

---

### 2. **Fade-In para Galerías (IntersectionObserver)**

**Ubicación:** 
- `src/hooks/useAnimations.js` - Hook `useIntersectionObserver()`
- `src/components/ProductoCard.jsx` - Componente que usa el hook
- `src/styles/Productos.css` - Animación `@keyframes fadeInUp`

**Comportamiento:**
- Las imágenes de la galería comienzan con `opacity: 0` y `translateY(30px)`
- Cuando entran en el viewport (10% visible), animan suavemente:
  - `fadeInUp` - 0.6s `cubic-bezier(0.4, 0, 0.2, 1)`
  - Final: `opacity: 1` y `translateY(0)`
- **Sin dependencias externas:** usa `IntersectionObserver` nativo del navegador

**Ventajas:**
- ✨ Animación solo cuando se ve (optimización de rendimiento)
- 🚀 Sin librerías (Framer Motion no necesario)
- ♻️ Se detiene observar después de la primera aparición

```javascript
const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
// Aplica clase 'visible' solo cuando está en viewport
```

---

### 3. **Transiciones de Botones**

**En todos los botones (`.btn-primary`, `.btn-ver-mas`, etc.):**

```css
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(...);
}

:active {
  transform: translateY(-1px);
}
```

**Efecto:** Los botones "flotan" suavemente hacia arriba en hover, con sombra dinámicamente aumentada.

---

### 4. **Transiciones de Tarjetas de Servicios**

**Ubicación:** `src/styles/Servicios.css`

**Animación de entrada (escalonada):**
```css
.service-card {
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

.service-card:nth-child(1) { animation-delay: 0.05s; }
.service-card:nth-child(2) { animation-delay: 0.1s; }
.service-card:nth-child(3) { animation-delay: 0.15s; }
.service-card:nth-child(4) { animation-delay: 0.2s; }
```

**Hover:**
- Sombra: `0 2px 8px` → `0 12px 32px`
- Transform: `translateY(-8px)`
- Imagen dentro: `scale(1.1)`
- Todas con transición `0.4s`

---

### 5. **Transiciones de Formulario**

**Ubicación:** `src/styles/Contacto.css`

**Animaciones:**
- Campos del formulario: `slideInUp` con delays escalonados
- Inputs en focus: `translateY(-2px)` + `box-shadow` de color azul
- Animación de sombra en elementos: `0.4s cubic-bezier(0.4, 0, 0.2, 1)`

**Placeholder dinámico:**
```css
input::placeholder { color: #999; }
input:focus::placeholder { color: #667eea; }
/* Transición suave del color del placeholder */
```

---

### 6. **Filtros de Productos**

**Ubicación:** `src/styles/Productos.css`

**Botón activo:**
```css
.filtro-btn.active {
  background-color: #667eea;
  transform: scale(1.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 🎯 Curvas de Animación Usadas

### `cubic-bezier(0.4, 0, 0.2, 1)` - Estándar del Proyecto

Esta es la curva de animación **Material Design estándar**:
- ✨ Rápida salida, lenta entrada
- 🎬 Percepción de fluidez profesional
- 🔧 Usada en: transiciones de navbar, scroll, hover, etc.

### Otras curvas:

- `ease` - Default, suave pero genérica
- `linear` - Raramente usada
- `ease-in-out` - Para efectos específicos

---

## 📊 Tiempos de Transición Recomendados

| Elemento | Duración | Uso |
|----------|----------|-----|
| Navbar scroll | 0.4s | Cambios principales |
| Fade-in galerías | 0.6s | Aparición de elementos |
| Hover botones | 0.4s | Interactividad directa |
| Hover tarjetas | 0.4s | Movimiento de contenedor |
| Imagen zoom | 0.5s | Escalado suave |
| Menu toggle | 0.3-0.4s | Apertura/cierre |

---

## 🚀 Cómo Personalizar Animaciones

### Cambiar duración global:

```css
/* En cualquier CSS, busca transition y cambia el valor */
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
/* Cambiar 0.4s a 0.3s para más rápido, 0.6s para más lento */
```

### Agregar nueva animación:

```css
@keyframes miAnimacion {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.elemento {
  animation: miAnimacion 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 🔍 Rendimiento

✅ **Optimizaciones implementadas:**
- IntersectionObserver solo observa hasta aparecer (se detiene automáticamente)
- `passive: true` en eventos de scroll para mejor rendimiento
- `will-change` no usado (mejor sin ella en general)
- Transiciones solo en propiedades necesarias (`all` es eficiente aquí)

⚠️ **Evitar:**
```css
/* ❌ LENTO */
transition: all 10s; /* Demasiado tiempo */

/* ❌ LENTO */
animation: fadeIn 0s; /* Sin tiempo */

/* ✅ BIEN */
transition: transform 0.3s, box-shadow 0.3s;
```

---

## 📱 Animaciones Responsivas

Todas las animaciones funcionan en:
- 📱 Móvil (sin cambios)
- 📊 Tablet (sin cambios)
- 💻 Desktop (sin cambios)

Los media queries solo cambian **propiedades**, no animaciones.

---

## 🎓 Recursos

- **Material Design Motion Guidelines:** https://material.io/design/motion/
- **Cubic Bezier Visual Reference:** https://cubic-bezier.com
- **IntersectionObserver API:** https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

---

**Última actualización:** 2026  
**Versión:** 1.0.0
