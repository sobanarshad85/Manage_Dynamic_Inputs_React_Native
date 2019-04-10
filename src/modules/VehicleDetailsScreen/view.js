//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, ScrollView, ActivityIndicator } from 'react-native';
import styles from './style'
import colors from '../../../config/res'
import Entypo from 'react-native-vector-icons/Entypo';

// create a component
class VehicleDetailsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Vehicle Details',
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
            loading: true
        }
    }

    componentDidMount() {
        let receivedData = this.props.navigation.state.params.VehicleData
        this.setState({
            vehicleData: receivedData,
            loading: false
        })
    }

    navigateBackToDashboard = () => {
        this.props.navigation.goBack()
    }

    vehicleDetailsMethod = () => {
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
                        this.state.vehicleData.map((vd, index) => {
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
                    {/* Vehicle Go Back Button */}
                    <View style={styles.VehicleMoreButtonMain}>
                        <TouchableOpacity onPress={this.navigateBackToDashboard} >
                            <View style={styles.VehicleMoreButtonMain}>
                                <View style={styles.vehicleMoreButtonIcon}>
                                    <Entypo
                                        reverse
                                        name='chevron-thin-left'
                                        type='font-awesome'
                                        color={colors.white}
                                        size={20}
                                    />
                                </View>
                                <Text style={styles.vehicleMoreButtonText}>Complete Vehicle Details</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
            <ScrollView>
                {this.state.loading ?

                    <View style={styles.container}>
                        <ActivityIndicator size="large" color={colors.backgroundColor} />
                    </View>

                    :
                    this.vehicleDetailsMethod()}
            </ScrollView>
        );
    }
}

//make this component available to the app
export default VehicleDetailsScreen;
