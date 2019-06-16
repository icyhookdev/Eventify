import React, { useState } from 'react';

import classes from './MyEventsCreated.module.css';
import EventsCreated from './MyEventsCard/MyEventsCard';

const MyEventsCreated = ({
  liveEvents,
  pastEvents,
  draftEvents,
  onCopyEvent,
  onCancellEvent,
  cancelEvents,
}) => {
  const [tab, setTab] = useState('live');

  const drafts =
    draftEvents &&
    draftEvents.map(event => (
      <EventsCreated key={event._id} {...event} copyEvent={onCopyEvent} />
    ));
  const lives =
    liveEvents &&
    liveEvents.map(event => (
      <EventsCreated
        key={event._id}
        {...event}
        copyEvent={onCopyEvent}
        cancelEvent={onCancellEvent}
      />
    ));
  const pasts =
    pastEvents &&
    pastEvents.map(event => (
      <EventsCreated key={event._id} {...event} copyEvent={onCopyEvent} />
    ));

  const cancelled =
    cancelEvents &&
    cancelEvents.map(event => (
      <EventsCreated key={event._id} {...event} copyEvent={onCopyEvent} />
    ));

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
          Activos {lives.length}
        </button>
        <button
          type="button"
          onClick={() => setTab('draft')}
          className={[
            classes.button_tab,
            tab === 'draft' ? classes.active_tab : '',
          ].join(' ')}
        >
          Borrador {drafts.length}
        </button>
        <button
          type="button"
          onClick={() => setTab('past')}
          className={[
            classes.button_tab,
            tab === 'past' ? classes.active_tab : '',
          ].join(' ')}
        >
          Pasados {pasts.length}
        </button>
        <button
          type="button"
          onClick={() => setTab('cancelled')}
          className={[
            classes.button_tab,
            tab === 'cancelled' ? classes.active_tab : '',
          ].join(' ')}
        >
          Cancelados {cancelled.length}
        </button>
      </div>
      <div
        className={classes.tab_content}
        style={tab === 'draft' ? { display: 'grid' } : { display: 'none' }}
      >
        {drafts}
      </div>
      <div
        className={classes.tab_content}
        style={tab === 'live' ? { display: 'grid' } : { display: 'none' }}
      >
        {lives}
      </div>
      <div
        className={classes.tab_content}
        style={tab === 'past' ? { display: 'grid' } : { display: 'none' }}
      >
        {pasts}
      </div>
      <div
        className={classes.tab_content}
        style={tab === 'cancelled' ? { display: 'grid' } : { display: 'none' }}
      >
        {cancelled}
      </div>
    </div>
  );
};
export default MyEventsCreated;
