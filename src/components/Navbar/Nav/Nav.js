import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Nav.module.css';
import ProfileIco from '../../icons/Profile';
import EventIco from '../../icons/EventIco';
import ChatIco from '../../icons/ChatIco';
import OwnEvents from '../../icons/OwnEvents';

const Nav = () => (
  <div className={classes.Nav}>
    <ul className={classes.Nav__items}>
      <li className={classes.Nav__item}>
        <NavLink
          to="/"
          exact
          activeStyle={{
            color: '#ea555c',
            fill: '#ea555c',
            borderLeft: '.3em solid #ea555c',
            background: '#fff',
          }}
        >
          <EventIco />
          Eventos
        </NavLink>
      </li>
      <li className={classes.Nav__item}>
        <NavLink
          to="/new"
          activeStyle={{
            color: '#ea555c',
            fill: '#ea555c',
            borderLeft: '.3em solid #ea555c',
            background: '#fff',
          }}
        >
          <ProfileIco />
          Perfil
        </NavLink>
      </li>
      <li className={classes.Nav__item}>
        <NavLink
          to="/myevents"
          activeStyle={{
            color: '#ea555c',
            fill: '#ea555c',
            borderLeft: '.3em solid #ea555c',
            background: '#fff',
          }}
        >
          <OwnEvents />
          Mis Eventos
        </NavLink>
      </li>
      <li className={classes.Nav__item}>
        <NavLink
          to="/chat-room"
          activeStyle={{
            color: '#ea555c',
            fill: '#ea555c',
            borderLeft: '.3em solid #ea555c',
            background: '#fff',
          }}
        >
          <ChatIco /> Chat room
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;
