import React, {useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {Input, Text, Button} from 'react-native-elements';
import AppView from './AppView';
import firebase from 'firebase';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = (email, password) => {
    setError('');
    setLoading(true);
    if (email !== '' && password !== '') {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => onLoginSuccess())
        .catch(() => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => onLoginSuccess())
            .catch(() => {
              onLoginSuccess();
              setError('Authentication Failed.');
            });
        });

      // firebase.auth().
    } else {
      setLoading(false);
      setError('Email or Password is Empty.');
    }
  };

  const onLoginSuccess = () => {
    setEmail('');
    setPassword('');
    setLoading(false);
  };
  return (
    <AppView>
      <Text style={styles.text}>Login</Text>
      <Text style={styles.error}>{error}</Text>
      <Input
        placeholder="user@domain.com"
        label="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        autoCapitalize="none"
      />
      <Input
        placeholder="@#123hjk"
        label="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={() => onSubmit(email, password)} />
    </AppView>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 80,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  error: {
    color: '#FF0000',
    padding: 10,
  },
});

export default LoginForm;
