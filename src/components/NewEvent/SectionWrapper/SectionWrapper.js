import React from 'react';
import classes from './SectionWrapper.module.css';

const SectionWrapper = ({ children }) => (
  <section className={classes.SectionWrapper}>{children}</section>
);

export default SectionWrapper;
