import React from 'react';
import { Link } from 'react-router-dom';

import classes from './DashboardNav.module.css';
import SettingIco from '../../../../components/icons/SettingIco';

const DashboardNav = () => (
  <div className={classes.DashboardNav}>
    <h1 className={classes.logo}>Revents</h1>
    <ul className={classes.items}>
      <li>
        <Link to="/">Cambiar evento</Link>
      </li>
      <li>
        <Link to="/">Eventos</Link>
      </li>
      <li className={classes.dropdown}>
        <SettingIco color="#fff" />
        <ul className={classes.dropdown__list}>
          <li>
            <a href="freehtml.html">Eliminar Evento</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default DashboardNav;
