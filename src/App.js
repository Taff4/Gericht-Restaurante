// src/App.js

// CORREÇÃO: Importe useState e useEffect aqui
import React, { useState, useEffect } from 'react';
// A importação do router não é necessária com a abordagem simplificada
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

// Componente App inteligente que decide qual página mostrar
const SmartApp = () => {
    const [isUpdatePassword, setIsUpdatePassword] = useState(false);

    useEffect(() => {
        // Esta função será chamada apenas uma vez, quando o app montar
        const handleAuthAction = () => {
            // O Supabase adiciona 'type=recovery' ao hash da URL
            if (window.location.hash.includes('type=recovery')) {
                setIsUpdatePassword(true);
            }
        };
        
        // Verifica na carga inicial
        handleAuthAction();

        // Ouve por mudanças no hash (caso o usuário cole o link com o app já aberto)
        window.addEventListener('hashchange', handleAuthAction);

        // Limpa o listener
        return () => {
            window.removeEventListener('hashchange', handleAuthAction);
        };
    }, []);

    // Se for a rota de recuperação, mostra apenas a página de nova senha.
    // Senão, mostra o site completo.
    return isUpdatePassword ? <UpdatePassword /> : <MainPage />;
}

export default SmartApp;