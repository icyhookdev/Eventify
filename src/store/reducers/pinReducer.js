import {
  UPDATE_DRAFT_PIN_LOCATION,
  DELETE_DRAFT_PIN_LOCATION,
  CREATE_DRAFT_PIN,
  CLEAR_EVENT_PINS,
  GET_EVENT_PINS,
} from '../actions/types';

const initialState = {
  draft: null,
  currentPin: null,
  currentEventPins: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_DRAFT_PIN:
      return {
        ...state,
        draft: { latitude: 0, longitude: 0 },
        currentPin: null,
      };
    case UPDATE_DRAFT_PIN_LOCATION:
      return { ...state, draft: payload };
    case GET_EVENT_PINS:
      return { ...state, currentEventPins: payload };
    case DELETE_DRAFT_PIN_LOCATION:
      return { ...state, draft: null };
    case CLEAR_EVENT_PINS:
      return { ...state, currentEventPins: [] };
    default:
      return state;
  }
};
