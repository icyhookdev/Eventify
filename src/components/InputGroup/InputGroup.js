import React from 'react';
import classes from './InputGroup.module.css';

const InputGroup = ({ value, change, name, type, errMsg, label, touched }) => {
  const borderInput = errMsg ? 'err__input' : 'Input';
  return (
    <div className={classes.group}>
      <input
        touched={touched}
        className={classes[borderInput]}
        type={type}
        name={name}
        placeholder={label}
        onChange={change}
        value={value}
        autoComplete="off"
        min="1940-01-01"
        max="2001-12-31"
      />
      <span className={classes.err__msg}>{errMsg}</span>
    </div>
  );
};

export default InputGroup;
