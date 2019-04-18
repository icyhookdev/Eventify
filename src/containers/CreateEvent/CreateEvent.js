import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './CreateEvent.module.css';
import NewEvent from '../../components/NewEvent/NewEvent';
import useInput from '../../hooks/useInput';
import checkInitialValues from '../../lib/checkInitialValues';
import checkFormValues from '../../lib/checkFormValues';
import { saveEvent } from '../../store/actions/events';

const CreateEvent = ({ saveEvent }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [bbar, setBbar] = useState(false);
  const [errors, setErrors] = useState({});
  const { values, onChangeHandler, setValues } = useInput({
    name: '',
    type: '',
    category: '',
    restriction: '',
    place: '',
    country: '',
    state: '',
    city: '',
    address1: '',
    address2: '',
  });

  useEffect(() => {
    if (checkInitialValues(values)) {
      setBbar(true);
    }
  }, [values]);

  const onSubmit = e => {
    e.preventDefault();
    if (checkFormValues(values)) {
      console.log('formInvalid');
    } else {
      saveEvent(values);
    }
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
export default connect(
  null,
  { saveEvent }
)(CreateEvent);
