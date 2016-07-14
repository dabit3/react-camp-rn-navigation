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
  configureScene (route) {
    if (route.type === 'modal') {
      return Navigator.SceneConfigs.FloatFromBottom
    }
    return Navigator.SceneConfigs.FloatFromRight
  }
  render() {
    return (
     <Navigator
       configureScene={this.configureScene.bind(this)}
       renderScene={this.renderScene.bind(this)}
       initialRoute={{
        component: Home
       }} />
    );
  }
}

AppRegistry.registerComponent('RNComprehensiveNavigation', () => RNComprehensiveNavigation);
