import React, { Component } from 'react'
import Home from './Home'
import About from './About'

import {
  BackAndroid,
  NavigationExperimental
} from 'react-native'

const {
  CardStack: NavigationCardStack
} = NavigationExperimental

class NavRoot extends Component {
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this.props.popRoute.bind(this))
  }
  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this.props.popRoute.bind(this))
  }
  _renderScene (props) {
    const { route } = props.scene
    if (route.key === 'home') {
     return <Home _handleNavigate={this._onNavigate.bind(this)} />
    }
    if (route.key === 'about') {
     return <About _goBack={this.props.popRoute.bind(this)} />
    }
  }
  _onNavigate (action) {
    switch (action.type) {
      case 'push':
        this.props.pushRoute(action.route)
        return true
      case 'pop':
        this.props.popRoute()
        return true
      default:
        return false
    }
  }
  render () {
    return (
      <NavigationCardStack
        navigationState={this.props.navigation}
        onNavigate={this._onNavigate.bind(this)}
        renderScene={this._renderScene.bind(this)} />
      )
   }
}

export default NavRoot
