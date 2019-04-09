//import liraries
import React, { Component } from 'react';
import { View, Text, AppRegistry, StyleSheet, ActivityIndicator, Image } from 'react-native';
import styles from './style'
import color from '../../../config/res'
import AsyncStorage from '@react-native-community/async-storage';

// create a component

class AuthCheckScreen extends Component {
    constructor() {
        super()
        this.state = {
            loading: false
        }

        this.loadApp();
    }

    loadApp = async () => {
        // AsyncStorage.setItem('userToken', 'hey')
        // AsyncStorage.removeItem('userToken')
        const userToken = await AsyncStorage.getItem('userToken')

        this.props.navigation.navigate(userToken ? 'MainApp' : 'LoginScreen')

    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                />
                <ActivityIndicator size="large" color={color.backgroundColor} />
            </View>
        );
    }
}

//make this component available to the app
export default AuthCheckScreen;
