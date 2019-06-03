import {
  ST_UPDATE_USER,
  FL_UPDATE_USER,
  SUC_UPDATE_USER,
} from '../actions/types';

const initialState = {
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ST_UPDATE_USER:
      return { ...state, isLoading: true };
    case FL_UPDATE_USER:
      return { ...state, isLoading: false };
    case SUC_UPDATE_USER:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
