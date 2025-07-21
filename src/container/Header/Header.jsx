import React from 'react';
import { SubHeading, ScrollIndicator } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  // MUDANÇA AQUI: Removida a classe "section__padding"
  <div className="app__header app__wrapper" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Descubra novos sabores" />
      <h1 className="app__header-h1">O sabor da excelência</h1>
      <p className="p__opensans app__header-p">
        Sabores sofisticados, experiências únicas. Cada detalhe foi pensado para encantar da apresentação dos pratos à explosão de sabores em cada mordida.
      </p>
      <a href="#menu" className="custom__button">Conheça o Menu</a>
    </div>

    <div className="app__header-img-animation-wrapper">
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header_img" />
      </div>
    </div>
    
    <ScrollIndicator />
  </div>
);

export default Header;