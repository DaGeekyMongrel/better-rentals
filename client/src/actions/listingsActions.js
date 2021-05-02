import axios from 'axios';

import {
  LISTINGS_LOADED,
  LISTINGS_LOADING,
  LISTINGS_LOAD_ERROR,
} from './types';

export const getListings = () => (dispatch) => {
  dispatch({ type: LISTINGS_LOADING });
  axios
    .get('/api/listings')
    .then((res) => {
      dispatch({
        type: LISTINGS_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LISTINGS_LOAD_ERROR,
        payload: err,
      });
    });
};
