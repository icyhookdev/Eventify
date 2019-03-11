import React from 'react';

import classes from './EventCard.module.css';

export default ({ img, title }) => (
  <div className={classes.EventCard}>
    <div className={classes.EventCard__header}>
      <img src={img} alt="not found" />
      <h2>Some title</h2>
      <p>Evento Patrocinado por Cristihan Albarran</p>
    </div>
    <div className={classes.EventCard__body}>
      <p className={classes.date}>Viernes 27 de Abril a las 16:00 PM</p>
      <p className={classes.place}>
        Plza Alfredo sadel, Las mercedes, Caracas, Venezuela
      </p>
      <div className={classes.info}>
        <div className={classes.people}>
          <p>120</p>
          <p>120</p>
        </div>
        <div className={classes.people}>
          <p>Publico - Formal</p>
        </div>
      </div>
    </div>
    <div className={classes.EventCard__action}>
      <button>Ver</button>
    </div>
  </div>
);
