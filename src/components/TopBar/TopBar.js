import React from 'react';
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
      <button className={classes.top__btn} type="button">
        <AddIco />
        Crear Evento
      </button>
      <SettingIco />
    </div>
  </div>
);

export default TopBar;
