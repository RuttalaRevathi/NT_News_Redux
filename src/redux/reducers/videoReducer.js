/* eslint-disable prettier/prettier */

import {
    GET_VIDEO,
    GET_VIDEO_SUCCESS,
    GET_VIDEO_ERROR,
  } from '../actions/getVideoAction';

  const initialState = {
    videoData: [],
    videoLoading: false,
    error: false,
  };

  function videosReducer(state = initialState, action) {
    switch (action.type) {
      case GET_VIDEO:
        return {...state, videoLoading: false};
      case GET_VIDEO_SUCCESS:
        return {...state, videoData: action.payload, videoLoading: true};
              case GET_VIDEO_ERROR:
  return {...state, videoLoading: false, error: true};
      default:
        return state;
    }
  }

  export default videosReducer;
