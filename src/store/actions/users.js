import { toastr } from 'react-redux-toastr';

import {
  ST_UPDATE_USER,
  FL_UPDATE_USER,
  SUC_UPDATE_USER,
  SET_USER,
} from './types';
import history from '../../history';
import { usersWithAuth } from '../../api/users';

export const updateUser = user => async dispatch => {
  const token = localStorage.getItem('token');
  console.log('start');
  dispatch({ type: ST_UPDATE_USER });
  try {
    console.log('on way');
    const { data } = await usersWithAuth(token).put('/edit', user);

    dispatch({ type: SUC_UPDATE_USER });
    dispatch({ type: SET_USER, payload: data.data });
    toastr.success('Exitoso!', 'Informacion acutalida!');
    history.push('/profile');
  } catch (error) {
    console.log(error.response);
    toastr.error('Error', 'Upp! Algo salio mal.');
    dispatch({ type: FL_UPDATE_USER });
  }
};
