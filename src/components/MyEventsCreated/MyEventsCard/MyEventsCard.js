import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MyEventsCard.module.css';
import img from '../../../assets/icons/camera.svg';

const EventsCreated = ({ _id, name }) => (
  <div className={classes.EventsCreated}>
    <div className={classes.EventsCreated__card}>
      <div className={classes.card__img}>
        <img src={img} alt="404" />
      </div>
      <div className={classes.card__details}>
        <h1>{name}</h1>
        <p>date created: 02-22-2019</p>
      </div>
      <Link to={`/dashboard/${_id}`} className={classes.link}>
        Editar
      </Link>
    </div>
  </div>
);

export default EventsCreated;
