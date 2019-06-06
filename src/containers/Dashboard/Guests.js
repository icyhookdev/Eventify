import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import EventGuests from '../../pages/Dashboard/EventGuests/EventGuests';
import { createEventGuests, getEventGuests } from '../../store/actions/events';
import Invite from '../../components/Invite/Invite';
import checkInitialValues from '../../lib/checkInitialValues';

const Guests = ({ match, createEventGuests, getEventGuests, invitations }) => {
  const [guests, setGuests] = useState([]);
  const [bbar, setBbar] = useState(false);
  const [values, setValues] = useState({ email: '' });
  const [error, setError] = useState('');

  const draftGuest =
    guests &&
    guests.map((guest, i) => (
      <Invite text={guest} key={i} remove={() => onRemoveEmailFromDraft(i)} />
    ));

  // TODO: make a tab for pending, accepted and rejected guest's invitations
  const guestsRequested =
    invitations &&
    invitations.map(invitation => (
      <Invite
        key={invitation.id}
        text={invitation.id}
        requested
        status={invitation.status}
      />
    ));

  useEffect(() => {
    getEventGuests(match.params.id);
  }, [getEventGuests, match.params.id]);

  useEffect(() => {
    if (checkInitialValues(values)) {
      setBbar(true);
    }
  }, [values]);

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
      invitations={guestsRequested}
      registerGuests={onRegisterGuests}
    />
  );
};

const mapStateToProps = ({ events }) => ({ invitations: events.guests });

export default connect(
  mapStateToProps,
  { createEventGuests, getEventGuests }
)(Guests);
