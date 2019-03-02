import React from 'react';

import './Modal.css';

import close from '../../assets/icons/close.svg';

const Modal = ({ open, handleClose, children }) => {
  const stateClass = open ? 'open' : 'close';

  return (
    <div className={`Modal ${stateClass}`} onClick={(e) => e.stopPropagation()}>
      <section className="Modal-content">
        {children}
        <div className="Modal-close" onClick={handleClose}>
          <img src={close} className="Modal-close-icon" alt="close"/>
        </div>
      </section>
    </div>
  );
};

export default Modal;