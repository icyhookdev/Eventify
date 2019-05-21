import React from 'react';

import classes from './TextArea.module.css';

const TextArea = ({ name, value, change, errMsg, label }) => (
  <div className={classes.container}>
    <textarea
      name={name}
      value={value}
      onChange={change}
      maxLength={250}
      className={classes.TextArea}
      placeholder={label}
    />
    <div className={classes.info}>
      <span className={classes.err__msg}>{errMsg && errMsg}</span>
      <span className={classes.max}>{(value && value.length) || 0}/250</span>
    </div>
  </div>
);

export default TextArea;
