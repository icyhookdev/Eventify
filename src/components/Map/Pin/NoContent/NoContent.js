import React from 'react';

import classes from './NoContent.module.css';
import ExplorerIcon from '../../../icons/ExplorerIcon';

const NoContent = () => (
  <div className={classes.NoContent}>
    <div className={classes.IconContainer}>
      <ExplorerIcon size="80px" />
    </div>
    <div className={classes.title}>
      Has Click en el mapa para agregar la ubicacion del evento.
    </div>
  </div>
);

export default NoContent;
