import React, { Component} from 'react';
import {
  Card,
  CardText,
  CardTitle
} from 'material-ui';

import { LoginContainer } from '../containers';

const MAIN_LOGIN_CONTAINER = 'main';

export default class LoginPage extends Component {
  static styles = {
    root: {
      maxWidth: '600px',
      margin: 'auto',
      marginTop: '50px'
    },
    title: {
      backgroundColor: '#00bcd4',
      color: '#ffffff'
    }
  };

  render(){
    return (
        <Card style={LoginPage.styles.root}>
          <CardTitle
            style={LoginPage.styles.title}
            titleColor={LoginPage.styles.title.color}
            title="Login"
          />
          <CardText>
            <LoginContainer containerKey={MAIN_LOGIN_CONTAINER}/>
          </CardText>
        </Card>
    )
  }
}