import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import EventPrivacy from '../../pages/Dashboard/EventPrivacy/EventPrivacy';
import checkInitialValues from '../../lib/checkInitialValues';
import { updateEvent } from '../../store/actions/events';

const Privacy = ({ updateEvent, currentEvent, isLoading }) => {
  const [values, setValues] = useState({
    private: (currentEvent && currentEvent.private) || false,
    allowInvitations: (currentEvent && currentEvent.allowInvitations) || false,
  });

  const [bbar, setBbar] = useState(false);

  useEffect(() => {
    if (checkInitialValues(values)) {
      setBbar(true);
    }
  }, [values]);

  const onChangeOnChecked = e => {
    const { name, checked } = e.target;
    setValues({ ...values, [name]: checked });
  };

  const onSubmit = e => {
    e.preventDefault();

    const formValues = {
      ...values,
      id: currentEvent && currentEvent._id,
    };
    console.log(formValues);
    updateEvent(formValues);
  };

  return (
    <EventPrivacy
      bbar={bbar}
      values={values}
      onChange={onChangeOnChecked}
      submit={onSubmit}
      loading={isLoading}
    />
  );
};

const mapStateToProps = ({ events }) => ({
  currentEvent: events.currentEvent,
  isLoading: events.isLoading,
});

export default connect(
  mapStateToProps,
  { updateEvent }
)(Privacy);
