import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import MyEventsCreated from '../../components/MyEventsCreated/MyEventsCreated';
import { getEvent } from '../../store/actions/events';

const MyEvents = ({ getEvent, events }) => {
  useEffect(() => {
    getEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <MyEventsCreated events={events} />;
  // return <h1>hi</h1>;
};

const mapStateToProps = ({ events }) => ({ events: events.userEvents });

export default connect(
  mapStateToProps,
  { getEvent }
)(MyEvents);
