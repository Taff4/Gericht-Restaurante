// src/container/AboutUs/AboutUs.jsx

import React, { useState } from 'react';
import { images } from '../../constants';
import { Modal } from '../../components'; // Importa nosso novo componente
import './AboutUs.css';

// Conteúdo fake para os modais
const modalContent = {
  about: {
    title: 'Nossa Filosofia',
    content: 'No Gerícht, cada prato é uma obra de arte e cada visita, uma celebração. Nossa filosofia é simples: usar os ingredientes mais frescos e sazonais, transformando-os com técnicas que honram a tradição e abraçam a inovação. Acreditamos que a comida tem o poder de conectar pessoas, e nossa missão é criar o ambiente perfeito para que essas conexões floresçam em torno de sabores inesquecíveis.',
  },
  history: {
    title: 'Uma Jornada de Sabor',
    content: 'Fundado em 2021, o Gerícht nasceu do sonho de criar um refúgio culinário. Nossa jornada começou com uma pequena cozinha e um grande desejo de compartilhar a autêntica gastronomia. Ao longo dos anos, crescemos, evoluímos e ganhamos reconhecimento, mas nossa essência permanece a mesma: paixão pela comida, dedicação ao serviço e um compromisso inabalável com a excelência que nos inspira a cada dia.',
  },
};

const AboutUs = () => {
  const [modalData, setModalData] = useState(null); // Estado para controlar o modal

  return (
    <>
      <div className="app__aboutus app__bg flex__center section__padding" id="about">
        <div className="app__aboutus-overlay flex__center">
          <img src={images.G} alt="G_overlay" />
        </div>

        <div className="app__aboutus-content flex__center">
          <div className="app__aboutus-content_about">
            <h1 className="headtext__cormorant">Sobre nós</h1>
            <img src={images.spoon} alt="about_spoon" className="spoon__img" />
            <p className="p__opensans">Cada experiência gastronômica aqui é vivida com intensidade e sofisticação. Sabores autênticos, ambiente acolhedor e atendimento dedicado se unem para tornar cada momento único.</p>
            <button type="button" className="custom__button" onClick={() => setModalData(modalContent.about)}>
              Saiba Mais
            </button>
          </div>

          <div className="app__aboutus-content_knife flex__center">
            <img src={images.knife} alt="about_knife" />
          </div>

          <div className="app__aboutus-content_history">
            <h1 className="headtext__cormorant">Nossa História</h1>
            <img src={images.spoon} alt="about_spoon" className="spoon__img" />
            <p className="p__opensans">O Gerícht nasceu da paixão pela gastronomia e pelo encontro entre pessoas. Preservamos tradições e incorporamos inovação, sempre valorizando ingredientes frescos e técnicas refinadas.</p>
            <button type="button" className="custom__button" onClick={() => setModalData(modalContent.history)}>
              Saiba Mais
            </button>
          </div>
        </div>
      </div>

      {/* Renderiza o Modal se houver dados para ele */}
      {modalData && (
        <Modal
          title={modalData.title}
          content={modalData.content}
          onClose={() => setModalData(null)}
        />
      )}
    </>
  );
};

export default AboutUs;