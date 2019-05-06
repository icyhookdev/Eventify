import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import EventDetails from '../../pages/Dashboard/EventDetails/EventDetails';
import useInput from '../../hooks/useInput';
import checkInitialValues from '../../lib/checkInitialValues';
import { updateEventImg } from '../../store/actions/events';

const Details = ({ updateEventImg, currentEvent }) => {
  const [file, setFile] = useState(null);

  const [bbar, setBbar] = useState(false);
  const { values, onChangeHandler } = useInput({ description: '' });

  useEffect(() => {
    if (checkInitialValues(values)) {
      setBbar(true);
    }
  }, [values]);

  const onDropHandler = file => setFile(file[0]);
  const onRemoveImgHandler = () => setFile(null);

  const onSubmit = e => {
    e.preventDefault();

    updateEventImg(currentEvent.id, file);
  };

  return (
    <EventDetails
      onDrop={onDropHandler}
      img={file}
      onRemove={onRemoveImgHandler}
      values={values}
      onChange={onChangeHandler}
      bbar={bbar}
      loading={false}
      submit={onSubmit}
    />
  );
};

const mapStateToProps = ({ events }) => ({ currentEvent: events.currentEvent });

export default connect(
  mapStateToProps,
  { updateEventImg }
)(Details);
