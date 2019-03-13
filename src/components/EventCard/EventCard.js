import React from 'react';

import classes from './EventCard.module.css';
import imgs from '../../assets/img/user.jpg';
import dateIcon from '../../assets/icons/date.svg';
import placeIcon from '../../assets/icons/place.svg';
import userIcon from '../../assets/icons/user.svg';
import publicIcon from '../../assets/icons/public.svg';
import suitIcon from '../../assets/icons/suit.svg';

const EventCard = () => (
  <div className={classes.EventCard}>
    <div className={classes.EventCard__header}>
      <img src={imgs} alt="not found" />
      <div className={classes.owner}>
        <h2>Some title</h2>
        <p>
          Evento Patrocinado por <strong>Cristihan Albarran</strong>
        </p>
      </div>
    </div>
    <div className={classes.EventCard__body}>
      <p className={classes.date}>
        <img src={dateIcon} className={classes.dateIcon} alt="not found" />
        Viernes 27 de Abril a las 16:00 PM
      </p>
      <p className={classes.place}>
        <img src={placeIcon} className={classes.placeIcon} alt="not found" />
        Plza Alfredo sadel, Las mercedes, Caracas, Venezuela
      </p>
      <div className={classes.info}>
        <div className={classes.people}>
          <p>
            <img className={classes.userIcon} src={userIcon} alt="404" />
            120
          </p>
          <p>
            <img className={classes.userIcon} src={userIcon} alt="404" />
            120
          </p>
        </div>
        <div className={classes.details}>
          <p>
            <img className={classes.publicIcon} src={publicIcon} alt="404" />
            Publico
          </p>
          <p>
            <img className={classes.suitIcon} src={suitIcon} alt="404" />
            Formal
          </p>
        </div>
      </div>
    </div>
    <div className={classes.EventCard__action}>
      <button className={classes.button} type="button">
        Ver
      </button>
    </div>
  </div>
);

export default EventCard;
