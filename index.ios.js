import React, { Component } from 'react';
import {
  NavigatorIOS,
  AppRegistry,
  Text
} from 'react-native';
import Home from './Home'

class RNComprehensiveNavigation extends Component {
  render () {
    return (
      <NavigatorIOS
        style={{flex:1}}
        initialRoute={{
          component: Home,
          title: 'Home'
        }} />
    );
  }
}

AppRegistry.registerComponent('RNComprehensiveNavigation', () => RNComprehensiveNavigation);
