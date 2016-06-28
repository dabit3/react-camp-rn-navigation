import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

class SecondTabScreen extends Component {
  navigate () {
    this.props.navigator.push({
      screen: 'PushedScreen'
    });
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello from SecondTabScreen</Text>
        <TouchableHighlight style={styles.button} onPress={this.navigate.bind(this)}>
          <Text style={styles.buttonText}>Go to Pushed Screen</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#54d9ff'
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

export default SecondTabScreen
