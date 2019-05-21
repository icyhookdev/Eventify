import React from 'react';

import classes from './Invite.module.css';

const Invite = ({ text, remove }) => (
  <div className={classes.Invite}>
    <div className={classes.InviteText}>{text}</div>
    <div className={classes.InviteRemove} onClick={remove} />
  </div>
);

export default Invite;
