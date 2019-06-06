import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MyEventsCard.module.css';
import img from '../../../assets/icons/camera.svg';
import editIcon from '../../../assets/icons/edit.svg';

const EventsCreated = ({ _id, name, image }) => (
  <div className={classes.EventsCreated}>
    <div className={classes.EventsCreated__card}>
      <div className={classes.card__img}>
        <img src={(image && image) || img} alt="404" />
      </div>
      <div className={classes.card__details}>
        <h1>{name}</h1>
        <p>Febrero 22, 2019</p>
        <Link to={`/dashboard/${_id}`} className={classes.link}>
          <img src={editIcon} alt="404" />
          Editar
        </Link>
      </div>
    </div>
  </div>
);

export default EventsCreated;
