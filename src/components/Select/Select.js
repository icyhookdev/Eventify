import React from 'react';
import classes from './Select.module.css';

const Select = ({
  selected,
  options,
  errMsg,
  touched,
  name,
  change,
  value,
}) => {
  const borderSelect = errMsg ? 'err__Select' : 'Select';
  const optionList = options.map((opt, i) => (
    <option key={i} value={opt}>
      {opt}
    </option>
  ));
  return (
    <div className={classes.group}>
      <select
        className={classes[borderSelect]}
        touched={touched}
        name={name}
        value={value || ''}
        onChange={change}
      >
        <option value="">{selected}</option>
        {optionList}
      </select>
      <span className={classes.err__msg}>{errMsg}</span>
    </div>
  );
};

export default Select;
