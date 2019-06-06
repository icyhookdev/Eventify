import { toastr } from 'react-redux-toastr';
import {
  START_EVENT,
  SAVE_EVENT,
  FAIL_EVENT,
  SET_USER_EVENTS,
  SET_EVENT,
  ST_GET_EVENT_GUESTS,
  FL_GET_EVENT_GUESTS,
  SUC_GET_EVENT_GUESTS,
} from './types';
import history from '../../history';

import events from '../../api/events';

export const saveEvent = dataEvent => async dispatch => {
  const token = localStorage.getItem('token');
  console.log(dataEvent);
  try {
    dispatch({ type: START_EVENT });
    await events(token, false).post('/register', dataEvent);

    toastr.success('Exitoso!', 'Evento Creado');
    dispatch({ type: SAVE_EVENT });
    history.push('/myevents');
  } catch (ex) {
    console.log(ex.response);
    toastr.error('Error', 'Upp! Algo salio mal.');
    dispatch({ type: FAIL_EVENT });
  }
};

export const getEvents = () => async dispatch => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('user');
  try {
    dispatch({ type: START_EVENT });
    const res = await events(token).get(`/user/${userId}`);
    dispatch({ type: SET_USER_EVENTS, payload: res.data.data });
  } catch (ex) {
    console.log(ex.response);
    dispatch({ type: FAIL_EVENT });
  }
};

export const getEvent = id => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    dispatch({ type: START_EVENT });
    const res = await events(token).get(`/${id}`);
    dispatch({ type: SET_EVENT, payload: res.data.data });
  } catch (ex) {
    console.log(ex.response);
    dispatch({ type: FAIL_EVENT });
  }
};

export const updateEvent = data => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const res = await events(token).put(`/edit`, data);
    toastr.success('Exitoso!', 'Evento Actualizado');

    console.log('succeedd', res);
  } catch (err) {
    toastr.error('Error', 'Upp! Algo salio mal.');
    console.log(err.response.data);
  }
};

export const updateEventImg = (id, img) => async (dispatch, getState) => {
  const token = localStorage.getItem('token');

  const form = new FormData();
  form.append('image', img, img.name);

  try {
    const { data } = await events(token, true).put(`image/${id}`, form);
    const event = getState().events.currentEvent;
    console.log(event);
    dispatch({ type: SET_EVENT, payload: { ...event, image: data.url } });
  } catch (err) {
    console.log(err.response);
  }
};

export const createEventGuests = emails => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const { data } = await events(token).post('invitation/create/', emails);
    console.log(data);
  } catch (err) {
    console.log(err.response);
  }
};

export const getEventGuests = eventId => async dispatch => {
  const token = localStorage.getItem('token');

  dispatch({ type: ST_GET_EVENT_GUESTS });

  try {
    const { data } = await events(token).get(`${eventId}/invitations`);
    dispatch({ type: SUC_GET_EVENT_GUESTS, payload: data.data });
    console.log(data);
  } catch (err) {
    dispatch({ type: FL_GET_EVENT_GUESTS });
    console.log(err.response);
  }
};
