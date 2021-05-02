import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import listingsReducer from './listingsReducer';

export default combineReducers({
  listings: listingsReducer,
  errors: errorsReducer,
});
