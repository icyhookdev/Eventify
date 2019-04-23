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
      <Link to="/">
        <img
          className={classes.EventCard__img_current}
          src={eventImg}
          alt="404"
        />
      </Link>
    </div>
    <div className={classes.EventCard__about}>
      <div className={classes.EventCard__date}>Mon, Abr 21 2019</div>
      <div className={classes.EventCard__title}>Anime Expo 2019</div>
      <div className={classes.EventCard__location}>Caracas, Venezuela</div>
    </div>
  </div>
);

export default EventCard;
