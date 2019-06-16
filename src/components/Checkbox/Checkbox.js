import React from 'react';

import classes from './Checkbox.module.css';

const Checkbox = ({ text, change, checked }) => (
  <div className={classes.checkbox_container}>
    <input
      id="checkbox"
      type="checkbox"
      name="conditions"
      className={classes.checkbox}
      onChange={change}
      checked={checked}
    />
    <label htmlFor="checkbox">{text}</label>
  </div>
);

export default Checkbox;
