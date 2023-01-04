/* eslint-disable prettier/prettier */

import {
    GET_AGRICULTURE,
    GET_AGRICULTURE_SUCCESS,
    GET_AGRICULTURE_ERROR,
  } from '../actions/getAgricultureAction';

  const initialState = {
    agricultureData: [],
    agricultureLoading: false,
    error: false,
  };

  function agricultureReducer(state = initialState, action) {
    switch (action.type) {
      case GET_AGRICULTURE:
        return {...state, agricultureLoading: false};
      case GET_AGRICULTURE_SUCCESS:
        return {...state, agricultureData: action.payload, agricultureLoading: true};
              case GET_AGRICULTURE_ERROR:
  return {...state, agricultureLoading: false, error: true};
      default:
        return state;
    }
  }

  export default agricultureReducer;
