import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import './Modal.css';

const Modal = ({ title, content, onClose }) => (
  <div className="app__modal-overlay" onClick={onClose}>
    <div className="app__modal-content" onClick={(e) => e.stopPropagation()}>
      <button type="button" className="app__modal-close" onClick={onClose} aria-label="Fechar modal">
        <MdOutlineClose />
      </button>

      {/* Adicionada a classe 'modal__headtext' para controle de estilo */}
      <h2 className="headtext__cormorant modal__headtext">{title}</h2>
      
      <div className="app__modal-divider" />
      
      {typeof content === 'string' ? (
        <p className="p__opensans modal-text-content">{content}</p>
      ) : (
        <div>{content}</div>
      )}
    </div>
  </div>
);

export default Modal;