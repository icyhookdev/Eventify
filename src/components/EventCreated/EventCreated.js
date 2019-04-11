import React from 'react';
import { Link } from 'react-router-dom';

import classes from './EventCreated.module.css';
import img from '../../assets/img/event.jpeg';

const EventsCreated = () => (
  <div className={classes.EventsCreated}>
    <div className={classes.EventsCreated__card}>
      <div className={classes.card__img}>
        <img src={img} alt="404" />
      </div>
      <div className={classes.card__details}>
        <h1>Some Event</h1>
        <p>date created: 02-22-2019</p>
      </div>
      <Link to="/" className={classes.link}>
        editar
      </Link>
    </div>
  </div>
);

export default EventsCreated;
