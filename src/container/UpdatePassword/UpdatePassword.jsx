import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { images } from '../../constants';
import './UpdatePassword.css';

const UpdatePassword = () => {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      return setError('A senha deve ter pelo menos 6 caracteres.');
    }
    setLoading(true);
    setError('');
    setMessage('');

    const { error: updateError } = await supabase.auth.updateUser({
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
      
      {message ? (
        <div>
          <h1 className="headtext__cormorant">Sucesso!</h1>
          <p className="p__opensans success">{message}</p>
          <a href="/" className="custom__button" style={{marginTop: '2rem'}}>Voltar ao Início</a>
        </div>
      ) : (
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