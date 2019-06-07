import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SetiingScreen extends Component {
    static navigationOptions = {
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'green',
        },
        tabBarIcon: () => {
            return <Ionicons name="ios-settings" size = {25}/>
        },
        // title:'Cai dat'
    };
    render() {
        return (
            <View style = {styles.container}>
                <Text>Setting Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});