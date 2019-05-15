import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import isAfter from 'date-fns/is_after';

import NewEvent from '../../pages/NewEvent/NewEvent';
import { getEvent, updateEvent } from '../../store/actions/events';
import useInput from '../../hooks/useInput';
import checkFormValues from '../../lib/checkFormValues';
import setInputErrors from '../../lib/setinputErrors';
import {
  getCategories,
  getTypes,
  getRestrictions,
  getModalities,
} from '../../store/actions/poputateData';

const BasicInfo = ({
  match,
  getEvent,
  currentEvent,
  isLoading,
  updateEvent,
  getCategories,
  getTypes,
  getRestrictions,
  getModalities,
  selectData,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [bbar, setBbar] = useState(true);
  const [errors, setErrors] = useState({});
  const { values, onChangeHandler } = useInput({
    name: (currentEvent && currentEvent.name) || '',
    type: (currentEvent && currentEvent.type.id) || '',
    category: (currentEvent && currentEvent.category.id) || '',
    restriction: (currentEvent && currentEvent.restriction.id) || '',
    modality: (currentEvent && currentEvent.modality.id) || '',
    country: (currentEvent && currentEvent.country) || '',
    state: (currentEvent && currentEvent.state) || '',
    city: (currentEvent && currentEvent.city) || '',
    address1: '',
    address2: '',
  });

  const eventId = match.params.id;

  useEffect(() => {
    getCategories();
    getTypes();
    getRestrictions();
    getModalities();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getEvent(eventId);
  }, [eventId, getEvent]);

  // Validating the date
  const handleDateChange = ({ sd, ed }) => {
    sd = sd || startDate;
    ed = ed || endDate;

    if (isAfter(sd, ed)) {
      ed = sd;
    }

    setStartDate(sd);
    setEndDate(ed);
  };

  const handleChangeStart = sd => handleDateChange({ sd });
  const handleChangeEnd = ed => handleDateChange({ ed });

  const onSubmit = e => {
    const formValues = {
      ...values,
      start_date: startDate,
      finish_date: endDate,
      id: currentEvent.id,
    };
    e.preventDefault();
    if (checkFormValues(formValues)) {
      setErrors(setInputErrors(formValues));
    } else {
      updateEvent(formValues);
    }
  };

  return (
    <div style={{ padding: '5em 1em' }}>
      <NewEvent
        startDate={
          (currentEvent && new Date(currentEvent.start_date)) || new Date()
        }
        endDate={
          (currentEvent && new Date(currentEvent.finish_date)) || new Date()
        }
        setDateS={handleChangeStart}
        setDateE={handleChangeEnd}
        values={values}
        change={onChangeHandler}
        submit={onSubmit}
        bbar={bbar}
        errors={errors}
        loading={false || isLoading}
        selectsData={selectData}
      />
    </div>
  );
};

const mapStateToProps = ({ events, populateData }) => ({
  currentEvent: events.currentEvent,
  isLoading: events.isLoading,
  selectData: populateData,
});

export default connect(
  mapStateToProps,
  {
    getEvent,
    updateEvent,
    getCategories,
    getTypes,
    getRestrictions,
    getModalities,
  }
)(BasicInfo);
