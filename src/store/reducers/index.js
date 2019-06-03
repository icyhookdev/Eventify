import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import authReducer from './authReducer';
import eventsReducer from './eventsReducer';
import populateReducer from './populateReducer';
import userReducer from './userReducer';
import pinReducer from './pinReducer';

const reducers = combineReducers({
  auth: authReducer,
  events: eventsReducer,
  toastr: toastrReducer,
  populateData: populateReducer,
  user: userReducer,
  pins: pinReducer,
});

export default reducers;
