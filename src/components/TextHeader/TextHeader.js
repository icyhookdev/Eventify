import React from 'react';

import classes from './TextHeader.module.css';

const TextHeader = ({ title, description, img, mt }) => (
  <div
    className={classes.TextHeader}
    style={mt ? { marginTop: '3.5em' } : null}
  >
    <img className={classes.icon} src={img} alt="404" />
    <div>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.description}>{description}</p>
    </div>
  </div>
);

export default TextHeader;
