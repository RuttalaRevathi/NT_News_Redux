/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl} from '../../utilities/urls';

export const GET_NATIONAL_SUCCESS = 'GET_NATIONAL_SUCCESS';
export const GET_NATIONAL_ERROR = 'GET_NATIONAL_ERROR';
export const GET_NATIONAL = 'GET_NATIONAL';

 const getNationalAction = (categoryName) => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_NATIONAL,
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
            type: GET_NATIONAL_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_NATIONAL_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getNationalAction;
