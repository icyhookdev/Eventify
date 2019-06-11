import {
  ST_UPDATE_USER,
  FL_UPDATE_USER,
  SUC_UPDATE_USER,
  ST_GET_USER,
  USER_FETCHED,
  FAIL_REQUEST,
} from '../actions/types';

const initialState = {
  isLoading: false,
  userProfile: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ST_UPDATE_USER:
      return { ...state, isLoading: true };
    case FL_UPDATE_USER:
      return { ...state, isLoading: false };
    case SUC_UPDATE_USER:
      return { ...state, isLoading: false };
    case ST_GET_USER:
      return { ...state, isLoading: true };
    case USER_FETCHED:
      return { ...state, isLoading: false, userProfile: payload };
    case FAIL_REQUEST:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
