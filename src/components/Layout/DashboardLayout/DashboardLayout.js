import React from 'react';

import classes from './DashboardLayout.module.css';

const DashboardLayout = ({ children }) => (
  <div className={classes.DashboardLayout}>{children}</div>
);

export default DashboardLayout;
