import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import useIntersectionObserver from '../../hooks/useIntersectionObserver'; // Importa o hook
import './FindUs.css'; 

const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Lane+Ends+Bungalow,+Whatcroft+Hall+Lane,+Rudheath,+CW9+75G";

const FindUs = () => {
  // Usa o hook para detectar quando a seção está visível
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    // Adiciona a ref ao container e a classe 'visible' quando estiver na tela
    <div ref={ref} className={`app__bg app__wrapper section__padding ${isVisible ? 'visible' : ''}`} id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contato" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Nossa Localização</h1>
        
        <div className="app__wrapper-content">
          <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
          
          <div className="app__findus-hours">
            <p className="p__cormorant" style={{ color: '#DCCA87', marginBottom: '1rem' }}>Horário de Funcionamento</p>
            <p className="p__opensans">Segunda a Sexta: 10h00 – 02h00</p>
            <p className="p__opensans">Sábado e Domingo: 10h00 – 03h00</p>
          </div>
        </div>

        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="custom__button" style={{ marginTop: '2rem' }}>
          Venha nos Visitar
        </a>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="localização do restaurante" />
      </div>
    </div>
  );
};

export default FindUs;