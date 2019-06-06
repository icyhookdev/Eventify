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

  const draftEvents = events.filter(event => event.publish_status === 'draft');
  const liveEvents = events.filter(
    event => event.publish_status === 'published'
  );
  const pastEvents = events.filter(
    event => event.publish_status === 'finished'
  );

  return isLoading ? (
    <Loading msg="Cargando Eventos" />
  ) : (
    <MyEventsCreated
      liveEvents={liveEvents}
      pastEvents={pastEvents}
      draftEvents={draftEvents}
    />
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
