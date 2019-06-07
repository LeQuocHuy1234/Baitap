/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import HomeScreen from './component/HomeScreen';
import SetingScreen from './component/SettingScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Setting: {
    screen : SetingScreen
  }
},{
  initialRouteName:'Home'
});

export default createAppContainer(AppNavigator);

