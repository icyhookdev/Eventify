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

    if (res.data.code === 204 || res.data.code === 205) {
      return res.data;
    }

    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', res.data.user._id);
    history.push('/');

    console.log(res);
  } catch (error) {
    dispatch({ type: FAIL_REQUEST });
  }
};

export const setUser = () => async dispatch => {
  const userId = localStorage.getItem('user');
  const token = localStorage.getItem('token');

  const res = await usersWithAuth(token).get(`/${userId}`);
  dispatch({ type: SET_USER, payload: res.data.data });
};
