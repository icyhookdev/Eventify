import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import isAfter from 'date-fns/is_after';

import NewEvent from '../../pages/NewEvent/NewEvent';
import { getEvent, updateEvent } from '../../store/actions/events';
import useInput from '../../hooks/useInput';
import checkFormValues from '../../lib/checkFormValues';
import setInputErrors from '../../lib/setinputErrors';

const BasicInfo = ({
  match,
  getEvent,
  currentEvent,
  isLoading,
  updateEvent,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [bbar, setBbar] = useState(true);
  const [errors, setErrors] = useState({});
  const { values, onChangeHandler } = useInput({
    name: (currentEvent && currentEvent.name) || '',
    type: (currentEvent && currentEvent.type) || '',
    category: (currentEvent && currentEvent.category) || '',
    restriction: (currentEvent && currentEvent.restriction) || '',
    modality: (currentEvent && currentEvent.modality) || '',
    country: (currentEvent && currentEvent.country) || '',
    state: (currentEvent && currentEvent.state) || '',
    city: (currentEvent && currentEvent.city) || '',
    address1: '',
    address2: '',
  });

  const eventId = match.params.id;

  useEffect(() => {
    getEvent(eventId);
  }, [eventId, getEvent]);

  console.log('hi');

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
    };
    e.preventDefault();
    if (checkFormValues(formValues)) {
      setErrors(setInputErrors(formValues));
    } else {
      updateEvent(currentEvent.id, formValues);
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
      />
    </div>
  );
};

const mapStateToProps = ({ events }) => ({
  currentEvent: events.currentEvent,
  isLoading: events.isLoading,
});

export default connect(
  mapStateToProps,
  { getEvent, updateEvent }
)(BasicInfo);
