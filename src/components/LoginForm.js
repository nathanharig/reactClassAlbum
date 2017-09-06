import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardItem, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };


  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '' });
    //Catch is for failure
      firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(() => {
          this.setState({ error: 'Authentication Failed.' });
        });
      });
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Input
            label="Email"
            placeholder="user@domain.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardItem>
        <CardItem>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardItem>
        <Text style={styles.errorTextStyle}> {this.state.error} </Text>
        <CardItem>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >
            Login
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
