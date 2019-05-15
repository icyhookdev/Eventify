import {
  POPULATE_CATEGORIES,
  POPULATE_MODALITY,
  POPULATE_TYPES,
  POPULATE_RESTRICTIONS,
  POPULATE_COUNTRIES,
} from './types';
import { populate } from '../../api/populate';
import defaultRequest from '../../api/defaultRequest';

export const getCategories = () => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const res = await populate(token).get('/category');

    dispatch({ type: POPULATE_CATEGORIES, payload: res.data.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const getTypes = () => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const res = await populate(token).get('/type');

    dispatch({ type: POPULATE_TYPES, payload: res.data.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const getRestrictions = () => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const res = await populate(token).get('/restriction');

    dispatch({ type: POPULATE_RESTRICTIONS, payload: res.data.data });
  } catch (error) {
    console.log(error.response);
  }
};
export const getModalities = () => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const res = await populate(token).get('/modality');

    dispatch({ type: POPULATE_MODALITY, payload: res.data.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const getCountries = () => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const { data } = await defaultRequest(token).get('/countries');

    dispatch({ type: POPULATE_COUNTRIES, payload: data.data });
  } catch (error) {
    console.log(error.response);
  }
};
