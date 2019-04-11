//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './style'
import colors from '../../../config/res'

// create a component
class PatientDetailsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Patient Details',
            headerTitleStyle: {
                fontSize: 15
            },
            headerTintColor: colors.white,
            headerStyle: {
                backgroundColor: colors.backgroundColor,
            },
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>PatientDetailsScreen</Text>
            </View>
        );
    }
}

// define your styles


//make this component available to the app
export default PatientDetailsScreen;
