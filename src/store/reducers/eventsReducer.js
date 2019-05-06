import {
  SAVE_EVENT,
  START_EVENT,
  FAIL_EVENT,
  SET_USER_EVENTS,
  SET_EVENT,
} from '../actions/types';

const initialState = {
  isLoading: false,
  userEvents: [],
  currentEvent: null,
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
    case SET_EVENT:
      return { ...state, isLoading: false, currentEvent: payload };
    default:
      return state;
  }
};

export default eventsReducer;
