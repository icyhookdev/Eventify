import { REGISTER_USER, MAKE_REQUEST, FAIL_REQUEST, LOGIN } from './types';
import users from '../../api/users';

export const registerUser = userData => async dispatch => {
  dispatch({ type: MAKE_REQUEST });
  try {
    await users.post('/api/users/register', userData);
    dispatch({ type: REGISTER_USER });
  } catch (ex) {
    return new Promise((resolve, reject) => {
      dispatch({ type: FAIL_REQUEST });
      reject(ex);
    });
  }
};

export const login = userData => async dispatch => {
  dispatch({ type: MAKE_REQUEST });
  try {
    const res = await users.post('/api/auth/login', userData);
    dispatch({ type: LOGIN, payload: res.data });
    localStorage.setItem('token', res.data.token);
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_REQUEST });
  }
};
