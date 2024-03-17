import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <LandingSection />
      <FeaturedProjects />
      <ContactMe />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      {/* Enlaces externos a tus cuentas de redes sociales */}
      <a href="link-de-tu-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="link-de-tu-github" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="link-de-tu-twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
      {/* Enlaces internos */}
      <a href="#landing-section">Inicio</a>
      <a href="#featured-projects">Proyectos</a>
      <a href="#contact-me">Contacto</a>
      {/* Iconos de navegación */}
      <div className="navigation-icons">
        {/* Iconos de búsqueda y perfil */}
        <i className="fas fa-search"></i>
        <i className="fas fa-user"></i>
      </div>
    </header>
  );
};

const LandingSection = () => {
  return (
    <section id="landing-section" className="landing-section">
      <img src="ruta-de-tu-imagen-de-avatar" alt="Avatar" />
      <h1>Hola, soy John</h1>
      <h2>Desarrollador frontend especializado en React</h2>
    </section>
  );
};

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="featured-projects">
      <h2>Proyectos Destacados</h2>
      <div className="projects-grid">
        {/* Tarjeta de proyecto 1 */}
        <div className="project-card">
          <img src="ruta-de-imagen-proyecto-1" alt="Proyecto 1" />
          <p>Descripción del Proyecto 1</p>
        </div>
        {/* Tarjeta de proyecto 2 */}
        <div className="project-card">
          <img src="ruta-de-imagen-proyecto-2" alt="Proyecto 2" />
          <p>Descripción del Proyecto 2</p>
        </div>
        {/* Tarjeta de proyecto 3 */}
        <div className="project-card">
          <img src="ruta-de-imagen-proyecto-3" alt="Proyecto 3" />
          <p>Descripción del Proyecto 3</p>
        </div>
        {/* Tarjeta de proyecto 4 */}
        <div className="project-card">
          <img src="ruta-de-imagen-proyecto-4" alt="Proyecto 4" />
          <p>Descripción del Proyecto 4</p>
        </div>
      </div>
    </section>
  );
};

const ContactMe = () => {
  return (
    <section id="contact-me" className="contact-me">
      <h2>Contáctame</h2>
      <form>
        <input type="email" placeholder="Correo electrónico" />
        <select>
          <option value="">Tipo de consulta</option>
          <option value="Consulta 1">Consulta 1</option>
          <option value="Consulta 2">Consulta 2</option>
          <option value="Consulta 3">Consulta 3</option>
        </select>
        <textarea placeholder="Mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Derechos de autor</p>
    </footer>
  );
};

export default App;
