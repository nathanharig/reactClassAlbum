import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardItem, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  onButtonPress() {
    const { email, password } = this.state;
      firebase.auth().signInWithEmailAndPassword(email, password);
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

export default LoginForm;
