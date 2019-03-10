import React from 'react';
import { Link } from 'react-router-dom';

import classes from './OverLay.module.css';
import { LeftArrow } from '../icons/Icons';

export default () => (
  <div>
    <header className={classes.header} />
    <div className={classes.gradient__overlay} />
    <div className={classes.container}>
      <h1 className={classes.header__title}>Eventify</h1>
      <h2 className={classes.header__logan}>
        Donde los mejores eventos estan conectados a un click
      </h2>
      <Link to="/app" className={classes.header__btn}>
        EVENTIFY <LeftArrow w={17} h={17} fill="fill fill__white" />
      </Link>
    </div>
  </div>
);
