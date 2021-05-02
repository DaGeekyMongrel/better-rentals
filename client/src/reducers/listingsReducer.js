import { LISTINGS_LOADED, LISTINGS_LOADING } from '../actions/types';

const initialState = {};

export default function listingsReducer(state = initialState, action) {
  switch (action.type) {
    case LISTINGS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LISTINGS_LOADED:
      return {
        ...state,
        listings: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
