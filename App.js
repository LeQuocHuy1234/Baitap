/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import HomeScreen from './component/HomeScreen';
import SettingScreen from './component/SettingScreen';

const MyNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Setting: {
    screen: SettingScreen,
  },
});

const App = createAppContainer(MyNavigator);

export default App;