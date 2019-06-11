import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './Events.module.css';
import EventCard from '../../components/EventCard/EventCard';
// import Aside from '../../components/Aside/Aside';
import { setUser } from '../../store/actions/authentication';
import { getEventsPublished } from '../../store/actions/events';
// import Map from '../../components/Map/Map';

const Events = ({ history, setUser, getEventsPublished, events, userMe }) => {
  const eventsPublished =
    events &&
    events.map(event => (
      <EventCard key={event._id} {...event} userMe={userMe} />
    ));

  useEffect(() => {
    setUser();
  }, [setUser]);

  useEffect(() => {
    getEventsPublished('1');
  }, [getEventsPublished]);
  return (
    <div className={classes.Events}>
      {eventsPublished}

      {/* <Map /> */}
    </div>
  );
};

const mapStateToProps = ({ events, auth }) => ({
  userMe: auth.user,
  events: events.publishedEvents,
});

export default connect(
  mapStateToProps,
  { setUser, getEventsPublished }
)(Events);
