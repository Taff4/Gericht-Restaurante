import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter, BackToTopButton } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <>
    {/* Removida a classe 'section__padding' para o CSS ter controle total */}
    <div className="app__footer" id="login">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contato</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer_logo" />
          <p className="p__opensans">"A melhor maneira de encontrar a si mesmo é se perder no serviço aos outros."</p>
          <img src={images.spoon} alt="colher" className="spoon__img" style={{ marginTop: 15 }} />
          <div className="app__footer-links_icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FiFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FiTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FiInstagram />
            </a>
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Funcionamento</h1>
          <p className="p__opensans">Segunda a Sexta:</p>
          <p className="p__opensans">10:00 – 02:00</p>
          <p className="p__opensans">Sábado e Domingo:</p>
          <p className="p__opensans">10:00 – 03:00</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">© 2025 Gericht. Todos os direitos reservados.</p>
      </div>
    </div>
    
    <BackToTopButton />
  </>
);

export default Footer;