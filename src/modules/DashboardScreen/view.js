//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import styles from './style'
import colors from '../../../config/res'
import Ant from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo';



// create a component
class DashboardScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Dashboard',
            headerTitleStyle: {
                // fontSize: 25,
                textAlign: 'center',
                // flex:1
            },
            headerTintColor: colors.white,
            headerStyle: {
                backgroundColor: colors.backgroundColor,
            },
            headerRight: (
                <View style={{ marginRight: 20 }}>
                    <TouchableOpacity onPress={navigation.getParam('captureScreen')}>
                        <View style={styles.headerNotificationView}>
                            <Text style={styles.headerNotificationText}>23</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ),
        }
    };

    constructor(props) {
        super(props)
        this.state = {
            vehicleData: [
                {
                    id: 1,
                    Item: 'Tyres',
                    Status: 'Good'
                },
                {
                    id: 2,
                    Item: 'Mirros',
                    Status: 'Good'
                },
                {
                    id: 3,
                    Item: 'Maintenace',
                    Status: 'Perfect'
                },
                {
                    id: 4,
                    Item: 'Tyres',
                    Status: 'Good'
                },
                {
                    id: 5,
                    Item: 'Mirros',
                    Status: 'Good'
                },
                {
                    id: 6,
                    Item: 'Maintenace',
                    Status: 'Perfect'
                },
                {
                    id: 7,
                    Item: 'Tyres',
                    Status: 'Good'
                },
                {
                    id: 8,
                    Item: 'Mirros',
                    Status: 'Good'
                },
                {
                    id: 9,
                    Item: 'Maintenace',
                    Status: 'Perfect'
                },
                {
                    id: 10,
                    Item: 'Tyres',
                    Status: 'Good'
                },
                {
                    id: 11,
                    Item: 'Tyres',
                    Status: 'Good'
                },
                {
                    id: 12,
                    Item: 'Mirros',
                    Status: 'Good'
                },
                {
                    id: 13,
                    Item: 'Maintenace',
                    Status: 'Perfect'
                },
                {
                    id: 14,
                    Item: 'Tyres',
                    Status: 'Good'
                },
                {
                    id: 15,
                    Item: 'Mirros',
                    Status: 'Good'
                },
                {
                    id: 16,
                    Item: 'Maintenace',
                    Status: 'Perfect'
                },
                {
                    id: 17,
                    Item: 'Tyres',
                    Status: 'Good'
                },
                {
                    id: 18,
                    Item: 'Mirros',
                    Status: 'Good'
                },
                {
                    id: 19,
                    Item: 'Maintenace',
                    Status: 'Perfect'
                },
                {
                    id: 20,
                    Item: 'Tyres',
                    Status: 'Good'
                },
            ],
            taskData: [
                {
                    id: 1,
                    name: 'Rescue Mission',
                    mission: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text e"
                },
                {
                    id: 2,
                    name: 'Fire',
                    mission: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ips"
                },
                {
                    id: 3,
                    name: 'Accident',
                    mission: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ips'
                }
            ]
        }
    }

    navigateToVehicleDetails = () => {
        this.props.navigation.navigate('VehicleDetailsScreen', { 'VehicleData': this.state.vehicleData })
    }

    vehicleDetailsMethod = () => {
        let filteredDetails = this.state.vehicleData.filter(item => {
            return item.id <= 5
        })
        return (
            <View>
                <View style={styles.vehicleShortDetailsSection}>

                    {/* Vehicle Header */}
                    <View style={styles.headerMainStyle}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={styles.headerTextView}>
                                <Text style={styles.headerText}>Item</Text>
                            </View>

                            <View style={styles.headerTextView}>
                                <Text style={styles.headerText}>Status</Text>
                            </View>
                        </View>
                    </View>

                    {/* Vehicle Body */}
                    {
                        filteredDetails.map((vd, index) => {
                            return (
                                <View style={styles.vehicleBody} key={index}>
                                    <View style={{ backgroundColor: vd.id % 2 == 0 ? colors.listFirst : colors.listSecond, height: '100%' }}>
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <View style={styles.headerTextView}>
                                                <Text style={styles.vehicleText}>{vd.Item}</Text>
                                            </View>

                                            <View style={styles.headerTextView}>
                                                <Text style={styles.vehicleText}>{vd.Status}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                    {/* Vehicle See More Button */}
                    <View style={styles.VehicleMoreButtonMain}>
                        <TouchableOpacity onPress={this.navigateToVehicleDetails} >
                            <View style={styles.VehicleMoreButtonMain}>
                                <Text style={styles.vehicleMoreButtonText}>Complete Vehicle Details</Text>
                                <View style={styles.vehicleMoreButtonIcon}>
                                    <Entypo
                                        reverse
                                        name='chevron-thin-right'
                                        type='font-awesome'
                                        color={colors.white}
                                        size={20}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    navigateToTaskDetails = () => {
        this.props.navigation.navigate('TaskDetailsScreen')
    }

    taskDetailsMethod = () => {
        return (
            <View>
                {
                    this.state.taskData.map((td, index) => {
                        return (
                            <TouchableWithoutFeedback onPress={this.navigateToTaskDetails} key={index}>
                                <View style={styles.taskDataMain} >
                                    <View style={{ flex: 15 }}>
                                        <View style={{ marginLeft: 5 }}>
                                            <Text style={{ fontSize: 18, color: colors.backgroundColor }}>{td.name}</Text>
                                        </View>
                                        <View style={{ marginLeft: 5 }}>
                                            <Text style={{ color: 'black' }}>{td.mission}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.taskIcon}>
                                        <Entypo
                                            reverse
                                            name='chevron-thin-right'
                                            type='font-awesome'
                                            color={colors.backgroundColor}
                                            size={25}
                                        />
                                    </View>

                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </View>
        )
    }

    render() {
        return (
            <ScrollView>

                {/* Vehicle Short Details Section */}
                {this.vehicleDetailsMethod()}

                {/* Task Short Details Section */}
                <View style={{ marginTop: 10 }}>
                    {this.taskDetailsMethod()}

                </View>

            </ScrollView>
        );
    }
}



//make this component available to the app
export default DashboardScreen;
