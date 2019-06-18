import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import isAfter from 'date-fns/is_after';
import moment from 'moment';

import classes from './CreateEvent.module.css';
import NewEvent from '../../pages/NewEvent/NewEvent';
import useInput from '../../hooks/useInput';
import checkInitialValues from '../../lib/checkInitialValues';
import checkFormValues from '../../lib/checkFormValues';
import { saveEvent } from '../../store/actions/events';
import {
  getCategories,
  getTypes,
  getModalities,
  getCountries,
  getStatesByCountry,
} from '../../store/actions/poputateData';
import setInputErrors from '../../lib/setinputErrors';

const CreateEvent = ({
  saveEvent,
  loading,
  getCategories,
  getTypes,
  getModalities,
  selectData,
  getCountries,
  getStatesByCountry,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(moment());
  const [endDate, setEndDate] = useState(new Date());
  const [endTime, setEndTime] = useState(moment());
  const [bbar, setBbar] = useState(false);
  const [errors, setErrors] = useState({});
  const { values, onChangeHandler } = useInput({
    name: '',
    type: '',
    category: '',
    modality: '',
    country: '',
    state: '',
    city: '',
    address1: '',
    address2: '',
  });

  useEffect(() => {
    getCategories();
    getTypes();
    getCountries();
    getModalities();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (checkInitialValues(values)) {
      setBbar(true);
    }
  }, [values]);

  useEffect(() => {
    if (values.country) {
      getStatesByCountry(values.country);
    }
    // eslint-disable-next-line
  }, [values.country]);

  const handleDateChange = ({ sd, ed }) => {
    sd = sd || startDate;
    ed = ed || endDate;

    if (isAfter(sd, ed)) {
      ed = sd;
    }

    setStartDate(sd);
    setEndDate(ed);
  };

  const onChangeStartTime = time => setStartTime(time);
  const onChangeEndTime = time => setEndTime(time);

  const handleChangeStart = sd => handleDateChange({ sd });
  const handleChangeEnd = ed => handleDateChange({ ed });

  const setTimeToDate = () => {
    const sd = startDate;

    sd.setHours(moment(startTime).format('HH'));
    sd.setMinutes(moment(startTime).format('MM'));

    const ed = endDate;
    ed.setHours(moment(endTime).format('HH'));
    ed.setMinutes(moment(endTime).format('MM'));

    return {
      sd,
      ed,
    };
  };

  const onSubmit = e => {
    e.preventDefault();
    const formValuesCheck = {
      name: values.name,
      type: values.type,
      // category: values.category,

      modality: values.modality,
      country: values.country,
      state: values.state,
      city: values.city,
      start_date: startDate,
      address1: values.address1,
      address2: values.address2,
      finish_date: endDate,

      host: localStorage.getItem('user'),
    };

    if (checkFormValues(formValuesCheck)) {
      setErrors(setInputErrors(formValuesCheck));
    } else {
      const { sd, ed } = setTimeToDate();

      if (isAfter(sd, ed)) {
        setErrors({
          ...errors,
          finish_date: 'La fecha final no puede ser mayor a la inicial',
        });
        return;
      }

      const formValues = {
        name: values.name,
        type: values.type,
        // category: values.category,
        modality: values.modality,
        country: values.country,
        state: values.state,
        city: values.city,
        start_date: sd,
        finish_date: ed,
        address: [
          { description: values.address1 },
          { description: values.address2 },
        ],
        host: localStorage.getItem('user'),
      };
      saveEvent(formValues);
    }
  };

  return (
    <div className={classes.CreateEvent}>
      <NewEvent
        startDate={startDate}
        startTime={startTime}
        setStartT={onChangeStartTime}
        setEndT={onChangeEndTime}
        endTime={endTime}
        endDate={endDate}
        setDateS={handleChangeStart}
        setDateE={handleChangeEnd}
        values={values}
        change={onChangeHandler}
        submit={onSubmit}
        bbar={bbar}
        errors={errors}
        loading={loading}
        selectsData={selectData}
      />
    </div>
  );
};

const mapStateToProps = ({ events, populateData }) => ({
  loading: events.isLoading,
  selectData: populateData,
});

export default connect(
  mapStateToProps,
  {
    saveEvent,
    getCategories,
    getTypes,

    getModalities,
    getCountries,
    getStatesByCountry,
  }
)(CreateEvent);
