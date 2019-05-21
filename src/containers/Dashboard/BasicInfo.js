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
  getCountries,
} from '../../store/actions/poputateData';
import checkInitialValues from '../../lib/checkInitialValues';

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
  getCountries,
}) => {
  const [startDate, setStartDate] = useState(
    (currentEvent && new Date(currentEvent.start_date)) || new Date()
  );
  const [endDate, setEndDate] = useState(
    (currentEvent && new Date(currentEvent.finish_date)) || new Date()
  );
  const [bbar, setBbar] = useState(false);
  const [loading, setLoading] = useState(false);
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
    address1: (currentEvent && currentEvent.address[0].description) || '',
    address2: (currentEvent && currentEvent.address[1].description) || '',
  });

  const eventId = match.params.id;

  useEffect(() => {
    getCategories();
    getTypes();
    getRestrictions();
    getModalities();
    getCountries();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (checkInitialValues(values)) {
      setBbar(true);
    }
  }, [values]);

  useEffect(() => {
    getEvent(eventId);
    console.log('render');
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

  const onSubmit = async e => {
    e.preventDefault();

    const formValues = {
      name: values.name,
      type: values.type,
      category: values.category,
      restriction: values.restriction,
      modality: values.modality,
      country: values.country,
      state: values.state,
      city: values.city,
      address: [
        { description: values.address1 },
        { description: values.address2 },
      ],
      start_date: startDate,
      finish_date: endDate,
      id: currentEvent.id,
    };

    if (checkFormValues(formValues)) {
      setErrors(setInputErrors(formValues));
      return;
    }

    setLoading(true);

    try {
      await updateEvent(formValues);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '5em 1em' }}>
      <NewEvent
        startDate={startDate}
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
    getCountries,
  }
)(BasicInfo);
