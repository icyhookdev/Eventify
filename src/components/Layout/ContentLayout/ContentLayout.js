import React from 'react';
import classes from './ContentLayout.module.css';

const ContentLayout = ({ children, margin }) => (
  <div
    style={
      margin
        ? { marginTop: '7em', paddingTop: '1em', overflow: 'hidden' }
        : { marginTop: 0 }
    }
    className={classes.ContentLayout}
  >
    {children}
  </div>
);

export default ContentLayout;
