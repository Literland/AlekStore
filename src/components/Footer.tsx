import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div>
      <strong>AlekStore</strong> &copy; 2025. Todos los derechos reservados.
    </div>
    <div>
      <a href="https://wa.me/51929428382" target="_blank" rel="noopener noreferrer">Contáctanos por WhatsApp</a>
      <span> | </span>
      <a href="#faq">Preguntas Frecuentes</a>
    </div>
  </footer>
);

export default Footer;
