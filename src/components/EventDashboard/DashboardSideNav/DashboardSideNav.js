import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './DashboardSideNav.module.css';
import DashboardIco from '../../icons/DashboardIco';
import BasicInfoIco from '../../icons/BasicInfoIco';
import DetailsIcon from '../../icons/DetailsIcon';
import PeopleIco from '../../icons/PeopleIco';

const DashboardSideNav = () => (
  <div className={classes.DashboardSideNav}>
    <div className={classes.nav__container}>
      <div className={classes.event__header}>
        <h1 className={classes.event__title}>
          some event in the use from caracas
        </h1>
        <p className={classes.event__date}>20-29-1202</p>
      </div>
      <div className={classes.Nav}>
        <ul className={classes.Nav__items}>
          <li className={classes.Nav__item}>
            <NavLink
              to="/dashboard"
              exact
              activeStyle={{
                color: '#ea555c',
                fill: '#ea555c',
                borderLeft: '.3em solid #ea555c',
                background: '#fff',
              }}
            >
              <DashboardIco />
              Dashboard
            </NavLink>
          </li>
          <li className={classes.Nav__item}>
            <NavLink
              to="/dashboard/info"
              activeStyle={{
                color: '#ea555c',
                fill: '#ea555c',
                borderLeft: '.3em solid #ea555c',
                background: '#fff',
              }}
            >
              <BasicInfoIco />
              Info. basica
            </NavLink>
          </li>
          <li className={classes.Nav__item}>
            <NavLink
              to="/dashboard/details"
              activeStyle={{
                color: '#ea555c',
                fill: '#ea555c',
                borderLeft: '.3em solid #ea555c',
                background: '#fff',
              }}
            >
              <DetailsIcon />
              Detalles
            </NavLink>
          </li>
          <li className={classes.Nav__item}>
            <NavLink
              to="/dashboard/attendents"
              activeStyle={{
                color: '#ea555c',
                fill: '#ea555c',
                borderLeft: '.3em solid #ea555c',
                background: '#fff',
              }}
            >
              <PeopleIco />
              Participantes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default DashboardSideNav;
