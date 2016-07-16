import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Home extends Component {
  goBack () {
    Actions.pop()
  }
  navigate() {
    Actions.more({
      firstName: 'Nader',
      lastName: 'Dabit',
      conference: 'React Camp'
    })
  }
  render() {
    console.log('props: ', this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello from {this.props.title}</Text>
        <TouchableHighlight onPress={this.goBack.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.navigate.bind(this)} style={[styles.button, {marginTop: 20}]}>
          <Text style={styles.buttonText}>More</Text>
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
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10
  }
})

export default Home
