import React, { Component } from 'react'

import { View, Text, StyleSheet } from 'react-native'

class SecondTabScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello from SecondTabScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#54d9ff'
  },
  text: {
    fontSize: 22
  }
})

export default SecondTabScreen
