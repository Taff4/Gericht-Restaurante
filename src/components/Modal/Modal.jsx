import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import './Modal.css';

const Modal = ({ title, content, onClose }) => (
  // O fundo semi-transparente que cobre a tela inteira
  <div className="app__modal-overlay" onClick={onClose}>
    {/* O container do modal em si, com animação de "fade-in" */}
    <div className="app__modal-content" onClick={(e) => e.stopPropagation()}>
      {/* Botão de fechar */}
      <button type="button" className="app__modal-close" onClick={onClose} aria-label="Fechar modal">
        <MdOutlineClose />
      </button>

      {/* Conteúdo do modal */}
      <h2 className="headtext__cormorant">{title}</h2>
      <div className="app__modal-divider" />
      {/* A prop 'content' é renderizada aqui. Ela pode ser um texto ou outro componente. */}
      <div>{content}</div>
    </div>
  </div>
);

export default Modal;