import React, { Component } from 'react'

import { View, Text, StyleSheet } from 'react-native'

class PushedScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello from PushedScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff916a'
  },
  text: {
    fontSize: 22
  }
})

export default PushedScreen
