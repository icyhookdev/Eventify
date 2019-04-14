import React from 'react';

import classes from './TextHeader.module.css';

const TextHeader = ({ title, description, img }) => (
  <div className={classes.TextHeader}>
    <img className={classes.icon} src={img} alt="404" />
    <div>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.description}>{description}</p>
    </div>
  </div>
);

export default TextHeader;
