import React, { useState } from 'react';

// Data definitions ------------------------------------------------------------
const services = [
  {
    title: 'Diseño visual',
    description: 'Creación de interfaces atractivas y coherentes.',
    icon: '🎨',
  },
  {
    title: 'Desarrollo web',
    description: 'Aplicaciones rápidas, seguras y responsivas.',
    icon: '💻',
  },
  {
    title: 'Identidad digital',
    description: 'Branding, logotipos y guías de estilo.',
    icon: '✨',
  },
];

const allProjects = [
  { id: 1, title: 'Sitio corporativo', tags: ['Web'] },
  { id: 2, title: 'Campaña branding', tags: ['Diseño', 'Branding'] },
  { id: 3, title: 'E‑commerce', tags: ['Web'] },
  { id: 4, title: 'Identidad visual', tags: ['Diseño', 'Branding'] },
  { id: 5, title: 'Landing page product', tags: ['Web'] },
  { id: 6, title: 'Rediseño UI/UX', tags: ['Diseño', 'Web'] },
];

const filterOptions = ['Todos', 'Web', 'Diseño', 'Branding'];

// ---------------------------------------------------------------------------
export default function App() {
  const [projectFilter, setProjectFilter] = useState('Todos');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formError, setFormError] = useState('');

  const filteredProjects =
    projectFilter === 'Todos'
      ? allProjects
      : allProjects.filter(p => p.tags.includes(projectFilter));

  const handleSubmit = e => {
    e.preventDefault();
    // simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Todos los campos son obligatorios.');
      return;
    }
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Introduce un correo electrónico válido.');
      return;
    }
    setFormError('');
    alert('¡Gracias! Este es un formulario de demostración y no envía datos reales.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">NOVA <span className="studio">Studio</span></div>
        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        {/* Mobile menu toggle – simple checkbox hack */}
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
        <div className="mobile-nav">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="hero">
        <h1>Diseñamos experiencias digitales memorables</h1>
        <p>Transformamos ideas en productos visuales y funcionales.</p>
        <a href="#proyectos" className="cta-button">Ver proyectos</a>
        {/* Simple CSS‑SVG illustration */}
        <svg
          className="hero-illustration"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="80" fill="url(#grad)" />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6D28D9" />
              <stop offset="100%" stopColor="#0891B2" />
            </linearGradient>
          </defs>
        </svg>
      </section>

      {/* Services */}
      <section id="servicios" className="services">
        <h2>Nuestros Servicios</h2>
        <div className="service-cards">
          {services.map(s => (
            <div key={s.title} className="service-card">
              <div className="icon" aria-hidden="true">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="proyectos" className="projects">
        <h2>Proyectos Destacados</h2>
        <div className="filter-bar">
          {filterOptions.map(opt => (
            <button
              key={opt}
              className={opt === projectFilter ? 'active' : ''}
              onClick={() => setProjectFilter(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="project-cards">
          {filteredProjects.map(p => (
            <div key={p.id} className="project-card">
              <h4>{p.title}</h4>
              <div className="tags">
                {p.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="contact">
        <h2>Contacto</h2>
        <p>Este formulario es solo una demostración.</p>
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            placeholder="Nombre"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Mensaje"
            rows={4}
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            required
          />
          {formError && <div className="error">{formError}</div>}
          <button type="submit" className="submit-btn">Enviar</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} NOVA Studio. Todos los derechos reservados.</p>
        <nav className="footer-nav">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </footer>
    </div>
  );
}

