import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import EventView from '../../../pages/EventView/EventView';
import {
  getEvent,
  signUpUserInEvent,
  signOutUserFromEvent,
} from '../../../store/actions/events';
import Spinner from '../../../components/Loading/Spinner';

const Event = ({
  match,
  currentEvent,
  loading,
  getEvent,
  signUpUserInEvent,
  meUser,
  signOutUserFromEvent,
}) => {
  useEffect(() => {
    getEvent(match.params.id);
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <EventView
      {...currentEvent}
      meUser={meUser}
      unSubUser={signOutUserFromEvent}
      subUser={signUpUserInEvent}
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
