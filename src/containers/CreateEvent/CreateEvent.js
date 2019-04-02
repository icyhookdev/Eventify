import React, { useState } from 'react';

import classes from './CreateEvent.module.css';
import NewEvent from '../../components/NewEvent/NewEvent';

const CreateEvent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className={classes.CreateEvent}>
      <NewEvent
        startDate={startDate}
        endDate={endDate}
        setDateS={setStartDate}
        setDateE={setEndDate}
      />
    </div>
  );
};
export default CreateEvent;
