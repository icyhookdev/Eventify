import React from 'react';

import classes from './OverLayBg.module.css';

const OverLayBg = ({ img }) => (
  <React.Fragment>
    <img className={classes.img} src={img} alt="404" />
    <div className={classes.OverLayBg} />
  </React.Fragment>
);

export default OverLayBg;
