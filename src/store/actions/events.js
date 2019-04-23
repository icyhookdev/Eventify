import { START_EVENT, SAVE_EVENT, FAIL_EVENT, SET_USER_EVENTS } from './types';

import events from '../../api/events';

const token = localStorage.getItem('token');
const userId = localStorage.getItem('user');

export const saveEvent = dataEvent => async dispatch => {
  try {
    dispatch({ type: START_EVENT });
    const res = await events(token).post('/register', dataEvent);
    console.log('was register', res);
    dispatch({ type: SAVE_EVENT });
  } catch (ex) {
    console.log(ex);
    dispatch({ type: FAIL_EVENT });
  }
};

export const getEvent = () => async dispatch => {
  try {
    dispatch({ type: START_EVENT });
    const res = await events(token).get(`/user/${userId}`);
    dispatch({ type: SET_USER_EVENTS, payload: res.data.data });
  } catch (ex) {
    console.log(ex.response);
    dispatch({ type: FAIL_EVENT });
  }
};
