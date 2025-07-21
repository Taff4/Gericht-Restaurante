import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useAuth } from '../../context/AuthContext';
import './AuthModal.css';

const AuthModal = ({ onClose }) => {
  const [view, setView] = useState('login'); // 'login', 'register', ou 'forgot'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState(''); // Para mensagens de sucesso
  const [isLoading, setIsLoading] = useState(false);

  const { login, register, resetPassword } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    if (!name || !email || !password) {
      return setError('Todos os campos são obrigatórios.');
    }
    if (password.length < 6) {
      return setError('A senha deve ter pelo menos 6 caracteres.');
    }
    setIsLoading(true);
    const result = await register(name, email, password);
    setIsLoading(false);
    if (result.success) {
      onClose();
    } else {
      setError(result.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setIsLoading(true);
    const result = await login(email, password);
    setIsLoading(false);
    if (result.success) {
      onClose();
    } else {
      setError('E-mail ou senha inválidos.');
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setIsLoading(true);
    const result = await resetPassword(email);
    setIsLoading(false);
    if (result.success) {
      setMessage(result.message);
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="app__modal-overlay" onClick={onClose}>
      <div className="app__modal-content auth-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="app__modal-close" onClick={onClose} aria-label="Fechar modal">
          <MdOutlineClose />
        </button>

        <h2 className="headtext__cormorant">
          {view === 'login' && 'Entrar'}
          {view === 'register' && 'Registrar'}
          {view === 'forgot' && 'Redefinir Senha'}
        </h2>
        <div className="app__modal-divider" />
        
        {message && <p className="auth-success">{message}</p>}

        {view === 'login' && (
          <form onSubmit={handleLogin} className="auth-form">
            <input type="email" placeholder="Seu E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Sua Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
            {error && <p className="auth-error">{error}</p>}
            <button type="submit" className="custom__button" disabled={isLoading}>
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
            <p className="p__opensans toggle-view forgot-password" onClick={() => { setView('forgot'); setError(''); setMessage(''); }}>
              Esqueceu sua senha?
            </p>
            <p className="p__opensans toggle-view">
              Não tem uma conta? <span onClick={() => { setView('register'); setError(''); setMessage(''); }}>Registre-se</span>
            </p>
          </form>
        )}

        {view === 'register' && (
          <form onSubmit={handleRegister} className="auth-form">
            <input type="text" placeholder="Seu Nome" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Seu E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Crie uma Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
            
            <div className="lgpd-consent">
              <input type="checkbox" id="lgpd" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
              <label htmlFor="lgpd" className="p__opensans">Eu concordo com os Termos de Serviço e a Política de Privacidade. Reconheço que meus dados serão armazenados para fins de reserva.</label>
            </div>

            {error && <p className="auth-error">{error}</p>}
            <button type="submit" className="custom__button" disabled={!agreed || isLoading}>
              {isLoading ? 'Criando Conta...' : 'Criar Conta'}
            </button>
            <p className="p__opensans toggle-view">
              Já tem uma conta? <span onClick={() => { setView('login'); setError(''); setMessage(''); }}>Faça login</span>
            </p>
          </form>
        )}

        {view === 'forgot' && (
          <form onSubmit={handlePasswordReset} className="auth-form">
            <p className="p__opensans" style={{textAlign: 'center', marginBottom: '1rem'}}>Digite seu e-mail para receber o link de redefinição.</p>
            <input type="email" placeholder="Seu E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
            {error && <p className="auth-error">{error}</p>}
            <button type="submit" className="custom__button" disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Enviar Link'}
            </button>
            <p className="p__opensans toggle-view">
              Lembrou a senha? <span onClick={() => { setView('login'); setError(''); setMessage(''); }}>Voltar para o Login</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthModal;