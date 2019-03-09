import React from 'react';

import classes from './Header.module.css';

export default () => (
  <div>
    <header className={classes.header} />
    <div className={classes.gradient__overlay} />
    <div className={classes.container}>
      <h1 className={classes.header__title}>Eventify</h1>
      <h2 className={classes.header__logan}>
        Donde los mejores eventos estan conectados a un click
      </h2>
      <a href="/" className={classes.header__btn}>
        EVENTIFY
      </a>
    </div>
  </div>
);
