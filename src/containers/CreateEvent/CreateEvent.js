import React, { useState, useEffect } from 'react';

import classes from './CreateEvent.module.css';
import NewEvent from '../../components/NewEvent/NewEvent';
import useInput from '../../hooks/useInput';
import checkInitialValues from '../../lib/checkInitialValues';

const CreateEvent = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [bbar, setBbar] = useState(false);
  const { values, onChangeHandler } = useInput({
    name: '',
    type: '',
    category: '',
    restriction: '',
    place: '',
    country: '',
    state: '',
    city: '',
  });

  useEffect(() => {
    if (checkInitialValues(values)) {
      setBbar(true);
    }
  }, [values]);

  const onSubmit = e => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className={classes.CreateEvent}>
      <NewEvent
        startDate={startDate}
        endDate={endDate}
        setDateS={setStartDate}
        setDateE={setEndDate}
        values={values}
        change={onChangeHandler}
        submit={onSubmit}
        bbar={bbar}
      />
    </div>
  );
};
export default CreateEvent;
