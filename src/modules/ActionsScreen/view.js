//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Picker, CheckBox } from 'react-native';
import styles from './style'
import colors from '../../../config/res'


// create a component
class ActionsScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>This is action screen</Text>
            </View>
        );
    }
}

//make this component available to the app
export default ActionsScreen;
