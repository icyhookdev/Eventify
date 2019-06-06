// import { toastr } from 'react-redux-toastr';
import events from '../../api/events';

import {
  UPDATE_DRAFT_PIN_LOCATION,
  DELETE_DRAFT_PIN_LOCATION,
  CREATE_DRAFT_PIN,
  GET_EVENT_PINS,
  CLEAR_EVENT_PINS,
  SET_CURRENT_PIN,
} from './types';
// import history from '../../history';
// import { usersWithAuth } from '../../api/users';

export const createDraftPin = () => ({
  type: CREATE_DRAFT_PIN,
});

export const updateDraftPinLocation = location => ({
  type: UPDATE_DRAFT_PIN_LOCATION,
  payload: location,
});

export const deleteDraftPinLocation = () => ({
  type: DELETE_DRAFT_PIN_LOCATION,
});

export const createPin = (pin, pins) => async dispatch => {
  const token = localStorage.getItem('token');

  try {
    const { data } = await events(token).post('/pin/create', pin);
    dispatch({ type: DELETE_DRAFT_PIN_LOCATION });

    const newPins = [...pins, data.data];
    dispatch({ type: GET_EVENT_PINS, payload: newPins });
  } catch (error) {
    console.log(error.response);
  }
};

export const getEventPins = eventId => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const { data } = await events(token).get(`/${eventId}/pin/get_all`);
    console.log(data);
    dispatch({ type: GET_EVENT_PINS, payload: data.data });
  } catch (error) {
    if (error.response.data.message === 'this event has no pins') {
      dispatch({ type: CLEAR_EVENT_PINS });
    }
    console.log(error.response);
  }
};

export const setCurrentPin = pin => ({
  type: SET_CURRENT_PIN,
  payload: pin,
});

export const deletePin = id => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const { data } = await events(token).delete(`/pin/${id}/delete`);
    console.log(data);
  } catch (error) {
    console.log(error.response);
  }
};
