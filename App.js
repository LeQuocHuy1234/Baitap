/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from './component/HomeScreen';
import SettingScreen from './component/SettingScreen';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Setting: {
    screen : SettingScreen
  }
},{
  initialRouteName:'Home',
  drawerPosition:'left',
  contentOptions: {
    activeTintColor: '#F50057',
    inactiveTintColor :'#1999CE',
    activeBackgroundColor :'#E8EAF6',
  },
  drawerWidth: 300,
  drawerBackgroundColor:'#b3ffe6',
  // contentComponent: ({navigation}) => {
  //   return(
  //     <View>
  //       <Text onPress={ () => navigation.navigate('Home') } style = {styles.itemMenu}>HomeScreen</Text>
  //       <Text onPress={ () => navigation.navigate('Setting') } style = {styles.itemMenu}>SettingScreen</Text>
  //     </View>
  //   )
  // }
});

const styles = StyleSheet.create({
  itemMenu: {
    padding: 10,
    fontWeight: 'bold',
  }
})

export default createAppContainer(AppNavigator);
