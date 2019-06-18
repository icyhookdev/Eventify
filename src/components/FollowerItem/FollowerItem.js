import React from 'react';

import classes from './FollowerItem.module.css';

const FollowerItem = ({ avatar, name, onFollowUser }) => (
  <div className={classes.FollowerItem}>
    <img src={avatar} alt="404" className={classes.followerUserImg} />
    <div className={classes.followerUserName}>{name}</div>
    <button
      type="button"
      className={classes.followerUserBtn}
      onClick={onFollowUser}
    >
      Seguir
    </button>
  </div>
);

export default FollowerItem;
