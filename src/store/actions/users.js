import { toastr } from 'react-redux-toastr';

import {
  ST_UPDATE_USER,
  FL_UPDATE_USER,
  SUC_UPDATE_USER,
  SET_USER,
  ST_GET_USER,
  FETCH_USER_INVITATIONS,
  USER_FETCHED,
  FAIL_REQUEST,
} from './types';
import history from '../../history';
import { usersWithAuth } from '../../api/users';

export const updateUser = user => async dispatch => {
  const token = localStorage.getItem('token');
  console.log('start');
  dispatch({ type: ST_UPDATE_USER });
  try {
    const { data } = await usersWithAuth(token).put('/edit', user);

    console.log(data);
    dispatch({ type: SUC_UPDATE_USER });
    dispatch({ type: SET_USER, payload: data.data });
    toastr.success('Exitoso!', 'Informacion actualizada!');
    history.push('/profile');
  } catch (error) {
    console.log(error.response);
    toastr.error('Error', 'Upp! Algo salio mal.');
    dispatch({ type: FL_UPDATE_USER });
  }
};

export const getUser = id => async dispatch => {
  const token = localStorage.getItem('token');
  dispatch({ type: ST_GET_USER });
  try {
    const { data } = await usersWithAuth(token).get(`/${id}`);
    dispatch({ type: USER_FETCHED, payload: data.data });
  } catch (error) {
    console.log(error.response);
    toastr.error('Error', 'Upp! Algo salio mal.');
    dispatch({ type: FAIL_REQUEST });
  }
};

export const followUser = id => async (dispatch, getState) => {
  const myId = getState().auth.user._id;
  const token = localStorage.getItem('token');

  try {
    const { data } = await usersWithAuth(token).put(`/follow/${id}`, {
      userId: myId,
    });
    dispatch({ type: SET_USER, payload: data.data.user });
    console.log(data);
  } catch (error) {
    console.log(error.response);
  }
};

export const unfollowUser = id => async (dispatch, getState) => {
  const myId = getState().auth.user._id;
  const token = localStorage.getItem('token');

  try {
    const { data } = await usersWithAuth(token).put(`/unfollow/${id}`, {
      userId: myId,
    });
    dispatch({ type: SET_USER, payload: data.data.user });
    console.log(data);
  } catch (error) {
    console.log(error.response);
  }
};

export const confirmOrRejectInvitation = (option, id) => async (
  dispatch,
  getState
) => {
  const token = localStorage.getItem('token');
  try {
    const { data } = await usersWithAuth(token).put(
      `/invitation/${id}/confirm`,
      {
        confirm: option,
      }
    );
    // dispatch({ type: SET_USER, payload: data.data.user });
    console.log(data);
  } catch (error) {
    console.log(error.response);
  }
};

export const getUserInvitations = () => async (dispatch, getState) => {
  const token = localStorage.getItem('token');
  const id = getState().auth.user._id;
  try {
    const { data } = await usersWithAuth(token).get(`/invitation/${id}`);
    dispatch({ type: FETCH_USER_INVITATIONS, payload: data.data });
    console.log(data);
  } catch (error) {
    console.log(error.response);
  }
};
