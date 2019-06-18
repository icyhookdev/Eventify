import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import EventDetails from '../../pages/Dashboard/EventDetails/EventDetails';
import useInput from '../../hooks/useInput';
import checkInitialValues from '../../lib/checkInitialValues';
import { updateEventImg, updateEvent } from '../../store/actions/events';
import { getEventPins } from '../../store/actions/pins';

const Details = ({
  updateEventImg,
  currentEvent,
  updateEvent,
  match,
  getEventPins,
}) => {
  const [file, setFile] = useState(
    (currentEvent && currentEvent.image) || null
  );
  const [bbar, setBbar] = useState(false);
  const { values, onChangeHandler } = useInput({
    description: (currentEvent && currentEvent.description) || '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getEventPins(match.params.id);
  }, [getEventPins, match.params.id]);

  useEffect(() => {
    if (checkInitialValues(values)) {
      setBbar(true);
    }
  }, [values]);

  const onDropHandler = file => setFile(file[0]);
  const onRemoveImgHandler = () => setFile(null);

  const showImg = () => {
    if (typeof file === 'string') {
      return file;
    }
    if (!file) {
      return null;
    }

    return file.preview;
  };

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const formValues = {
      ...values,
      id: currentEvent._id,
    };

    try {
      await updateEvent(formValues);

      if (file) {
        await updateEventImg(currentEvent._id, file);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  return (
    <EventDetails
      onDrop={onDropHandler}
      img={showImg}
      onRemove={onRemoveImgHandler}
      values={values}
      onChange={onChangeHandler}
      bbar={bbar}
      loading={loading}
      submit={onSubmit}
      eventId={match.params.id}
    />
  );
};

const mapStateToProps = ({ events }) => ({
  currentEvent: events.currentEvent,
  isLoading: events.isLoading,
});

export default connect(
  mapStateToProps,
  { updateEventImg, updateEvent, getEventPins }
)(Details);
