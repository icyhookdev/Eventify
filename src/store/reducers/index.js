import { combineReducers } from 'redux';

const testReducer = (state = {}, action) => state;

export default combineReducers({
  test: testReducer,
});
