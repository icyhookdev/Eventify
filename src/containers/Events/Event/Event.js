import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import EventView from '../../../pages/EventView/EventView';
import {
  getEvent,
  signUpUserInEvent,
  signOutUserFromEvent,
} from '../../../store/actions/events';
import Spinner from '../../../components/Loading/Spinner';
import checkGuests from '../../../lib/checkUserEventInscription';

const Event = ({
  match,
  currentEvent,
  loading,
  getEvent,
  signUpUserInEvent,
  meUser,
  signOutUserFromEvent,
}) => {
  const [signUp, setSignUp] = useState(false);

  useEffect(() => {
    getEvent(match.params.id);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    isUserSignUpInEvent();
    // eslint-disable-next-line
  }, [currentEvent]);

  const isUserSignUpInEvent = async () => {
    if (currentEvent && currentEvent.guests) {
      console.log(currentEvent.guests);
      const isUser = await checkGuests(currentEvent.guests, meUser._id);
      if (isUser) {
        setSignUp(false);
      } else {
        setSignUp(true);
      }
    }
  };

  console.log(signUp);

  return loading ? (
    <Spinner />
  ) : (
    <EventView
      {...currentEvent}
      meUser={meUser}
      unSubUser={signOutUserFromEvent}
      subUser={signUpUserInEvent}
      isSignUp={signUp}
    />
  );
};

const mapStateToProps = ({ events, auth }) => ({
  loading: events.isLoading,
  currentEvent: events.currentEvent,
  meUser: auth.user,
});

export default connect(
  mapStateToProps,
  { getEvent, signUpUserInEvent, signOutUserFromEvent }
)(Event);
