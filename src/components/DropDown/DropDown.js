import React from 'react';
import SettingIco from '../icons/SettingIco';

import classes from './Dropdown.module.css';

const DropDown = ({ children, color }) => (
  <div className={classes.DropDown}>
    <SettingIco color={color} />
    <ul className={classes.dropdown__list}>{children}</ul>
  </div>
);

export default DropDown;
