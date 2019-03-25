import React from 'react';

import classes from './CreateEvent.module.css';
import NewEvent from '../../components/NewEvent/NewEvent';

const CreateEvent = () => (
  <div className={classes.CreateEvent}>
    <NewEvent />
  </div>
);
export default CreateEvent;
