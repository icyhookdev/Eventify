import React, { Fragment } from 'react';

import classes from './Invite.module.css';

const Invite = ({ text, remove, requested, status }) => (
  <div className={classes.Invite}>
    <div className={classes.InviteText}>{text}</div>
    <Fragment>
      {requested && (
        <div className={classes.InviteAction}>
          {status === 'pending' && <div className={classes.InvitePending} />}
          {status === 'accepted' && <div className={classes.InviteAccepted} />}
          <div className={classes.InviteRemove} onClick={remove} />
        </div>
      )}
      <div className={classes.InviteRemove} onClick={remove} />
    </Fragment>
  </div>
);

export default Invite;
