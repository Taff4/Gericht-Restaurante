import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, UpdatePassword } from './container';
import { Navbar } from './components';
import './App.css';

// Componente para a página principal
const MainPage = () => (
  <>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </>
);

// Componente que lida com os eventos de autenticação do Supabase
const AuthHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Listener do Supabase para eventos de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      // Quando o usuário clica no link de recuperação, o evento é PASSWORD_RECOVERY
      if (event === 'PASSWORD_RECOVERY') {
        // Redireciona o usuário para a nossa página de nova senha
        navigate('/update-password');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  return null; // Este componente não renderiza nada visualmente
};


const App = () => {
  return (
    <Router>
      <AuthHandler /> {/* Componente "ouvinte" que gerencia os redirecionamentos */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/update-password" element={<UpdatePassword />} />
      </Routes>
    </Router>
  );
};

export default App;