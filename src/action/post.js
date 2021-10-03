import database from '@react-native-firebase/database';
import {SET_POST, ERROR_POST} from './action.types';

export const getPost = () => async dispatch => {
  try {
    database()
      .ref('/posts/')
      .on('value', snapshot => {
        //on helps in real time data chages in DB
        console.log('User Data:', snapshot.val());
        if (snapshot.val()) {
          dispatch({
            type: SET_POST,
            payload: Object.values(snapshot.val()),
          });
        } else {
          dispatch({
            type: SET_POST,
            payload: [],
          });
        }
      });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR_POST,
    });
  }
};
