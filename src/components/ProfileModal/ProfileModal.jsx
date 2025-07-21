import React, { useState, useEffect } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../supabaseClient';
import './ProfileModal.css';

// Componente para renderizar um único card de reserva
const BookingCard = ({ booking, onCancel }) => (
  <div className="booking-card">
    <div className="booking-card__header">
      <p className="p__cormorant">Mesa {booking.tables.number}</p>
      <span className="p__opensans">{new Date(booking.booking_date + 'T00:00:00').toLocaleDateString()}</span>
    </div>
    <div className="booking-card__body">
      <p className="p__opensans">Horário: <strong>{booking.booking_time}</strong></p>
      <p className="p__opensans">Pessoas: <strong>{booking.number_of_guests}</strong></p>
    </div>
    <div className="booking-card__footer">
      <button className="cancel-button" onClick={() => onCancel(booking.id)}>
        Cancelar Reserva
      </button>
    </div>
  </div>
);

const ProfileModal = ({ onClose, initialView = 'profile' }) => {
  const { currentUser, logout } = useAuth();
  const [view, setView] = useState(initialView);
  const [loadingBookings, setLoadingBookings] = useState(true);
  const [bookings, setBookings] = useState([]);

  // Busca as reservas do usuário
  useEffect(() => {
    const fetchUserBookings = async () => {
      if (currentUser) {
        setLoadingBookings(true);
        const { data: bookingsData } = await supabase
          .from('bookings')
          .select('*, tables(number)')
          .eq('user_id', currentUser.id)
          .order('booking_date', { ascending: false });
          
        if (bookingsData) {
          setBookings(bookingsData);
        }
        setLoadingBookings(false);
      }
    };
    if (view === 'bookings') {
      fetchUserBookings();
    }
  }, [currentUser, view]);

  const handleCancelBooking = async (bookingId) => {
    // Pede confirmação ao usuário
    if (window.confirm('Tem certeza que deseja cancelar esta reserva?')) {
      const { error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', bookingId);

      if (error) {
        alert('Erro ao cancelar a reserva: ' + error.message);
      } else {
        // Remove a reserva da lista na tela para feedback imediato
        setBookings(bookings.filter(b => b.id !== bookingId));
        alert('Reserva cancelada com sucesso!');
      }
    }
  };

  const handleLogout = () => {
    logout();
    onClose();
  };

  if (!currentUser) return null;

  return (
    <div className="app__modal-overlay" onClick={onClose}>
      <div className="app__modal-content profile-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="app__modal-close" onClick={onClose} aria-label="Fechar modal"><MdOutlineClose /></button>
        
        <div className="profile-modal__tabs">
          <button className={`profile-tab-btn ${view === 'profile' ? 'active' : ''}`} onClick={() => setView('profile')}>Meu Perfil</button>
          <button className={`profile-tab-btn ${view === 'bookings' ? 'active' : ''}`} onClick={() => setView('bookings')}>Minhas Reservas</button>
        </div>
        <div className="app__modal-divider" />

        <div className="profile-content-wrapper">
          {view === 'profile' && (
            <div className="profile-details">
              <h3 className="headtext__cormorant" style={{fontSize: '32px', marginBottom: '2rem'}}>Detalhes da Conta</h3>
              <p className="p__opensans"><strong>Nome de Usuário:</strong> {currentUser.name}</p>
              <p className="p__opensans"><strong>E-mail:</strong> {currentUser.email}</p>
              <p className="p__opensans" style={{marginTop: '2rem', color: 'var(--color-grey)'}}>
                Funcionalidade para editar perfil será adicionada em breve.
              </p>
            </div>
          )}

          {view === 'bookings' && (
            <div className="bookings-list">
              {loadingBookings ? (
                <p className="p__opensans">Carregando reservas...</p>
              ) : bookings.length > 0 ? (
                bookings.map(booking => <BookingCard key={booking.id} booking={booking} onCancel={handleCancelBooking} />)
              ) : (
                <p className="p__opensans">Você ainda não possui reservas.</p>
              )}
            </div>
          )}
        </div>
        
        <button type="button" className="custom__button logout__button" onClick={handleLogout}>Sair (Logout)</button>
      </div>
    </div>
  );
};

export default ProfileModal;