import React, { useState, useEffect, useCallback } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import Calendar from 'react-calendar';
import Table from '../Table/Table';
import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../supabaseClient';
import { images } from '../../constants';
import './BookingModal.css';
import './Calendar.css';

// Função de horários aprimorada: aceita 'isToday' para filtrar horários passados
const generateTimeSlots = (day, isToday = false) => {
  const slots = { Manhã: [], Tarde: [], Noite: [] };
  const isWeekend = day.getDay() === 0 || day.getDay() === 6;
  const endHour = isWeekend ? 27 : 26;
  
  // Se for hoje, o primeiro horário disponível é a próxima hora cheia
  const startHour = isToday ? new Date().getHours() + 1 : 10;

  for (let i = startHour; i < endHour; i++) {
    const hour = i % 24;
    // Adiciona o horário se for maior que a hora atual (no caso de hoje)
    const time = `${String(hour).padStart(2, '0')}:00`;
    if (hour >= 10 && hour < 12) slots.Manhã.push(time);
    else if (hour >= 12 && hour < 18) slots.Tarde.push(time);
    else slots.Noite.push(time);
  }
  return slots;
};

const BookingModal = ({ onClose }) => {
  const { currentUser } = useAuth();
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTableId, setSelectedTableId] = useState(null);
  
  const today = new Date();
  const [bookingDate, setBookingDate] = useState(today);
  
  // Inicializa os horários já filtrados para o dia de hoje
  const initialTimeSlots = generateTimeSlots(today, true);
  const [timeSlots, setTimeSlots] = useState(initialTimeSlots);
  
  // Define o primeiro horário disponível como o padrão
  const [bookingTime, setBookingTime] = useState(
    initialTimeSlots.Manhã[0] || initialTimeSlots.Tarde[0] || initialTimeSlots.Noite[0] || ''
  );

  const fetchTablesAndAvailability = useCallback(async () => {
    setLoading(true);
    const dateString = bookingDate.toISOString().split('T')[0];

    const { data: allTables, error: tablesError } = await supabase.from('tables').select('*');
    if (tablesError) { console.error("Erro ao buscar mesas:", tablesError.message); setLoading(false); return; }

    const { data: bookings, error: bookingsError } = await supabase
      .from('bookings').select('table_id').eq('booking_date', dateString).eq('booking_time', bookingTime);
    if (bookingsError) { console.error("Erro ao buscar reservas:", bookingsError.message); setLoading(false); return; }
    
    const bookedTableIds = bookings.map(b => b.table_id);
    const updatedTables = allTables.map(table => ({...table, status: bookedTableIds.includes(table.id) ? 'occupied' : 'available'}));

    setTables(updatedTables);
    setSelectedTableId(null);
    setLoading(false);
  }, [bookingDate, bookingTime]);

  useEffect(() => {
    // Só busca a disponibilidade se houver um horário válido selecionado
    if (bookingTime) {
      fetchTablesAndAvailability();
    } else {
      // Se não houver horários, limpa a lista de mesas
      setTables([]);
      setLoading(false);
    }
  }, [fetchTablesAndAvailability, bookingTime]);

  const handleDateChange = (date) => {
    setBookingDate(date);
    const isToday = date.toDateString() === new Date().toDateString();
    const newTimeSlots = generateTimeSlots(date, isToday);
    setTimeSlots(newTimeSlots);
    setBookingTime(newTimeSlots.Noite[0] || newTimeSlots.Tarde[0] || newTimeSlots.Manhã[0] || '');
  };
  
  const handleSelectTable = (tableId) => {
    setSelectedTableId(selectedTableId === tableId ? null : tableId);
  };

  const selectedTable = tables.find(table => table.id === selectedTableId);

  const handleBooking = async () => {
    if (!selectedTable) { alert('Por favor, selecione uma mesa.'); return; }
    if (!currentUser) { alert('Você precisa estar logado para completar a reserva.'); return; }

    const { error } = await supabase.from('bookings').insert({
      user_id: currentUser.id,
      table_id: selectedTable.id,
      booking_date: bookingDate.toISOString().split('T')[0],
      booking_time: bookingTime,
      number_of_guests: selectedTable.capacity,
    });

    if (error) {
      if (error.code === '23505') {
        alert('Esta mesa já está reservada para esta data e horário.');
      } else {
        alert('Ocorreu um erro: ' + error.message);
      }
    } else {
      alert(`Mesa ${selectedTable.number} reservada com sucesso para ${currentUser.name} em ${bookingDate.toLocaleDateString()} às ${bookingTime}!`);
      onClose();
    }
  };

  return (
    <div className="app__modal-overlay" onClick={onClose}>
      <div className="app__modal-content booking-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="app__modal-close" onClick={onClose} aria-label="Fechar modal"><MdOutlineClose /></button>
        
        <div className="booking-modal__header">
          <img src={images.gericht} alt="Gericht logo" className="booking-modal__logo" />
          <div className="app__modal-divider" />
        </div>

        <div className="booking-modal__body">
          <div className="booking-section">
            <p className="p__cormorant">1. Escolha a Data e Horário</p>
            <div className="booking-datetime">
              <Calendar
                onChange={handleDateChange}
                value={bookingDate}
                minDate={new Date()}
                locale="pt-BR"
              />
              <div className="time-slots-container">
                {
                  (timeSlots.Manhã.length + timeSlots.Tarde.length + timeSlots.Noite.length) > 0 
                  ? Object.keys(timeSlots).map(period => (
                      timeSlots[period].length > 0 && (
                        <div key={period} className="time-period">
                          <h4 className="p__opensans">{period}</h4>
                          <div className="time-slots">
                            {timeSlots[period].map(time => (
                              <button
                                key={time}
                                className={`time-slot-btn ${bookingTime === time ? 'active' : ''}`}
                                onClick={() => setBookingTime(time)}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      )
                    ))
                  : <p className="p__opensans no-slots-message">Não há horários disponíveis para hoje.</p>
                }
              </div>
            </div>
          </div>
          
          <div className="booking-section">
            <p className="p__cormorant">2. Selecione uma Mesa</p>
            <div className="restaurant-layout-container">
              {loading ? <p className="p__opensans">Verificando disponibilidade...</p> : (
                <div className="restaurant-layout">
                  {tables.map((table) => (
                    <Table
                      key={table.id}
                      number={table.number}
                      status={table.status}
                      capacity={table.capacity}
                      description={table.description}
                      isSelected={selectedTableId === table.id}
                      onSelect={() => handleSelectTable(table.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="booking-modal__footer">
          <div className="booking-summary">
            <p className="p__opensans">
              Mesa Selecionada: {selectedTable ? <strong>{selectedTable.number} ({selectedTable.capacity} pessoas)</strong> : 'Nenhuma'}
            </p>
            <button
              type="button"
              className="custom__button"
              onClick={handleBooking}
              disabled={!selectedTable || loading}
            >
              {currentUser ? 'Confirmar Reserva' : 'Faça Login para Reservar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;