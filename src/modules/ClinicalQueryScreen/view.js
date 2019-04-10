//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './style'
import colors from '../../../config/res'

// create a component
class ClinicalQueryScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ClinicalQueryScreen</Text>
            </View>
        );
    }
}

//make this component available to the app
export default ClinicalQueryScreen;
