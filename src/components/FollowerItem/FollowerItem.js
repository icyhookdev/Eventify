import React from 'react';

import userImg from '../../assets/img/user.jpg';
import classes from './FollowerItem.module.css';

const FollowerItem = () => (
  <div className={classes.FollowerItem}>
    <img src={userImg} alt="404" className={classes.followerUserImg} />
    <div className={classes.followerUserName}>some name</div>
    <button type="button" className={classes.followerUserBtn}>
      Seguir
    </button>
  </div>
);

export default FollowerItem;
