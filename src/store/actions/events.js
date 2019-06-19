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
  EVENT_PUBLISHED,
  FAIL_REQUEST,
  GET_EVENTS_PUBLISHED,
  ST_GET_EVENTS_PUBLISHED,
  ST_SUB_USER_IN_EVENT,
  USER_SUBSCRIBED,
  EVENT_FILTERED,
  ST_EVENT_FILTER,
  ST_COPY_EVENT,
  EVENT_COPIED,
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

export const changeStatusEvent = (eventId, status) => async dispatch => {
  const token = localStorage.getItem('token');

  try {
    const { data } = await events(token).put(
      `/change_status/${eventId}`,
      status
    );
    dispatch({ type: EVENT_PUBLISHED });
    console.log(status);
    if (status.status === 'cancelled') {
      history.push('/myevents');
      return;
    }
    history.push('/');
    console.log(data);
  } catch (err) {
    // dispatch({ type: FL_GET_EVENT_GUESTS });
    console.log(err.response);
  }
};

export const getEventsPublished = page => async dispatch => {
  const token = localStorage.getItem('token');
  dispatch({ type: ST_GET_EVENTS_PUBLISHED });
  try {
    let res = null;
    if (page) {
      res = await events(token).get(`/published?page=${page}`);
    } else {
      res = await events(token).get(`/published`);
    }
    dispatch({ type: GET_EVENTS_PUBLISHED, payload: res.data.data });
    console.log(res);
  } catch (err) {
    dispatch({ type: FAIL_REQUEST });
    console.log(err.response);
  }
};

export const getFilterEvents = (
  page,
  { type, modality, country, state, name }
) => async dispatch => {
  const token = localStorage.getItem('token');
  dispatch({ type: ST_EVENT_FILTER });
  try {
    const { data } = await events(token).get(
      `/published?page=${page}&type=${type || 'null'}&modality=${modality ||
        'null'}&country=${country || 'null'}&state=${state ||
        'null'}&name=${name || 'null'}`
    );
    dispatch({ type: EVENT_FILTERED, payload: data.data });
    console.log(data);
  } catch (err) {
    dispatch({ type: FAIL_REQUEST });
    console.log(err.response);
  }
};

export const copyEvent = eventId => async dispatch => {
  const token = localStorage.getItem('token');
  dispatch({ type: ST_COPY_EVENT });
  try {
    const { data } = await events(token).post('/copy', { id: eventId });
    console.log(data);
    dispatch({ type: EVENT_COPIED });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_REQUEST });
  }
};

export const signUpUserInEvent = (eventId, userId) => async (
  dispatch,
  getState
) => {
  const token = localStorage.getItem('token');
  dispatch({ type: ST_SUB_USER_IN_EVENT });
  try {
    const { data } = await events(token).put(`/signup/${eventId}`, { userId });
    console.log(data);
    const event = getState().events.currentEvent;
    dispatch({ type: SET_EVENT, payload: { ...event, ...data } });
    // dispatch({ type: USER_SUBSCRIBED, payload: res.data.data });
  } catch (err) {
    dispatch({ type: FAIL_REQUEST });
    console.log(err.response);
  }
};

export const signOutUserFromEvent = eventId => async (dispatch, getState) => {
  const userId = getState().auth._id;
  const token = localStorage.getItem('token');

  try {
    const { data } = await events(token).put(`/leave/${eventId}`, { userId });
    console.log(data);

    const event = getState().events.currentEvent;
    dispatch({ type: SET_EVENT, payload: { ...event, ...data } });
  } catch (err) {
    dispatch({ type: FAIL_REQUEST });
    console.log(err.response);
  }
};
