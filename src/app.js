import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardItem } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: false };
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBQViNdlu0JwSOkAADf-JWEi0e2II4inbE',
    authDomain: 'react-class-auth.firebaseapp.com',
    databaseURL: 'https://react-class-auth.firebaseio.com',
    projectId: 'react-class-auth',
    storageBucket: 'react-class-auth.appspot.com',
    messagingSenderId: '749573999704'
  });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <CardItem>
          <Button>
          Log Out
          </Button>
        </CardItem>
      );
    }

  return (
      <LoginForm />
    );
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
