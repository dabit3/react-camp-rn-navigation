/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native'
import Home from './Home'

class RNComprehensiveNavigation extends Component {
  renderScene (route, navigator) {
    return <route.component navigator={navigator} {...route.passProps} />
  }
  render() {
    return (
     <Navigator
       ref='navigator'
       renderScene={this.renderScene.bind(this)}
       initialRoute={{
        component: Home
       }} />
    );
  }
}

AppRegistry.registerComponent('RNComprehensiveNavigation', () => RNComprehensiveNavigation);
