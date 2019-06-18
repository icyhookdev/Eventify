import React, { useState, useEffect } from 'react';
import classes from './EventDashboard.module.css';
import ProgressStepBar from '../../../components/ProgressStepBar/ProgressStepBar';
import TextHeader from '../../../components/TextHeader/TextHeader';
import infoIcon from '../../../assets/icons/exclamation.svg';

const EventDashboard = ({
  _id,
  publishEvent,
  publish_status,
  image,
  description,
  name,
  pins,
}) => {
  const [eventStatus, setEventStatus] = useState(['', '', '', '']);

  useEffect(() => {
    onCheckEventStatus();
  });

  const onCheckEventStatus = () => {
    const status = [...eventStatus];
    if (name) {
      status[0] = 'active';
    }

    if (image) {
      status[1] = 'active';
    }

    if (description) {
      status[2] = 'active';
    }

    if (pins && pins.length > 0) {
      status[3] = 'active';
    }

    setEventStatus(status);
  };

  return (
    <div className={classes.eventDashboard}>
      <TextHeader
        title="Progreso"
        description="Llega la barra al 100% para que puedas ser capaz de publicar tu evento."
        img={infoIcon}
      />
      <ProgressStepBar activeSteps={eventStatus} />
      <div className={classes.align_item}>
        {publish_status && publish_status === 'cancelled' ? (
          <button
            type="button"
            className={classes.button}
            onClick={() => publishEvent(_id, { status: 'draft' })}
          >
            Agregar a borrador
          </button>
        ) : (
          eventStatus[0] &&
          eventStatus[1] &&
          eventStatus[2] &&
          eventStatus[3] && (
            <button
              type="button"
              className={classes.button}
              onClick={() => publishEvent(_id, { status: 'published' })}
            >
              Publicar evento
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default EventDashboard;
