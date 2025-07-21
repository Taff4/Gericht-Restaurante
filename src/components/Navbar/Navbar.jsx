import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { BookingModal, AuthModal, ProfileModal } from '../../components';
import { useAuth } from '../../context/AuthContext';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileModalView, setProfileModalView] = useState('profile'); // Estado para a aba do perfil
  
  const { currentUser } = useAuth();

  const handleScroll = () => {
    if (window.scrollY > 10) setIsScrolled(true);
    else setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `app__navbar ${isScrolled ? 'scrolled' : ''}`;

  const closeAll = () => {
    setToggleMenu(false);
    setShowAuthModal(false);
    setShowBookingModal(false);
    setShowProfileModal(false);
  };

  const openProfileModal = (view) => {
    setProfileModalView(view);
    setShowProfileModal(true);
  };

  const navLinks = [
    { href: '#home', text: 'Início' },
    { href: '#about', text: 'Sobre' },
    { href: '#menu', text: 'Menu' },
    { href: '#awards', text: 'Prêmios' },
    { href: '#contact', text: 'Contato' },
  ];

  return (
    <>
      <nav className={navbarClasses}>
        <div className="app__navbar-logo">
          <a href="#home" onClick={closeAll}>
            <img src={images.gericht} alt="Gericht logo" />
          </a>
        </div>

        <ul className="app__navbar-links">
          {navLinks.map((link) => (
            <li key={link.href} className="p__opensans"><a href={link.href}>{link.text}</a></li>
          ))}
        </ul>

        <div className="app__navbar-login">
          {currentUser ? (
            <>
              <button type="button" className="book__button" onClick={() => openProfileModal('profile')}>
                Olá, {currentUser.name}
              </button>
              <div />
              <button type="button" className="book__button" onClick={() => openProfileModal('bookings')}>
                Minhas Reservas
              </button>
              <div />
              <button type="button" className="book__button" onClick={() => setShowBookingModal(true)}>
                Reservar Mesa
              </button>
            </>
          ) : (
            <>
              <button type="button" className="book__button" onClick={() => setShowAuthModal(true)}>
                Entrar / Registrar
              </button>
              <div />
              <button type="button" className="book__button" onClick={() => setShowBookingModal(true)}>
                Reservar Mesa
              </button>
            </>
          )}
        </div>

        <div className="app__navbar-smallscreen">
          <button type="button" aria-label="Abrir menu" className="hamburger__button" onClick={() => setToggleMenu(true)}>
            <GiHamburgerMenu color="#fff" fontSize={27} />
          </button>

          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay">
              <button type="button" aria-label="Fechar menu" className="overlay__close" onClick={() => setToggleMenu(false)}>
                <MdOutlineRestaurantMenu fontSize={27} />
              </button>
              
              <ul className="app__navbar-smallscreen_links">
                {navLinks.map((link, index) => (
                  <li key={link.href} style={{ animationDelay: `${0.1 + index * 0.08}s` }}>
                    <a href={link.href} onClick={closeAll}>{link.text}</a>
                  </li>
                ))}
                
                <li className="smallscreen__divider" style={{ animationDelay: '0.5s' }}/>

                {currentUser ? (
                  <>
                    <li style={{ animationDelay: '0.55s' }}>
                      <button type="button" onClick={() => { closeAll(); openProfileModal('profile'); }}>Meu Perfil</button>
                    </li>
                    <li style={{ animationDelay: '0.6s' }}>
                      <button type="button" onClick={() => { closeAll(); openProfileModal('bookings'); }}>Minhas Reservas</button>
                    </li>
                  </>
                ) : (
                  <li style={{ animationDelay: '0.55s' }}>
                    <button type="button" onClick={() => { closeAll(); setShowAuthModal(true); }}>Entrar / Registrar</button>
                  </li>
                )}

                <li style={{ animationDelay: '0.65s' }}>
                  <button type="button" className="custom__button smallscreen__booking-button" onClick={() => { closeAll(); setShowBookingModal(true); }}>
                    Reservar Mesa
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {showBookingModal && <BookingModal onClose={closeAll} />}
      {showAuthModal && <AuthModal onClose={closeAll} />}
      {showProfileModal && <ProfileModal onClose={closeAll} initialView={profileModalView} />}
    </>
  );
};

export default Navbar;