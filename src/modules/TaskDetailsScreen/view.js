//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styles from './style'
import colors from '../../../config/res'

// create a component
class TaskDetailsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Task1',
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
            <ScrollView>
                // Transport Details
                <View style={{ marginTop: 30, width: '90%', justifyContent: 'center', alignSelf: 'center', backgroundColor: colors.backgroundColor }}>

                </View>

            </ScrollView>
        );
    }
}

//make this component available to the app
export default TaskDetailsScreen;
