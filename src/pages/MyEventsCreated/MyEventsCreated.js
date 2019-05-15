import React, { useState } from 'react';

import classes from './MyEventsCreated.module.css';
import EventsCreated from './MyEventsCard/MyEventsCard';

const MyEventsCreated = ({ events }) => {
  const [tab, setTab] = useState('draft');

  const mapEvents =
    events && events.map(event => <EventsCreated key={event._id} {...event} />);
  return (
    <div className={classes.EventsCreated}>
      <div className={classes.subtitle}>Mis Eventos</div>
      <div className={classes.tab}>
        <button
          type="button"
          onClick={() => setTab('live')}
          className={[
            classes.button_tab,
            tab === 'live' ? classes.active_tab : '',
          ].join(' ')}
        >
          Activos 0
        </button>
        <button
          type="button"
          onClick={() => setTab('draft')}
          className={[
            classes.button_tab,
            tab === 'draft' ? classes.active_tab : '',
          ].join(' ')}
        >
          Borrador 0
        </button>
        <button
          type="button"
          onClick={() => setTab('past')}
          className={[
            classes.button_tab,
            tab === 'past' ? classes.active_tab : '',
          ].join(' ')}
        >
          Pasados 0
        </button>
      </div>
      <div
        className={classes.tab_content}
        style={tab === 'draft' ? { display: 'grid' } : { display: 'none' }}
      >
        {mapEvents}
      </div>
      <div
        className={classes.tab_content}
        style={tab === 'live' ? { display: 'grid' } : { display: 'none' }}
      >
        {mapEvents}
        {mapEvents}
      </div>
      <div
        className={classes.tab_content}
        style={tab === 'past' ? { display: 'grid' } : { display: 'none' }}
      >
        {mapEvents}
        {mapEvents}
        {mapEvents}
      </div>
    </div>
  );
};
export default MyEventsCreated;
