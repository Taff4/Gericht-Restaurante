import React from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = () => (
  // O container principal ainda será posicionado via CSS.
  <div className="app__scroll-indicator">
    <p></p>
    {/* Este é o "trilho" da nossa barra de scroll customizada. */}
    <div className="scroll__track">
      {/* Esta é a "bolinha" que vai animar para cima e para baixo. */}
      <div className="scroll__thumb" />
    </div>
  </div>
);

export default ScrollIndicator;