//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Picker, CheckBox, Button } from 'react-native';
import styles from './style'
import colors from '../../../config/res'


// create a component
class ActionsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Action List',
            headerTitleStyle: {
                // fontSize: 25,
                textAlign: 'center',
                // flex:1
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
                <Text>This is action screen</Text>
                <Button onPress={() => this.props.navigation.navigate('VehicleCheckForm')} title='Vehicle Check Form' />
                <Button onPress={() => this.props.navigation.navigate('EquipmentCheckForm')} title='Equipment Check Form' />
                <Button onPress={() => this.props.navigation.navigate('IncidentReportForm')} title='Incident Report Form' />
            </View>
        );
    }
}

//make this component available to the app
export default ActionsScreen;
