import {
  SAVE_EVENT,
  START_EVENT,
  FAIL_EVENT,
  SET_USER_EVENTS,
} from '../actions/types';

const initialState = {
  isLoading: false,
  userEvents: [],
};

const eventsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case START_EVENT:
      return { ...state, isLoading: true };
    case SAVE_EVENT:
      return { ...state, isLoading: false };
    case FAIL_EVENT:
      return { ...state, isLoading: false };
    case SET_USER_EVENTS:
      return { ...state, isLoading: false, userEvents: payload };
    default:
      return state;
  }
};

export default eventsReducer;
