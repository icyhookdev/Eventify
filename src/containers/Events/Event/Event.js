import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import EventView from '../../../pages/EventView/EventView';
import { getEvent, signUpUserInEvent } from '../../../store/actions/events';
import Spinner from '../../../components/Loading/Spinner';

const Event = ({
  match,
  currentEvent,
  loading,
  getEvent,
  signUpUserInEvent,
}) => {
  useEffect(() => {
    getEvent(match.params.id);
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <EventView {...currentEvent} subUser={signUpUserInEvent} />
  );
};

const mapStateToProps = ({ events }) => ({
  loading: events.isLoading,
  currentEvent: events.currentEvent,
});

export default connect(
  mapStateToProps,
  { getEvent, signUpUserInEvent }
)(Event);
