import { LISTINGS_LOAD_ERROR } from '../actions/types';

const initialState = {};

export default function errorsReducer(state = initialState, action) {
  switch (action.type) {
    case LISTINGS_LOAD_ERROR:
      return {
        ...state,
        listings: action.payload,
      };
    default:
      return state;
  }
}
