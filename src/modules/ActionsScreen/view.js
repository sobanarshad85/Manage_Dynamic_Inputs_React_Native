//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './style'
import color from '../../../config/res'


// create a component
class ActionsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ActionsScreen</Text>
            </View>
        );
    }
}

//make this component available to the app
export default ActionsScreen;
