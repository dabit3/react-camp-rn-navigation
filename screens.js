import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import PushedScreen from './PushedScreen';

export function registerScreens() {
  Navigation.registerComponent('FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('PushedScreen', () => PushedScreen);
}
