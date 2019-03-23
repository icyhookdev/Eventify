import React from 'react';
import { Link } from 'react-router-dom';

import InputGroup from '../InputGroup/InputGroup';
import classes from './TopBar.module.css';
import AddIco from '../icons/AddIco';
import SettingIco from '../icons/SettingIco';

const TopBar = () => (
  <div className={classes.TopBar}>
    <div className={classes.left__side}>
      <InputGroup label="Buscar" />
    </div>
    <div className={classes.right__side}>
      <Link to="/new" className={classes.top__btn}>
        <AddIco />
        Crear Evento
      </Link>
      <SettingIco />
    </div>
  </div>
);

export default TopBar;
