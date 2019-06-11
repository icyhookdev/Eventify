import {
  SAVE_EVENT,
  START_EVENT,
  FAIL_EVENT,
  SET_USER_EVENTS,
  SET_EVENT,
  ST_GET_EVENT_GUESTS,
  FL_GET_EVENT_GUESTS,
  SUC_GET_EVENT_GUESTS,
  ST_GET_EVENTS_PUBLISHED,
  GET_EVENTS_PUBLISHED,
  FAIL_REQUEST,
} from '../actions/types';

const initialState = {
  isLoading: false,
  userEvents: [],
  currentEvent: null,
  guests: [],
  publishedEvents: null,
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
    case ST_GET_EVENT_GUESTS:
      return { ...state, isLoading: true, guests: payload };
    case FL_GET_EVENT_GUESTS:
      return { ...state, isLoading: false };
    case SUC_GET_EVENT_GUESTS:
      return { ...state, isLoading: false, guests: payload };
    case GET_EVENTS_PUBLISHED:
      return { ...state, isLoading: false, publishedEvents: payload };
    case ST_GET_EVENTS_PUBLISHED:
      return { ...state, isLoading: true };
    case FAIL_REQUEST:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default eventsReducer;
