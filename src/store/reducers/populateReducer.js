import {
  POPULATE_CATEGORIES,
  POPULATE_MODALITY,
  POPULATE_TYPES,
  POPULATE_RESTRICTIONS,
  POPULATE_COUNTRIES,
  POPULATE_GENRES,
  POPULATE_STATES,
} from '../actions/types';

const initialState = {
  categories: [],
  types: [],
  restrictions: [],
  modalities: [],
  countries: [],
  states: [],
  genres: [],
};

const populateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POPULATE_CATEGORIES:
      return { ...state, categories: payload };
    case POPULATE_TYPES:
      return { ...state, types: payload };
    case POPULATE_RESTRICTIONS:
      return { ...state, restrictions: payload };
    case POPULATE_MODALITY:
      return { ...state, modalities: payload };
    case POPULATE_COUNTRIES:
      return { ...state, countries: payload };
    case POPULATE_STATES:
      return { ...state, states: payload };
    case POPULATE_GENRES:
      return { ...state, genres: payload };
    default:
      return state;
  }
};

export default populateReducer;
