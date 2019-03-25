import React, { Fragment } from 'react';

import classes from './TextHeader.module.css'

const TextHeader = ({ title, description }) => (
  <Fragment>
    <h2 className={classes.title}>{title}</h2>
    <p className={classes.description}>{description}</p>
  </Fragment>
);

export default TextHeader;
