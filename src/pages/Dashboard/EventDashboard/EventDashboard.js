import React from 'react';
import classes from './EventDashboard.module.css';

const EventDashboard = ({ _id, publishEvent, publish_status }) => (
  <div>
    {publish_status && publish_status === 'cancelled' ? (
      <button
        type="button"
        className={classes.button}
        onClick={() => publishEvent(_id, { status: 'draft' })}
      >
        Agregar a borrador
      </button>
    ) : (
      <button
        type="button"
        className={classes.button}
        onClick={() => publishEvent(_id, { status: 'published' })}
      >
        Publicar evento
      </button>
    )}
  </div>
);

export default EventDashboard;
