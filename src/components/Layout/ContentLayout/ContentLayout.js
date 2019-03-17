import React from 'react';
import classes from './ContentLayout.module.css';

const ContentLayout = ({ children }) => (
  <div className={classes.ContentLayout}>{children}</div>
);

export default ContentLayout;
