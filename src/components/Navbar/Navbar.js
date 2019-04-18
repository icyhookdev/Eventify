import React from 'react';

import classes from './Navbar.module.css';
import User from './User/User';
import Nav from './Nav/Nav';

const Navbar = () => (
  <div className={classes.Navbar}>
    <div className={classes.nav__container}>
      <div className={classes.nav__logo}>Toastr</div>
      <User />
      <Nav />
    </div>
  </div>
);

export default Navbar;
