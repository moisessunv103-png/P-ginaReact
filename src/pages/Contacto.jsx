import { useState } from 'react';
import '../styles/Contacto.css';

export default function Contacto() {
  // Estado del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    servicio: '',
    mensaje: ''
  });

  // Número de WhatsApp (reemplazar con tu número real)
  const numeroWhatsApp = '573001234567'; // Formato: código país + número sin +

  // Servicios disponibles
  const servicios = [
    'Lonas Publicitarias',
    'Corte Láser',
    'Router CNC',
    'Offset',
    'Otro'
  ];

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!formData.nombre.trim() || !formData.servicio || !formData.mensaje.trim()) {
      alert('Por favor completa todos los campos');
      return;
    }

    // Construir el mensaje para WhatsApp
    const mensajeWhatsApp = `Hola, me llamo ${formData.nombre}.\n\nEstoy interesado en: ${formData.servicio}\n\nMensaje: ${formData.mensaje}`;

    // Codificar el mensaje para la URL
    const mensajeEncodificado = encodeURIComponent(mensajeWhatsApp);

    // Construir la URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeEncodificado}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(urlWhatsApp, '_blank');

    // Limpiar el formulario (opcional)
    setFormData({
      nombre: '',
      servicio: '',
      mensaje: ''
    });
  };

  return (
    <main className="page-container">
      <header className="section-header">
        <h1>Contacto</h1>
        <p>Cuéntanos sobre tu proyecto y nos pondremos en contacto contigo</p>
      </header>

      {/* Formulario de Contacto */}
      <section className="contacto-section">
        <div className="contacto-container">
          <form className="formulario-contacto" onSubmit={handleSubmit}>
            {/* Campo Nombre */}
            <div className="form-group">
              <label htmlFor="nombre">Nombre Completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </div>

            {/* Campo Servicio */}
            <div className="form-group">
              <label htmlFor="servicio">Servicio de Interés</label>
              <select
                id="servicio"
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un servicio</option>
                {servicios.map((servicio) => (
                  <option key={servicio} value={servicio}>
                    {servicio}
                  </option>
                ))}
              </select>
            </div>

            {/* Campo Mensaje */}
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu proyecto..."
                rows="6"
                required
              ></textarea>
            </div>

            {/* Botón Enviar */}
            <button type="submit" className="btn-primary btn-submit">
              Enviar por WhatsApp
            </button>
          </form>

          {/* Info Adicional */}
          <div className="contacto-info">
            <h3>También puedes contactarnos directamente</h3>
            <div className="info-item">
              <h4>Teléfono</h4>
              <a href="tel:+573001234567">+57 300 123 4567</a>
            </div>
            <div className="info-item">
              <h4>Email</h4>
              <a href="mailto:info@litek.com">info@litek.com</a>
            </div>
            <div className="info-item">
              <h4>Ubicación</h4>
              <p>Calle 123, Bogotá, Colombia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa o Sección Adicional */}
      <section className="contacto-cta">
        <h2>¿Preguntas frecuentes?</h2>
        <p>Revisa nuestra sección de preguntas frecuentes o contacta directamente con nuestro equipo</p>
      </section>
    </main>
  );
}
