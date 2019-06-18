import React from 'react';

import classes from './Checkbox.module.css';

const Checkbox = ({ text, change, checked, name }) => (
  <div className={classes.checkbox_container}>
    <input
      type="checkbox"
      name={name}
      className={classes.checkbox}
      onChange={change}
      checked={checked}
    />
    <label htmlFor="checkbox">{text}</label>
  </div>
);

export default Checkbox;
