import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="A Palavra do Chef" />
      <h1 className="headtext__cormorant">Nossa Essência</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Acreditamos que a gastronomia começa no respeito aos ingredientes.</p>
        </div>
        <p className="p__opensans">Cada prato é pensado para despertar memórias, unir pessoas e provocar emoções. Com técnica, dedicação e criatividade, buscamos transformar sabores em experiências únicas. Unimos tradição e inovação em cada detalhe, sempre com alma e propósito. </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Fundador</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;