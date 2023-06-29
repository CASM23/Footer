import React from 'react';
import '../style/styleFooter.css';
import facebookIcon from '../icons/facebook.png';
import whatsappIcon from '../icons/whatsapp.png';
import instagramIcon from '../icons/instagram.png';
import twitterIcon from '../icons/twitter.png';
import Icon from '../icons/icon.png';
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="title-section">
        <h1  className="title-with-icon">
        <img src={Icon} alt="Icono" className="icon" />
          Colcimes</h1>
      </div>
      <div className="content-section">
        <div className="section">
          <h3>Dirección</h3>
          <div className="parrafos">
            <p>Avenida Principal 123, Ciudad</p>
          </div>
        </div>
        <div className="section">
        <p className="social-icons">
              <img src={facebookIcon} alt="Logo de Facebook" className="social-logo" />
              <img src={whatsappIcon} alt="Logo de WhatsApp" className="social-logo" />
              <img src={instagramIcon} alt="Logo de Instagram" className="social-logo" />
              <img src={twitterIcon} alt="Logo de Twitter" className="social-logo" />
            </p>
          <div className="parrafo-copyright">
          <p>© 2023 colcimes.com. Todos los derechos reservados.</p>
          </div>
        </div>
        <div className="section">
          <h3>Contacto</h3>
          <div className="parrafos">
            <p>
              Teléfono: 555-1234 <br />
              Email: info@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
