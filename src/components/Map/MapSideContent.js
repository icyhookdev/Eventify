import React from 'react';

import classes from './MapSideContent.module.css';
import NoContent from './Pin/NoContent/NoContent';
import CreatePin from './Pin/CreatePin/CreatePin';
// import Context from '../context';
// import NoContent from './Pin/NoContent';
// import CreatePin from './Pin/CreatePin';
// import PinContent from './Pin/PinContent';

const MapSideContent = ({ draft, currentPin }) => {
  // const { state } = useContext(Context);
  // const { draft, currentPin } = state;

  let MapContent;

  if (!draft && !currentPin) {
    MapContent = NoContent;
  } else if (draft && !currentPin) {
    MapContent = CreatePin;
  }

  return (
    <div className={classes.sideMapContent}>
      <MapContent />
      {/* {MapContent} */}
    </div>
  );
};

export default MapSideContent;
