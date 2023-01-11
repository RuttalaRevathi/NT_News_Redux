/* eslint-disable prettier/prettier */
import {Adilabad, BaseUrl, CategoryUrl} from '../../utilities/urls';

export const GET_ADILABAD_SUCCESS = 'GET_ADILABAD_SUCCESS';
export const GET_ADILABAD_ERROR = 'GET_ADILABAD_ERROR';
export const GET_ADILABAD = 'GET_ADILABAD';
<<<<<<< HEAD
export const getAdilabadData = () => {
=======
export const getAdilabadAction = () => {
>>>>>>> d6475f5 (district categories)
  try {
    return async dispatch => {
      dispatch({
        type: GET_ADILABAD,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Adilabad, {
<<<<<<< HEAD
=======
        
>>>>>>> d6475f5 (district categories)
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
<<<<<<< HEAD
      });
=======
       
      });
      console.log(result,"====================adilabad");
>>>>>>> d6475f5 (district categories)
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_ADILABAD_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_ADILABAD_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
