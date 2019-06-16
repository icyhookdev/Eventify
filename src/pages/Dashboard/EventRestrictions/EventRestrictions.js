import React from 'react';

import classes from './EventRestrictions.module.css';
import TextHeader from '../../../components/TextHeader/TextHeader';
import deniedIco from '../../../assets/icons/denied.svg';
import Checkbox from '../../../components/Checkbox/Checkbox';

const EventRestrictions = () => (
  <div className={classes.EventRestrictions}>
    <TextHeader
      title="Restricciones del evento"
      img={deniedIco}
      description="Agrega restricciones al evento para un publico en especifico solo pueda asistir a el."
    />
    <div className={classes.align__content}>
      <Checkbox text="Activar restricciones" />
    </div>
  </div>
);

export default EventRestrictions;
