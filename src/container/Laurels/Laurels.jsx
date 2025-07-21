import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

// Componente AwardCard simplificado, sem o número e o index
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    {/* A div do número foi removida daqui */}
    <div 
      className="app__laurels_awards-card_icon" 
      style={{ '--bg-image': `url(${imgUrl})` }} 
    />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Prêmios & Reconhecimentos" />
      <h1 className="headtext__cormorant">Nossos Reconhecimentos</h1>

      <div className="app__laurels_awards">
        {/* Voltamos a mapear sem passar o index */}
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;