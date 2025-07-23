import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { LoadingSpinner } from '../components';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Função para buscar o perfil e atualizar o estado do usuário
  const updateUserProfile = async (session) => {
    if (!session) {
      setCurrentUser(null);
      return;
    }
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();
    
    setCurrentUser({
      id: session.user.id,
      email: session.user.email,
      name: profile?.name || session.user.email,
      fullName: profile?.full_name,
      phone: profile?.phone,
      birthDate: profile?.birth_date,
      address: profile?.address,
      role: profile?.role,
    });
  };

  useEffect(() => {
    // 1. Verifica a sessão na carga inicial da aplicação.
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      await updateUserProfile(session);
      setLoading(false); // Garante que o loading termine aqui.
    };

    getInitialSession();

    // 2. Ouve por mudanças futuras no estado de autenticação (login/logout).
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        updateUserProfile(session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const register = async (name, email, password) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });
    return { success: !error, message: error?.message };
  };

  const login = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { success: !error, message: error?.message };
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setCurrentUser(null);
  };

  const resetPassword = async (email) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin,
    });
    if (error) {
      return { success: false, message: error.message };
    }
    return { success: true, message: 'Link de redefinição enviado para o seu e-mail!' };
  };

  // Nova função para forçar a atualização do perfil no contexto
  const refreshUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      await updateUserProfile(session);
    }
  };

  const value = {
    currentUser,
    login,
    register,
    logout,
    resetPassword,
    refreshUser, 
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <LoadingSpinner /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
