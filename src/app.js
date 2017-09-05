import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBQViNdlu0JwSOkAADf-JWEi0e2II4inbE',
    authDomain: 'react-class-auth.firebaseapp.com',
    databaseURL: 'https://react-class-auth.firebaseio.com',
    projectId: 'react-class-auth',
    storageBucket: 'react-class-auth.appspot.com',
    messagingSenderId: '749573999704'
  });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
