import React, { Component } from 'react'

import { View, Text, StyleSheet } from 'react-native'

class FirstTabScreen extends Component {
  render () {
    this.props.navigator.toggleNavBar({
      to: 'hidden',
      animated: false
    })
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello from FirstTabScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3fff30'
  },
  text: {
    fontSize: 22
  }
})

export default FirstTabScreen
