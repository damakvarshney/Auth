import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LoginForm from './app/components/LoginForm';
import {Button} from 'react-native-elements';
import firebase from 'firebase';

export default App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyAUKUd5tMeAA63Wu_S_1jlGff4PKFdFKLY',
        authDomain: 'react-native-26a1f.firebaseapp.com',
        databaseURL: 'https://react-native-26a1f.firebaseio.com',
        projectId: 'react-native-26a1f',
        storageBucket: 'react-native-26a1f.appspot.com',
        messagingSenderId: '97297270853',
        appId: '1:97297270853:web:d48b2065a96663f74cbb2c',
        measurementId: 'G-17TNJTDB7F',
      });

      firebase.auth().onAuthStateChanged((user) => {
        user ? setLoggedIn(true) : setLoggedIn(false);
      });
    }
  });

  return (
    <>
      {loggedIn ? (
        <Button title="Log Out" onPress={() => firebase.auth().signOut()} />
      ) : (
        <LoginForm />
      )}
    </>
  );
};
