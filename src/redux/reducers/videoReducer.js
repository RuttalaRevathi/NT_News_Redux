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

<<<<<<< HEAD
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
=======
function videoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS:
      return {...state, videosLoading: true};
    case GET_VIDEOS_SUCCESS:
      return {...state, videosData: action.payload, videosLoading: false};
            case GET_VIDEOS_ERROR:
return {...state, videosLoading: true, error: true};
    default:
      return state;
>>>>>>> d6475f5 (district categories)
  }

  export default videoReducer;
