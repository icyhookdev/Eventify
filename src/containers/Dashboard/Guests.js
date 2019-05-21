import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import EventGuests from '../../pages/Dashboard/EventGuests/EventGuests';
import { createEventGuests, getEventGuests } from '../../store/actions/events';
import Invite from '../../components/Invite/Invite';
import checkInitialValues from '../../lib/checkInitialValues';

const Guests = ({ match, createEventGuests, getEventGuests }) => {
  const [guests, setGuests] = useState([]);
  const [bbar, setBbar] = useState(false);
  const [values, setValues] = useState({ email: '' });
  const [error, setError] = useState('');

  const draftGuest =
    guests &&
    guests.map((guest, i) => (
      <Invite text={guest} key={i} remove={() => onRemoveEmailFromDraft(i)} />
    ));

  useEffect(() => {
    getEventGuests(match.params.id);
    if (checkInitialValues(values)) {
      setBbar(true);
    }
  }, [getEventGuests, match.params.id, values]);

  const onChangeHandler = e => {
    const { name, value } = e.target;

    setValues({ [name]: value });

    const emailRgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let error = '';

    switch (name) {
      case 'email':
        error = !emailRgx.test(value) ? 'Este no es un email valido' : '';
        break;
      default:
    }

    setError(error);
  };

  const onAddEmailToDraft = () => {
    const newGuests = [...guests, values.email];

    if (!values.email) {
      setError('Por favor ingrese un correo');
      return;
    }

    setGuests(newGuests);
    setValues({ ...values, email: '' });
  };

  const onRemoveEmailFromDraft = email => {
    const currentGuests = [...guests];

    currentGuests.splice(email, 1);
    setGuests(currentGuests);
  };

  const onRegisterGuests = e => {
    e.preventDefault();
    const emails = {
      event: match.params.id,
      emails: guests,
    };

    createEventGuests(emails);
    setGuests([]);
  };

  return (
    <EventGuests
      onChangeEmail={onChangeHandler}
      onAddEmail={onAddEmailToDraft}
      guests={draftGuest}
      values={values}
      error={error}
      bbar={bbar}
      registerGuests={onRegisterGuests}
    />
  );
};

export default connect(
  null,
  { createEventGuests, getEventGuests }
)(Guests);
