import React from 'react';

import classes from './MapSideContent.module.css';
import NoContent from './Pin/NoContent/NoContent';
import CreatePin from './Pin/CreatePin/CreatePin';

const MapSideContent = ({ draft, currentPin }) => {
  let MapContent;

  if (!draft && !currentPin) {
    MapContent = NoContent;
  } else if (draft && !currentPin) {
    MapContent = CreatePin;
  }
  return (
    <div className={classes.sideMapContent}>
      <MapContent />
    </div>
  );
};

export default MapSideContent;
