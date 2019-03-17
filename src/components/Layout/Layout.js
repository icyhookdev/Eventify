import React from 'react';

import classes from './Layout.module.css';

const Layout = ({ children }) => (
  <div className={classes.Layout}>{children}</div>
);

export default Layout;
