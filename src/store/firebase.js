import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB7HiXtnvwUvMamP8KbIg76LSPSXYjB4M0",
    authDomain: "react-redux-7e2f7.firebaseapp.com",
    databaseURL: "https://react-redux-7e2f7.firebaseio.com",
    projectId: "react-redux-7e2f7",
    storageBucket: "react-redux-7e2f7.appspot.com",
    messagingSenderId: "671627665113"
  };
  var firebasedb = firebase.initializeApp(config);
export default firebasedb;