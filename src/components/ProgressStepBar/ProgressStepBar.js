import React from 'react';

import classes from './ProgressStepBar.module.css';

const ProgressStepBar = ({ activeSteps }) => {
  const onActiveSteps = () =>
    activeSteps.map((activeStep, i) => {
      if (activeStep === 'active') {
        return (
          <li key={i} className={classes.active}>
            {25 * (i + 1)}%
          </li>
        );
      }
      return <li key={i}>{25 * (i + 1)}%</li>;
    });

  return <ul className={classes.progress_bar}>{onActiveSteps()}</ul>;
};

export default ProgressStepBar;
