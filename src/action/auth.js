import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import database from '@react-native-firebase/database';

export const signUp = data => async dispatch => {
  console.log(data);
  const {name, instaUserName, bio, email, password, country, image} = data;

  //SigningUp with firebase
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(data => {
      console.log(data);
      console.log('User creation was successfull.');

      //Database writing method
      database()
        .ref('/users/' + data.user.uid)
        .set({
          name,
          instaUserName,
          country,
          image,
          bio,
          uid: data.user.uid,
        })
        .then(() => console.log('Data set successfully.'));
      Snackbar.show({
        text: 'Account created.',
        textColor: 'white',
        backgroundColor: '#1b9adf',
      });
    })
    .catch(err => {
      console.log(err);
      Snackbar.show({
        text: 'SignUp Failed!',
        textColor: 'white',
        backgroundColor: 'red',
      });
    });
};

export const signIn = data => async dispatch => {
  console.log(data);
  const {email, password} = data;

  auth()
    .signInWithEmailAndPassword(email, password)
    .then(data => {
      console.log('SignIn Success.');
      Snackbar.show({
        text: 'Account signedIn.',
        textColor: 'white',
        backgroundColor: '#2197d6',
      });
    })
    .catch(e => {
      console.log(e);
      Snackbar.show({
        text: 'Sign in failed!',
        textColor: 'white',
        backgroundColor: 'red',
      });
    });
};

export const signOut = () => async dispatch => {
  auth()
    .signOut()
    .then(() => {
      Snackbar.show({
        text: 'SignOut successfully.',
        textColor: 'white',
        backgroundColor: '#2197d6',
      });
    })
    .catch(err => {
      console.log(err);
      Snackbar.show({
        text: 'Sign in failed!',
        textColor: 'white',
        backgroundColor: 'red',
      });
    });
};
