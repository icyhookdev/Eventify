import React from 'react';
import classes from './EventDashboard.module.css';

const EventDashboard = ({ eventId, publishEvent }) => (
  <button
    type="button"
    className={classes.button}
    onClick={() => publishEvent(eventId, { status: 'published' })}
  >
    Publicar Evento
  </button>
);

export default EventDashboard;
