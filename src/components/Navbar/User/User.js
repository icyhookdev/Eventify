import React from 'react';
import { connect } from 'react-redux';

import userImg from '../../../assets/img/user.jpg';
import classes from './User.module.css';

const User = ({ user }) => (
  <div className={classes.User}>
    <div className={classes.User__img}>
      <img src={user && user.avatar} alt="404" />
    </div>
    <h2 className={classes.User__name}>{user && user.name}</h2>
    <p className={classes.User__description}>
      Front-end Web Developer and React Developer
    </p>
  </div>
);

const mapStateToProps = ({ auth }) => ({ user: auth.user });

export default connect(
  mapStateToProps,
  {}
)(User);
