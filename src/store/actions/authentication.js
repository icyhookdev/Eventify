import { REGISTER_USER, MAKE_REQUEST, FAIL_REQUEST } from './types';
import users from '../../api/users';

export const registerUser = userData => async dispatch => {
  dispatch({ type: MAKE_REQUEST });
  try {
    const res = await users.post('/register', userData);
    console.log('succeed', res);
    dispatch({ type: REGISTER_USER });
  } catch (ex) {
    return new Promise((resolve, reject) => {
      dispatch({ type: FAIL_REQUEST });
      console.log(ex);
      reject(ex);
    });
  }
};
