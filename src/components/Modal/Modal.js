import React from 'react';

import classes from './Modal.module.css';

const Modal = ({ children, show, onCloseModal }) => {
  

  return (
    show && (
      <div className={classes.modal_container}>
        <div className={classes.modal_backdrop} onClick={onCloseModal} />
        <div className={classes.modal}>
          <span className={classes.close} onClick={onCloseModal}></span>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
