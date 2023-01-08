/* eslint-disable prettier/prettier */

import {
    GET_VIDEOS,
    GET_VIDEOS_SUCCESS,
    GET_VIDEOS_ERROR,
  } from '../actions/getVideoAction';

  const initialState = {
    videoData: [],
    videoLoading: false,
    error: false,
  };

  function videoReducer(state = initialState, action) {
    switch (action.type) {
      case GET_VIDEOS:
        return {...state, videoLoading: false};
      case GET_VIDEOS_SUCCESS:
        return {...state, videoData: action.payload, videoLoading: true};
              case GET_VIDEOS_ERROR:
  return {...state, videoLoading: false, error: true};
      default:
        return state;
    }
  }

  export default videoReducer;
