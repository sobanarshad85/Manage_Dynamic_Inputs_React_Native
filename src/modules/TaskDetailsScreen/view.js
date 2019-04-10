//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback, ActivityIndicator, } from 'react-native';
import styles from './style'
import colors from '../../../config/res'
import Entypo from 'react-native-vector-icons/Entypo';

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

    constructor() {
        super()
        this.state = {
            taskData: [],
            loading: true,
        }
    }

    componentDidMount() {
        let receivedData = this.props.navigation.state.params.taskData
        this.setState({
            taskData: receivedData,
            loading: false
        })
    }

    transportDetailsMethod = () => {
        return (
            <View>
                <View style={styles.transportDetailsMain}>
                    <Text style={styles.transportDetailsMainText}>Transport Details</Text>
                </View>

                {
                    this.state.taskData.map((item, index) => {
                        return (
                            <View key={index} style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: 'center', backgroundColor: item.id % 2 == 0 ? colors.listFirst : colors.listSecond }} >

                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={styles.transportDetailsBodyText}>{item.Item}</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={{ padding: 5, color: colors.backgroundColor }}>{item.Status}</Text>
                                </View>
                            </View>
                        )
                    })
                }


            </View>
        )
    }

    description = () => {
        return (
            <View style={{ marginBottom: 30 }}>
                <View style={styles.description}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center', color: colors.white }}>Description</Text>
                </View>
                <View style={{ alignSelf: 'center', width: '90%', }}>
                    <Text style={{ paddingHorizontal: 5, paddingTop: 5 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                </View>
            </View>
        )
    }

    navigateToPatientForm = () => {
        this.props.navigation.navigate('PatientDetailsScreen')
    }

    navigateToClinicalQuery = () => {
        this.props.navigation.navigate('ClinicalQueryScreen')
    }
    render() {
        return (

            this.state.loading ?
                <View style={styles.container}>
                    <ActivityIndicator size="large" color={colors.backgroundColor} />
                </View>
                :
                <ScrollView>

                    {/* Transport Details Section */}
                    {this.transportDetailsMethod()}


                    {/* Description  */}
                    {this.description()}

                    <View style={styles.buttonMain}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <TouchableOpacity onPress={this.navigateToPatientForm} style={styles.buttonTouchable} >
                                <Text style={styles.buttonText}>Patients Form</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <TouchableOpacity onPress={this.navigateToClinicalQuery} style={styles.buttonTouchable} >
                                <Text style={styles.buttonText}>Clinical Query</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
        );
    }
}

//make this component available to the app
export default TaskDetailsScreen;
