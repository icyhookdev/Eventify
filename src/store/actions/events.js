import { toastr } from 'react-redux-toastr';
import {
  START_EVENT,
  SAVE_EVENT,
  FAIL_EVENT,
  SET_USER_EVENTS,
  SET_EVENT,
} from './types';
import history from '../../history';

import events from '../../api/events';

export const saveEvent = dataEvent => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    dispatch({ type: START_EVENT });
    await events(token).post('/register', dataEvent);
    toastr.success('Exitoso!', 'Evento Creado');
    dispatch({ type: SAVE_EVENT });
    history.push('/myevents');
  } catch (ex) {
    console.log(ex);
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

export const updateEvent = (id, data) => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    await events(token).put(`/${id}`, data);
    console.log('succeedd');
  } catch (err) {
    console.log(err.response.data);
  }
};

export const updateEventImg = (id, img) => async dispatch => {
  const token = localStorage.getItem('token');

  const form = new FormData();
  form.append('image', img, img.name);

  try {
    const res = await events(token).put(`image/${id}`, form);

    console.log('succeedd', res);
  } catch (err) {
    console.log(err.response);
  }
};
