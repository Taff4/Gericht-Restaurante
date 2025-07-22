import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LoadingSpinner } from '../../components';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { currentUser, loading } = useAuth();

  // 1. Mostra o spinner enquanto a sessão está sendo verificada
  if (loading) {
    return <LoadingSpinner />;
  }

  // 2. Se não há usuário logado, redireciona para a página inicial
  if (!currentUser) {
    return <Navigate to="/" />;
  }

  // 3. Se a rota é apenas para admin e o usuário não é admin, redireciona
  if (adminOnly && currentUser.role !== 'admin') {
    return <Navigate to="/" />;
  }

  // 4. Se tudo estiver certo, renderiza o componente filho (a página de admin)
  return children;
};

export default ProtectedRoute;
