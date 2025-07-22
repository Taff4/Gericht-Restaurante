import React, { useState } from 'react';
import { images } from '../../constants';
import { Modal } from '../../components';
import './AboutUs.css';

const modalContent = {
  about: {
    title: 'Nossa Filosofia',
    content: `No Gericht, acreditamos que a alta gastronomia é uma forma de arte. Nossa filosofia se baseia em três pilares: ingredientes excepcionais, técnica impecável e uma hospitalidade que acolhe. \n\nCada prato que sai da nossa cozinha é o resultado de uma busca incansável pelos melhores produtos sazonais, transformados com criatividade e respeito. Não servimos apenas comida; criamos momentos e memórias em um ambiente onde cada detalhe é pensado para encantar.`,
  },
  history: {
    title: 'Uma Jornada de Sabor',
    content: `Fundado em 2021, o Gericht nasceu do sonho de criar um refúgio culinário onde a tradição e a vanguarda pudessem dialogar. Nossa jornada começou com um espaço modesto e uma visão clara: redefinir a experiência de jantar. \n\nAo longo dos anos, nosso compromisso com a excelência nos rendeu reconhecimento, mas nossa essência permanece a mesma: uma paixão profunda por compartilhar sabores autênticos e criar uma história em cada prato servido.`,
  },
};

const AboutUs = () => {
  const [modalData, setModalData] = useState(null);

  return (
    <>
      <div className="app__aboutus app__bg flex__center section__padding" id="about">
        <div className="app__aboutus-overlay flex__center">
          <img src={images.G} alt="G_overlay" />
        </div>

        <div className="app__aboutus-content flex__center">
          <div className="app__aboutus-content_about">
            <h1 className="headtext__cormorant">Sobre Nós</h1>
            <img src={images.spoon} alt="about_spoon" className="spoon__img" />
            <p className="p__opensans">Cada experiência no Gerícht é vivida com intensidade e sofisticação. Sabores autênticos e um ambiente acolhedor se unem para tornar cada momento único.</p>
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
            <p className="p__opensans">Nascemos da paixão pela gastronomia. Preservamos tradições e incorporamos inovação, valorizando ingredientes frescos para criar experiências memoráveis.</p>
            <button type="button" className="custom__button" onClick={() => setModalData(modalContent.history)}>
              Saiba Mais
            </button>
          </div>
        </div>
      </div>

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