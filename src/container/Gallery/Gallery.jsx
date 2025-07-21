import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

// URL do Instagram do restaurante (coloque o link real aqui)
const INSTAGRAM_URL = "https://www.instagram.com/"; 

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Galeria de Fotos</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
          Capturamos momentos, sabores e detalhes que tornam cada experiência única e inesquecível.
        </p>
        {/* O botão agora é um link para o Instagram */}
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="custom__button instagram__button">
          <BsInstagram />
          <span>Siga-nos no Instagram</span>
        </a>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="app__gallery-images_card flex__center" 
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery" />
              <div className="gallery__image-icon_overlay">
                <BsInstagram className="gallery__image-icon" />
              </div>
            </a>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;