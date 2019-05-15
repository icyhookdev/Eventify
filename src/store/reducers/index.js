import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import authReducer from './authReducer';
import eventsReducer from './eventsReducer';
import populateReducer from './populateReducer';

export default combineReducers({
  auth: authReducer,
  events: eventsReducer,
  toastr: toastrReducer,
  populateData: populateReducer,
});
