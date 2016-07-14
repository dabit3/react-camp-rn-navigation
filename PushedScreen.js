import React, { Component } from 'react'

import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

class PushedScreen extends Component {
  goBack () {
    this.props.navigator.pop()
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello from PushedScreen</Text>
        <TouchableHighlight style={styles.button} onPress={this.goBack.bind(this)}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ff916a'
  },
  text: {
    fontSize: 22,
    textAlign: 'center'
  },
  button: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 70,
    backgroundColor: 'rgba(0,0,0,.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3
  },
  buttonText: {
    fontSize: 20
  }
})

export default PushedScreen
