import React from 'react';

import classes from './MyEventsCreated.module.css';
import EventsCreated from './MyEventsCard/MyEventsCard';

const MyEventsCreated = ({ events }) => {
  const mapEvents =
    events && events.map(event => <EventsCreated key={event._id} {...event} />);
  return <div className={classes.EventsCreated}>{mapEvents}</div>;
};
export default MyEventsCreated;
