import React, { Fragment } from 'react';

import classes from './Modal.module.css';

const Modal = ({ children, show, onCloseModal }) => {
  console.log('render');

  return (
    show && (
      <div className={classes.modal_container}>
        <div className={classes.modal_backdrop} onClick={onCloseModal} />
        <div className={classes.modal}>
          <Fragment>
            <span className={classes.close} onClick={onCloseModal}></span>
            {children}
          </Fragment>
        </div>
      </div>
    )
  );
};

export default Modal;
