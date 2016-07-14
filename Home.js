import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import About from './About'

class Home extends Component {
  navigate () {
    this.props.toRoute({
      name: 'About',
      component: About,
      passProps: {
        title: 'Hello From React Camp'
      }
    })
  }
  render() {
    console.log('props: ', this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello from Home!</Text>
        <TouchableHighlight onPress={this.navigate.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>Go To About</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 10
  },
  buttonText: {
    color: 'white'
  },
  button: {
    height: 70,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#5cafec',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Home
