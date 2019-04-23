import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './CreateEvent.module.css';
import NewEvent from '../../components/NewEvent/NewEvent';
import useInput from '../../hooks/useInput';
import checkInitialValues from '../../lib/checkInitialValues';
import checkFormValues from '../../lib/checkFormValues';
import { saveEvent } from '../../store/actions/events';
import setInputErrors from '../../lib/setinputErrors';

const CreateEvent = ({ saveEvent, loading }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [bbar, setBbar] = useState(false);
  const [errors, setErrors] = useState({});
  const { values, onChangeHandler } = useInput({
    name: '',
    type: '',
    category: '',
    restriction: '',
    modality: '',
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
    const formValues = {
      ...values,
      start_date: startDate,
      finish_date: endDate,
      host: localStorage.getItem('user'),
    };
    e.preventDefault();
    if (checkFormValues(formValues)) {
      setErrors(setInputErrors(formValues));
    } else {
      saveEvent(formValues);
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
        errors={errors}
        loading={loading}
      />
    </div>
  );
};

const mapStateToProps = ({ events }) => ({ loading: events.isLoading });

export default connect(
  mapStateToProps,
  { saveEvent }
)(CreateEvent);
