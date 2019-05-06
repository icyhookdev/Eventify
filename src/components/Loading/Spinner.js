import React from 'react';

import classes from './Loading.module.css';

const Spinner = () => (
  <div className={classes.spinner}>
    <div className={classes.cube1} />
    <div className={classes.cube2} />
  </div>
);

export default Spinner;
