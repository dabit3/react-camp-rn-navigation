import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text } from 'react-native'
import Router from 'react-native-simple-router'
import Home from './Home'

class RNComprehensiveNavigation extends Component {
  render() {
    return (
      <Router
        firstRoute={firstRoute}
        headerStyle={styles.header} />
    )
  }
}

const firstRoute = {
  name: 'Home!',
  component: Home
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec'
  }
})

AppRegistry.registerComponent('RNComprehensiveNavigation', () => RNComprehensiveNavigation);
