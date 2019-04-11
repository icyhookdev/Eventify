import React from 'react';

import classes from './Loading.module.css';

const Loading = ({ msg }) => (
  <div className={classes.Loading}>
    <h3 className={classes.loading__msg}>{msg}</h3>
    <div className={classes.Loading__spinner} />
  </div>
);

export default Loading;
