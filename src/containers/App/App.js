import React from 'react';

import classes from './App.module.css';
import EventCard from '../../components/EventCard/EventCard';

export default () => {
  return (
    <div className={classes.App}>
      <div className={classes.events__container}>
        <EventCard />
      </div>
      <div className={classes.side__content} />
    </div>
  );
};
