import React, { useState } from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Obrigado por se inscrever com o email: ${email}`);
      setEmail('');
    } else {
      alert('Por favor, insira um endereço de email.');
    }
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Assine Nossa Newsletter</h1>
        <p className="p__opensans">E nunca perca as últimas novidades!</p>
      </div>
      {/* Usamos um formulário de verdade agora */}
      <form className="app__newsletter-input flex__center" onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Seu melhor email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <button type="submit" className="custom__button">Assinar</button>
      </form>
    </div>
  );
};

export default Newsletter;