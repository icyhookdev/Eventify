import React from 'react';

import classes from './App.module.css';
import EventCard from '../../components/EventCard/EventCard';

const App = () => (
  <div className={classes.App}>
    <div className={classes.events__container}>
      <EventCard />
      <EventCard />
    </div>
    <div className={classes.side__content}>
      <h1>some content here</h1>
    </div>
  </div>
);

export default App;
