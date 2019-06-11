import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import classes from './EventCard.module.css';
import imgs from '../../assets/img/male-placeholder.jpg';
import eventImg from '../../assets/img/event-placeholder.png';

const EventCard = ({ host, image, name, city, start_date, _id, userMe }) => {
  const formatDate = (date, opt) => moment(date).format(opt);

  const goToProfile = () => {
    if (userMe) {
      if (host._id === userMe._id) {
        return (
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <div className={classes.owner}>
              <p>{host && host.name}</p>
            </div>
          </Link>
        );
      }

      return (
        <Link to={`/user/${host._id}`} style={{ textDecoration: 'none' }}>
          <div className={classes.owner}>
            <p>{host && host.name}</p>
          </div>
        </Link>
      );
    }
  };

  return (
    <div className={classes.EventCard}>
      <div className={classes.EventCard__header}>
        <img src={(host && host.avatar) || imgs} alt="not found" />
        {goToProfile()}
      </div>
      <div className={classes.EventCard__img}>
        <Link to={`/event/${_id}`}>
          <img
            className={classes.EventCard__img_current}
            src={(image && image) || eventImg}
            alt="404"
          />
        </Link>
      </div>
      <div className={classes.EventCard__about}>
        <div className={classes.EventCard__date}>
          {formatDate(start_date, 'DD  MMM YYYY')}
        </div>
        <div className={classes.EventCard__title}>{name}</div>
        <div className={classes.EventCard__location}>{city}</div>
      </div>
    </div>
  );
};

export default EventCard;
