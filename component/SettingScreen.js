import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SettingScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Setting',
        drawerIcon: ({ focused, horizontal, tintColor }) => {
            return <Ionicons name="ios-settings" size = {25}/>
        },
        drawerPosition:'right',
        drawerWidth: 10,
        drawerBackgroundColor:'green'
    };

    openMenu = () => {
        this.props.navigation.openDrawer();
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text>Setting Screen</Text>
                <Text>{ this.props.navigation.getParam('title') }</Text>
                <Button
                    title = 'GO TO HOME'
                    onPress = { () => this.props.navigation.navigate('Home', {
                        title : 'HELLO'
                    }) }
                />
                <Text></Text>
                <Button
                    title = "OPEN MENU"
                    onPress = { () => this.openMenu() }
                />
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
