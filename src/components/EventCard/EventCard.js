import React from 'react';
import { Link } from 'react-router-dom';

import classes from './EventCard.module.css';
import imgs from '../../assets/img/user.jpg';
import eventImg from '../../assets/img/event.jpeg';

const EventCard = () => (
  <div className={classes.EventCard}>
    <div className={classes.EventCard__header}>
      <img src={imgs} alt="not found" />
      <div className={classes.owner}>
        <p>Cristihan</p>
      </div>
    </div>
    <div className={classes.EventCard__img}>
      <h2>Marcelo Digrachi Live</h2>
      <img src={eventImg} alt="404" />
      <div className={classes.event__overlay}>
        <Link to="/">Ver Evento</Link>
      </div>
      <div className={classes.event__date}>
        <span className={classes.day}>12</span>
        <span className={classes.month}>DIC</span>
        <span className={classes.year}>2019</span>
      </div>
    </div>
  </div>
);

export default EventCard;
