import React from 'react';
import { Link } from 'react-router-dom';

import InputGroup from '../InputGroup/InputGroup';
import classes from './TopBar.module.css';
import AddIco from '../icons/AddIco';
import DropDown from '../DropDown/DropDown';

const TopBar = ({ signout }) => (
  <div className={classes.TopBar}>
    <div className={classes.left__side}>
      <InputGroup label="Buscar" />
    </div>
    <div className={classes.right__side}>
      <Link to="/new" className={classes.top__btn}>
        Crear Evento
        <AddIco />
      </Link>
      {/* <SettingIco /> */}
      <DropDown color="#000">
        <li onClick={signout}>
          <span>Cerrar Sesion</span>
        </li>
      </DropDown>
    </div>
  </div>
);

export default TopBar;
