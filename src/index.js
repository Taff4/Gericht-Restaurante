// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SmartApp from './App'; // Importa o SmartApp
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <SmartApp />
    </AuthProvider>
  </React.StrictMode>
);