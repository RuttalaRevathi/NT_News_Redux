/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl} from '../../utilities/urls';

export const GET_EDITPAGE_SUCCESS = 'GET_EDITPAGE_SUCCESS';
export const GET_EDITPAGE_ERROR = 'GET_EDITPAGE_ERROR';
export const GET_EDITPAGE = 'GET_EDITPAGE';

 const getEditPageAction = (categoryName) => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_EDITPAGE,
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
            type: GET_EDITPAGE_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_EDITPAGE_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getEditPageAction;
