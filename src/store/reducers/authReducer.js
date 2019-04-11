import { REGISTER_USER, MAKE_REQUEST, FAIL_REQUEST } from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
};

const authReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case MAKE_REQUEST:
      return { ...state, isLoading: true };
    case REGISTER_USER:
      return { ...state, isLoading: false };
    case FAIL_REQUEST:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default authReducer;
