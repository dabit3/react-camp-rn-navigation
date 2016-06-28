import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class About extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello from {this.props.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  text: {
    fontSize: 22
  }
})

export default About
