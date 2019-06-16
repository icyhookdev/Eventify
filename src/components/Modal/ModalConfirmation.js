import React from 'react';

import classes from './Modal.module.css';

const Modal = ({ onMakeRequest, show, onCloseModal }) => {
  console.log('render');

  return (
    show && (
      <div className={classes.modal_container}>
        <div className={classes.modal_backdrop} onClick={onCloseModal} />
        <div className={classes.modal}>
          <span className={classes.close} onClick={onCloseModal}></span>
          <div className={classes.popup}>
            <img src={avatar} className={classes.popup_img} alt="404" />
            <div className={classes.popup_text}></div>
            <div className={classes.btn_group}>
              <button
                type="button"
                className={[classes.btn_cancel, classes.btn].join(' ')}
              >
                Cancelar
              </button>
              <button
                type="button"
                className={[classes.btn_success, classes.btn].join(' ')}
                onClick={onMakeRequest}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
