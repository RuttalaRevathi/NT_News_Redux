/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl} from '../../utilities/urls';

export const GET_HEALTH_SUCCESS = 'GET_HEALTH_SUCCESS';
export const GET_HEALTH_ERROR = 'GET_HEALTH_ERROR';
export const GET_HEALTH = 'GET_HEALTH';

 const getHealthAction = (categoryName) => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_HEALTH,
        });
        const result = await fetch(BaseUrl + CategoryUrl + categoryName, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_HEALTH_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_HEALTH_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getHealthAction;
