// src/App.js

// CORREÇÃO: Adicione 'useEffect' à importação do React
import React, { useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

// Importa todos os containers
import { 
  AboutUs, 
  Chef, 
  FindUs, 
  Footer, 
  Gallery, 
  Header, 
  Intro, 
  Laurels, 
  SpecialMenu, 
  UpdatePassword,
  AdminDashboard
} from './container';

// Importa os componentes necessários
import { Navbar, ProtectedRoute } from './components';
import './App.css';

// Componente para o layout da página principal
const MainPageLayout = () => (
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
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        navigate('/update-password');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  return null; // Este componente não renderiza nada
};

const App = () => {
  return (
    <Router>
      <AuthHandler />
      <Routes>
        <Route path="/" element={<MainPageLayout />} />
        <Route path="/update-password" element={<UpdatePassword />} />

        {/* ROTA PROTEGIDA PARA O PAINEL DE ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;