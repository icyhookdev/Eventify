import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import MyEventsCreated from '../../pages/MyEventsCreated/MyEventsCreated';
import { getEvents } from '../../store/actions/events';
import Loading from '../../components/Loading/Loading';

const MyEvents = ({ getEvents, events, isLoading }) => {
  useEffect(() => {
    getEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return isLoading ? (
    <Loading msg="Cargando Eventos" />
  ) : (
    <MyEventsCreated events={events} />
  );
};

const mapStateToProps = ({ events }) => ({
  events: events.userEvents,
  isLoading: events.isLoading,
});

export default connect(
  mapStateToProps,
  { getEvents }
)(MyEvents);
