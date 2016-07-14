import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import About from './About'

class Home extends Component {
  navigate (component, title) {
    this.props.navigator.push({
      component,
      type: 'modal',
      passProps: {
        title
      }
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello from Home</Text>
        <TouchableHighlight
          onPress={this.navigate.bind(this, About, 'React Camp')}
          style={styles.button}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  button: {
    height: 70,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#ededed',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    fontSize: 22
  }
})

export default Home
