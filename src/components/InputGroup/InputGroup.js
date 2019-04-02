import React from 'react';
import classes from './InputGroup.module.css';

const InputGroup = ({
  value,
  change,
  name,
  type,
  errMsg,
  label,
  touched,
  disable,
}) => {
  const borderInput = errMsg ? 'err__input' : 'Input';
  const objDate = new Date();

  const today = `${objDate.getFullYear()}-${String(
    objDate.getMonth() + 1
  ).padStart(2, '0')}-${String(objDate.getDate()).padStart(2, '0')}`;
  return (
    <div className={classes.group}>
      <input
        onFocus={touched}
        className={classes[borderInput]}
        type={type}
        name={name}
        placeholder={label}
        onChange={change}
        value={value}
        autoComplete="off"
        min={today}
        readOnly={disable}
      />
      <span className={classes.err__msg}>{errMsg}</span>
    </div>
  );
};

export default InputGroup;
