import React from 'react'
import { AppRegistry } from 'react-native'
import {Scene, Router} from 'react-native-router-flux'
import Home from './Home'
import About from './About'
import More from './More'

class RNComprehensiveNavigation extends React.Component {
  render() {
    return <Router>
      <Scene key='root'>
        <Scene key='home' component={Home} title='Home' />
        <Scene key='about' component={About} title='About'/>
        <Scene key='more' component={More} title='More'/>
      </Scene>
    </Router>
  }
}

AppRegistry.registerComponent('RNComprehensiveNavigation', () => RNComprehensiveNavigation);
