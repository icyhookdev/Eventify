import React from 'react';
import { connect } from 'react-redux';

import {
  createPin,
  deleteDraftPinLocation,
} from '../../../../store/actions/pins';
import classes from './CreatePin.module.css';

const CreatePin = ({
  event,
  createPin,
  draft,
  deleteDraftPinLocation,
  currentEventPins,
}) => {
  const handleDeleteDraft = () => {
    deleteDraftPinLocation();
  };

  const handleSubmit = async e => {
    e.preventDefault();

    let pin = {};

    if (event.image) {
      pin = {
        event: event._id,
        title: event.name,
        image: event.image,
        ...draft,
      };
    } else {
      pin = {
        event: event._id,
        title: event.name,
        ...draft,
      };
    }

    createPin(pin, currentEventPins);
  };

  return (
    <div className={classes.contianer}>
      <div className={classes.title}>
        Quieres tomar este lugar como ubicacion principal del evento?
      </div>
      <form>
        <button
          type="button"
          className={classes.buttonX}
          onClick={handleDeleteDraft}
        >
          No
        </button>
        <button
          type="submit"
          className={classes.buttonY}
          onClick={handleSubmit}
        >
          Si
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ pins, events }) => ({
  draft: pins.draft,
  event: events.currentEvent,
  currentEventPins: pins.currentEventPins,
});

export default connect(
  mapStateToProps,
  { createPin, deleteDraftPinLocation }
)(CreatePin);
