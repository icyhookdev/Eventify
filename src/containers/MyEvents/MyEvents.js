import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import MyEventsCreated from '../../pages/MyEventsCreated/MyEventsCreated';
import {
  getEvents,
  copyEvent,
  changeStatusEvent,
} from '../../store/actions/events';
import Loading from '../../components/Loading/Loading';

const MyEvents = ({
  getEvents,
  events,
  isLoading,
  copyEvent,
  changeStatusEvent,
}) => {
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

  const cancelledEvents = events.filter(
    event => event.publish_status === 'cancelled'
  );

  const onCopyEvent = async id => {
    await copyEvent(id);
    await getEvents();
  };

  const onCancellEvent = async (id, status) => {
    await changeStatusEvent(id, status);
    await getEvents();
  };

  return isLoading ? (
    <Loading msg="Cargando Eventos" />
  ) : (
    <MyEventsCreated
      onCopyEvent={onCopyEvent}
      liveEvents={liveEvents}
      pastEvents={pastEvents}
      onCancellEvent={onCancellEvent}
      draftEvents={draftEvents}
      cancelEvents={cancelledEvents}
    />
  );
};

const mapStateToProps = ({ events }) => ({
  events: events.userEvents,
  isLoading: events.isLoading,
});

export default connect(
  mapStateToProps,
  { getEvents, copyEvent, changeStatusEvent }
)(MyEvents);
