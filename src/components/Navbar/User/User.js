import React from 'react';
import { connect } from 'react-redux';

import classes from './User.module.css';
import profileImg from '../../../assets/img/profileImg.png';

const User = ({ user }) => (
  <div className={classes.User}>
    <div className={classes.User__img}>
      <img src={(user && user.avatar) || profileImg} alt="404" />
    </div>
    <h2 className={classes.User__name}>{user && user.name}</h2>
    <p className={classes.User__description}>{user && user.aboutMe}</p>
  </div>
);

const mapStateToProps = ({ auth }) => ({ user: auth.user });

export default connect(
  mapStateToProps,
  {}
)(User);
