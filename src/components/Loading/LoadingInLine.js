import React from 'react';

import classes from './Loading.module.css';

const LoadingInLine = ({ msg }) => (
  <div className={classes.LoadingInLine}>
    <h3 className={classes.loading__msg}>{msg}</h3>
    <div className={classes.Loading__spinner} />
  </div>
);

export default LoadingInLine;
