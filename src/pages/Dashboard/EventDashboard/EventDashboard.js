import React from 'react';
import classes from './EventDashboard.module.css';

const EventDashboard = ({ eventId, publishEvent }) => (
  <button
    type="button"
    className={classes.button}
    onClick={() => publishEvent({ publish_status: 'published', id: eventId })}
  >
    Publicar Evento
  </button>
);

export default EventDashboard;
