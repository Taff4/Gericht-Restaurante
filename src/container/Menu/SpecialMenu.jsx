import React, { useState } from 'react';
import { SubHeading, MenuItem, Modal } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

// --- Componente para o Menu Completo (dentro do Modal) ---
const FullMenu = () => {
  const [activeTab, setActiveTab] = useState('restaurant'); // 'restaurant' ou 'bar'

  const renderMenuCategory = (categoryData) => (
    <div key={categoryData.category}>
      <h3 className="app__fullMenu-category_title">{categoryData.category}</h3>
      <div className="app__fullMenu_items">
        {categoryData.items.map((item, index) => (
          <MenuItem key={`${categoryData.category}-${index}`} title={item.title} price={item.price} tags={item.tags} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="app__fullMenu">
      <div className="app__fullMenu-tabs">
        <button
          type="button"
          className={`app__fullMenu-tab_button ${activeTab === 'restaurant' ? 'active' : ''}`}
          onClick={() => setActiveTab('restaurant')}
        >
          Restaurante
        </button>
        <button
          type="button"
          className={`app__fullMenu-tab_button ${activeTab === 'bar' ? 'active' : ''}`}
          onClick={() => setActiveTab('bar')}
        >
          Bar & Drinks
        </button>
      </div>

      <div className="app__fullMenu-content">
        {activeTab === 'restaurant' && data.restaurantMenu.map(renderMenuCategory)}
        {activeTab === 'bar' && data.barMenu.map(renderMenuCategory)}
      </div>
    </div>
  );
};


const SpecialMenu = () => {
  const [showFullMenu, setShowFullMenu] = useState(false);

  return (
    <>
      <div className="app__specialMenu flex__center section__padding" id="menu">
        <div className="app__specialMenu-title">
          <SubHeading title="Um menu à altura do seu paladar" />
          <h1 className="headtext__cormorant">Especial do Dia</h1>
        </div> 
        
        <div className="app__specialMenu-menu">
          {/* Classe 'flex__center' removida daqui */}
          <div className="app__specialMenu-menu_wine">
            <p className="app__specialMenu-menu_heading">Vinhos & Cervejas</p>
            <div className="app__specialMenu_menu_items">
              {data.wines.map((wine, index) => (
                <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
              ))}
            </div>
          </div>

          <div className="app__specialMenu-menu_img">
            <img src={images.menu} alt="menu__img" />
          </div>

          {/* Classe 'flex__center' removida daqui */}
          <div className="app__specialMenu-menu_cocktails">
            <p className="app__specialMenu-menu_heading">Cocktails</p>
            <div className="app__specialMenu_menu_items">
              {data.cocktails.map((cocktail, index) => (
                <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <button type="button" className="custom__button" onClick={() => setShowFullMenu(true)}>
            Ver Menu Completo
          </button>
        </div>
      </div>

      {showFullMenu && (
        <Modal title="Nosso Cardápio" content={<FullMenu />} onClose={() => setShowFullMenu(false)} />
      )}
    </>
  );
};

export default SpecialMenu;