// src/reducers/index.js
import { combineReducers } from 'redux';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
  booking: bookingReducer
});

export default rootReducer;
