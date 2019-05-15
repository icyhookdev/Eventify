import {
  POPULATE_CATEGORIES,
  POPULATE_MODALITY,
  POPULATE_TYPES,
  POPULATE_RESTRICTIONS,
  POPULATE_COUNTRIES,
} from '../actions/types';

const initialState = {
  categories: [],
  types: [],
  restrictions: [],
  modalities: [],
  countries: [],
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
    default:
      return state;
  }
};

export default populateReducer;
