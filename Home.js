import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import About from './About'

class Home extends Component {
  navigate () {
    this.props.navigator.push({
      component: About,
      passProps: {
        name: 'React Camp'
      }
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello from Home</Text>
        <TouchableHighlight onPress={this.navigate.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: 22,
    textAlign: 'center'
  },
  button: {
    marginTop: 15,
    height: 70,
    backgroundColor: '#ededed',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15
  },
  buttonText: {
    fontSize: 22
  }
})

export default Home
