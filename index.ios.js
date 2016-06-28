import { Navigation } from 'react-native-navigation'

import { registerScreens } from './screens'
registerScreens()

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.FirstTabScreen',
      icon: require('./img/one.png'),
      selectedIcon: require('./img/one_selected.png'),
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      icon: require('./img/two.png'),
      selectedIcon: require('./img/two_selected.png'),
      title: 'Screen Two'
    }
  ]
})
