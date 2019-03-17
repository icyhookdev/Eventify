import React from 'react';

import userImg from '../../../assets/img/user.jpg';
import classes from './User.module.css';

const User = () => (
  <div className={classes.User}>
    <div className={classes.User__img}>
      <img src={userImg} alt="404" />
    </div>
    <h2 className={classes.User__name}>Cristihan</h2>
    <p className={classes.User__description}>
      Front-end Web Developer and React Developer
    </p>
  </div>
);

export default User;
