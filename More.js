import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'

class More extends Component {
  navigate () {
    Actions.pop()
  }
  render() {
    console.log('props: ', this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello from More</Text>
        <TouchableHighlight onPress={this.navigate.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableHighlight>
        <Text style={styles.text}>I am {this.props.firstName} {this.props.lastName}, welcome to {this.props.conference}</Text>
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
    marginBottom: 10,
    marginTop: 10
  }
})

export default More
