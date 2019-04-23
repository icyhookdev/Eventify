import React from 'react';
import EventsCreated from './MyEventsCard/MyEventsCard';

const MyEventsCreated = ({ events }) => {
  const mapEvents =
    events && events.map(event => <EventsCreated key={event._id} {...event} />);
  return <div>{mapEvents}</div>;
};
export default MyEventsCreated;
