import React from 'react';
import { Link } from 'react-router-dom';

import classes from './BottomBar.module.css';
// import Loading from '../Loading/Loading';
import LoadingInLine from '../Loading/LoadingInLine';

const BottomBar = ({ isLoading }) => (
  <div className={classes.group}>
    <div className={classes.group__btn}>
      {isLoading && <LoadingInLine msg="Registrando Evento" />}
      <Link to="/" className={classes.cancel}>
        Descartar
      </Link>
      <button type="submit" className={classes.button} text="Guardar">
        Guardar
      </button>
    </div>
  </div>
);

export default BottomBar;
