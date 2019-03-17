import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Nav.module.css';
import ProfileIco from '../../icons/Profile';
import EventIco from '../../icons/EventIco';
import ChatIco from '../../icons/ChatIco';

const Nav = () => (
  <div clasName={classes.flipped}>
    <div className={classes.Nav}>
      <ul className={classes.Nav__items}>
        <li className={classes.Nav__item}>
          <NavLink
            to="/"
            exact
            activeStyle={{
              color: '#ea555c',
              fill: '#ea555c',
              borderRight: '.3em solid #ea555c',
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
              borderRight: '.3em solid #ea555c',
            }}
          >
            <ProfileIco />
            Perfil
          </NavLink>
        </li>
        <li className={classes.Nav__item}>
          <NavLink
            to="/chat-room"
            activeStyle={{
              color: '#ea555c',
              fill: '#ea555c',
              borderRight: '.3em solid #ea555c',
            }}
          >
            <ChatIco /> Chat room
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
