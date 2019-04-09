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

const iconSize = 25;

const DashboardStack = createStackNavigator({
    DashboardScreen: { screen: DashboardScreen },
    VehicleDetailsScreen: { screen:VehicleDetailsScreen },
    TaskDetailsScreen: { screen:TaskDetailsScreen }
},
    {
        initialRouteName: 'DashboardScreen'
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
    ActionsScreen: {
        screen: ActionsScreen,
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