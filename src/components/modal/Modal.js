import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';

import close from '../../assets/icons/close.svg';

const Modal = ({ open, title, handleClose, children }) => {
  const stateClass = open ? 'open' : 'close';

  return (
    <div className={`Modal ${stateClass}`} onClick={(e) => e.stopPropagation()}>
      <section className="Modal-content">
        <header className="Modal-content-header">
          <span>{title}</span>
          <div className="Modal-close" onClick={handleClose}>
            <img src={close} className="Modal-close-icon" alt="close"/>
          </div>
        </header>
        <div className="Modal-content-body">
          {children}
        </div>
      </section>
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  handleClose: PropTypes.func
};

Modal.defaultProps = {
  open: false,
  title: 'Modal Header',
  handleClose: () => {}
};

export default Modal;