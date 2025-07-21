import React, { useState, useEffect, useRef } from 'react';
import { images } from '../../constants';
import './BackToTop.css';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    footerRef.current = document.getElementById('login');

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    // A classe 'visible' controla a animação de entrada/saída
    <div className={`app__back-to-top ${isVisible ? 'visible' : ''}`}>
      {/* A MUDANÇA ESTÁ AQUI: A própria imagem agora é o botão */}
      <img
        src={images.spoon}
        alt="Voltar ao topo"
        onClick={scrollToTop}
        className="back-to-top_spoon"
        aria-label="Voltar ao topo"
        role="button"
      />
    </div>
  );
};

export default BackToTopButton;