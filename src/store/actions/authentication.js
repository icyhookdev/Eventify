import { toastr } from 'react-redux-toastr';

import {
  REGISTER_USER,
  MAKE_REQUEST,
  FAIL_REQUEST,
  LOGIN,
  SET_USER,
} from './types';
import { users, usersWithAuth } from '../../api/users';
import history from '../../history';

export const registerUser = userData => async dispatch => {
  dispatch({ type: MAKE_REQUEST });
  try {
    await users.post('/api/users/register', userData);
    dispatch({ type: REGISTER_USER });
    toastr.success('Exitoso!', 'Cuenta Registrada');
  } catch (ex) {
    dispatch({ type: FAIL_REQUEST });
    return ex.response.data;
  }
};

export const login = userData => async dispatch => {
  dispatch({ type: MAKE_REQUEST });
  try {
    const res = await users.post('/api/auth/login', userData);
    dispatch({ type: LOGIN, payload: res.data.user });

    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', res.data.user._id);
    history.push('/');
  } catch (error) {
    dispatch({ type: FAIL_REQUEST });
    return error.response.data;
  }
};

export const setUser = updatedUser => async dispatch => {
  const userId = localStorage.getItem('user');
  const token = localStorage.getItem('token');

  const res = await usersWithAuth(token).get(`/${userId}`);
  if (updatedUser) {
    dispatch({ type: SET_USER, payload: updatedUser });
  } else {
    dispatch({ type: SET_USER, payload: res.data.data });
  }
};
