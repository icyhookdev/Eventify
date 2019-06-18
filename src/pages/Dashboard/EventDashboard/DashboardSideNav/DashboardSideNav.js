import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './DashboardSideNav.module.css';
import DashboardIco from '../../../../components/icons/DashboardIco';
import BasicInfoIco from '../../../../components/icons/BasicInfoIco';
import DetailsIcon from '../../../../components/icons/DetailsIcon';
import PeopleIco from '../../../../components/icons/PeopleIco';
import RestrictionIco from '../../../../components/icons/RestrictionIco';

const DashboardSideNav = ({ event }) => (
  <div className={classes.DashboardSideNav}>
    <div className={classes.nav__container}>
      <div className={classes.event__header}>
        <h1 className={classes.event__title}>{event && event.name}</h1>
        <p className={classes.event__date}>20-29-1202</p>
      </div>
      <div className={classes.Nav}>
        <ul className={classes.Nav__items}>
          <li className={classes.Nav__item}>
            <NavLink
              to={`/dashboard/${event && event._id}`}
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
              to={`/dashboard/info/${event && event._id}`}
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
              to={`/dashboard/details/${event && event._id}`}
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
              to={`/dashboard/guests/${event && event._id}`}
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
          <li className={classes.Nav__item}>
            <NavLink
              to={`/dashboard/restrictions/${event && event._id}`}
              activeStyle={{
                color: '#ea555c',
                fill: '#ea555c',
                borderLeft: '.3em solid #ea555c',
                background: '#fff',
              }}
            >
              <RestrictionIco />
              Restricciones
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default DashboardSideNav;
