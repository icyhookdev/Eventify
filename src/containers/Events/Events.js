import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './Events.module.css';
import EventCard from '../../components/EventCard/EventCard';
// import Aside from '../../components/Aside/Aside';
import { setUser } from '../../store/actions/authentication';
import Map from '../../components/Map/Map';

const Events = ({ history, setUser }) => {
  useEffect(() => {
    setUser();
  }, [setUser]);
  return (
    <div className={classes.Events}>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      {/* <Map /> */}
    </div>
  );
};

export default connect(
  null,
  { setUser }
)(Events);
