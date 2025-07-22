import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { images } from '../../constants';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllBookings = async () => {
      setLoading(true);
      // Busca todas as reservas e os dados relacionados do perfil e da mesa
      const { data, error } = await supabase
        .from('bookings')
        .select(`
          id,
          booking_date,
          booking_time,
          profiles (name, email),
          tables (number)
        `)
        .order('booking_date', { ascending: false })
        .order('booking_time', { ascending: false });

      if (error) {
        console.error("Erro ao buscar todas as reservas:", error);
      } else {
        setBookings(data);
      }
      setLoading(false);
    };

    fetchAllBookings();
  }, []);

  return (
    <div className="admin-dashboard__container app__bg">
      <div className="admin-dashboard__content">
        <a href="/"><img src={images.gericht} alt="logo" className="admin-dashboard__logo" /></a>
        <h1 className="headtext__cormorant">Painel do Administrador</h1>
        <p className="p__opensans">Visão geral de todas as reservas</p>
        
        <div className="admin-dashboard__table-wrapper">
          {loading ? (
            <p className="p__opensans">Carregando reservas...</p>
          ) : (
            <table className="admin-dashboard__table">
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>E-mail</th>
                  <th>Mesa</th>
                  <th>Data</th>
                  <th>Horário</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length > 0 ? (
                  bookings.map(booking => (
                    <tr key={booking.id}>
                      <td>{booking.profiles.name}</td>
                      <td>{booking.profiles.email}</td>
                      <td>{booking.tables.number}</td>
                      <td>{new Date(booking.booking_date + 'T00:00:00').toLocaleDateString()}</td>
                      <td>{booking.booking_time}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">Nenhuma reserva encontrada.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;