import React from 'react';
import { Link } from 'react-router-dom';

import classes from './BottomBar.module.css';

const BottomBar = () => (
  <div className={classes.group}>
    <div className={classes.group__btn}>
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
