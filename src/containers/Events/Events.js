import React from 'react';
import classes from './Events.module.css';
import EventCard from '../../components/EventCard/EventCard';
import Aside from '../../components/Aside/Aside';

const Events = () => (
  <div className={classes.Events}>
    <div className={classes.Events__container}>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
    <div className={classes.aside}>
      <Aside />
    </div>
  </div>
);

export default Events;
