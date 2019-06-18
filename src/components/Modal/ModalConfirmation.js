import React from 'react';

import classes from './Modal.module.css';
import avatarSuc from '../../assets/img/avatarWelcome.png';
import avatarCancel from '../../assets/img/avatarExpression.jpeg';

const ModalConfirmation = ({
  onMakeRequest,
  show,
  onCloseModal,
  isCancel,
  text,
}) => {
  let img = avatarSuc;
  if (isCancel) {
    img = avatarCancel;
  }

  return (
    show && (
      <div className={classes.modal_container}>
        <div className={classes.modal_backdrop} onClick={onCloseModal} />
        <div className={classes.modal}>
          <span className={classes.close} onClick={onCloseModal}></span>
          <div className={classes.popup}>
            <img src={img} className={classes.popup_img} alt="404" />
            <div className={classes.popup_text}>{text}</div>
            <div className={classes.btn_group}>
              <button
                type="button"
                className={[classes.btn_success, classes.btn].join(' ')}
                onClick={onMakeRequest}
              >
                Confirmar
              </button>
              <button
                type="button"
                className={[classes.btn_cancel, classes.btn].join(' ')}
                onClick={onCloseModal}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ModalConfirmation;
