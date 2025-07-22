import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { images } from '../../constants';
import './UpdatePassword.css';

const UpdatePassword = () => {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [tokenFound, setTokenFound] = useState(false);

  useEffect(() => {
    // Esta verificação garante que a página só renderize o formulário se houver um token
    // Supabase usa o hash para o fluxo de recuperação de senha
    if (window.location.hash.includes('type=recovery')) {
      setTokenFound(true);
    } else {
      setError('Link de recuperação de senha inválido ou expirado. Por favor, solicite um novo link a partir da tela de login.');
    }
  }, []);

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      return setError('A senha deve ter pelo menos 6 caracteres.');
    }
    setLoading(true);
    setError('');
    setMessage('');

    // --- LÓGICA DE ATUALIZAÇÃO SEGURA ---
    // O Supabase usa o token da URL automaticamente para autenticar esta requisição
    const { data, error: updateError } = await supabase.auth.updateUser({
      password: password,
    });
    
    setLoading(false);

    if (updateError) {
      setError(`Não foi possível atualizar a senha: ${updateError.message}`);
    } else {
      setMessage('Sua senha foi atualizada com sucesso! Você pode fechar esta página e fazer login com a nova senha.');
    }
  };
  
  return (
    <div className="update-password-container app__bg">
      <a href="/">
        <img src={images.gericht} alt="logo" className="update-password-logo" />
      </a>
      
      {!tokenFound ? (
        // Se não houver token, mostra apenas a mensagem de erro
        <div>
          <h1 className="headtext__cormorant">Erro de Acesso</h1>
          <p className="p__opensans error">{error}</p>
          <a href="/" className="custom__button" style={{marginTop: '2rem'}}>Voltar ao Início</a>
        </div>
      ) : message ? (
        // Se a atualização foi bem-sucedida, mostra a mensagem de sucesso
        <div>
          <h1 className="headtext__cormorant">Sucesso!</h1>
          <p className="p__opensans success">{message}</p>
          <a href="/" className="custom__button" style={{marginTop: '2rem'}}>Voltar ao Início</a>
        </div>
      ) : (
        // Se houver token e ainda não houver mensagem, mostra o formulário
        <div>
          <h1 className="headtext__cormorant">Crie sua Nova Senha</h1>
          <form onSubmit={handlePasswordUpdate} className="update-password-form">
            <input
              type="password"
              placeholder="Digite sua nova senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="p__opensans error">{error}</p>}
            <button type="submit" className="custom__button" disabled={loading}>
              {loading ? 'Atualizando...' : 'Salvar Nova Senha'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdatePassword;