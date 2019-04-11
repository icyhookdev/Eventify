import React from 'react';

import classes from './Button.module.css';

const Button = ({ type, text, buttonClass, clicked }) => (
  <button
    type={type || 'button'}
    className={[classes.Button, classes[buttonClass]].join(' ')}
    onClick={clicked}
  >
    {text}
  </button>
);

export default Button;
