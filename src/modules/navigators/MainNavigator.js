import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import AuthCheckScreen from '../AuthCheck/view'
import LoginScreen from '../LoginScreen/view'
import DashboardScreen from '../DashboardScreen/view'
import ActionsScreen from '../ActionsScreen/view'
import Entypo from 'react-native-vector-icons/Entypo';
import color from '../../../config/res'
import VehicleDetailsScreen from '../VehicleDetailsScreen/view'
import TaskDetailsScreen from '../TaskDetailsScreen/view'
import PatientDetailsScreen from '../PatientDetailsScreen/view'
import ClinicalQueryScreen from '../ClinicalQueryScreen/view'
import VehicleCheckForm from '../VehicleCheckForm/view'
import EquipmentCheckForm from '../EquipmentCheckForm/view'
import IncidentReportForm from '../IncidentReportForm/view'

const iconSize = 25;

const DashboardStack = createStackNavigator({
    DashboardScreen: { screen: DashboardScreen },
    VehicleDetailsScreen: { screen: VehicleDetailsScreen },
    TaskDetailsScreen: { screen: TaskDetailsScreen },
    PatientDetailsScreen: { screen: PatientDetailsScreen },
    ClinicalQueryScreen: { screen: ClinicalQueryScreen },
},
    {
        initialRouteName: 'DashboardScreen'
    })

const ActionStack = createStackNavigator({
    ActionsScreen: { screen: ActionsScreen },
    EquipmentCheckForm: { screen: EquipmentCheckForm },
    VehicleCheckForm: { screen: VehicleCheckForm },
    IncidentReportForm: { screen: IncidentReportForm }
})

const MainApp = createBottomTabNavigator({
    DashboardStack: {
        screen: DashboardStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Entypo
                    reverse
                    name='home'
                    type='font-awesome'
                    color={tintColor}
                    size={iconSize}
                />
            )
        }
    },
    ActionStack: {
        screen: ActionStack,
        navigationOptions: {
            tabBarLabel: 'Actions',
            tabBarIcon: ({ tintColor }) => (
                <Entypo
                    reverse
                    name='text-document'
                    type='font-awesome'
                    color={tintColor}
                    size={iconSize}
                />
            )
        }
    }
},
    {
        initialRouteName: 'DashboardStack',
        tabBarOptions: {
            showLabel: true,
            showIcon: true,
            activeTintColor: color.backgroundColor,
        }
    }
)

const MainNavigator = createSwitchNavigator({
    AuthCheckScreen: { screen: AuthCheckScreen },
    LoginScreen: { screen: LoginScreen },
    MainApp: { screen: MainApp }
},
    {
        initialRouteName: 'AuthCheckScreen'
    });

const App = createAppContainer(MainNavigator);

export default App;