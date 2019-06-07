import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: () => {
            return <Ionicons name="ios-home" size = {25}/>
        },
    };

    openMenu = () => {
        this.props.navigation.openDrawer();
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text>Home Screen</Text>
                <Text>{ this.props.navigation.getParam('title') }</Text>
                <Button
                    title = "Go to Setting"
                    onPress = { () => this.props.navigation.navigate('Setting', {
                        title : 'Hello!'
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