//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import styles from './style'
import colors from '../../../config/res'
import Ant from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo';
import firebase from 'react-native-firebase';



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
                        <View style={styles.headerNotificationView}>
                            <Text style={styles.headerNotificationText}>{navigation.getParam('captureScreen')}</Text>
                        </View>
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
                    Name: 'Rescue Mission',
                    Item: 'Destination',
                    Status: 'St. Road, Off Gulberg',
                    Mission: 'Rescue a dying man'
                },
                {
                    id: 2,
                    Name: 'Fire',
                    Item: 'PickUp ',
                    Status: 'Motorways Kala Shah Kaku',
                    Mission: 'Rescue a heart attack patient',
                },
                {
                    id: 3,
                    Name: 'Accident',
                    Item: 'Infectious Status',
                    Status: 'N/A',
                    Mission: 'Lorem Ipsum is a good site'
                },
                {
                    id: 4,
                    Name: 'Fire',
                    Item: 'Special Medical Requirements',
                    Status: "This is dummy text from lorem ipsum, this is the largest platform of getting your dummy text, to test your application, any many more thigns",
                    Mission: 'To get dummmy data'
                },
                {
                    id: 5,
                    Name: 'Critical Patient',
                    Item: 'Number Of Passengers',
                    Status: 5,
                    Mission: 'Lorem Ipsum Website is for dummy data to manipulate'
                },
                {
                    id: 6,
                    Name: 'Rescue Mission',
                    Item: 'Destination',
                    Status: 'St. Road, Off Gulberg',
                    Mission: 'Rescue a dying man'
                },
            ]
        }
    }

//     componentWillUnmount() {
//         this.notificationListener;
//         this.notificationOpenedListener;
//       }
    
//       //1
//       async checkPermission() {
//         const enabled = await firebase.messaging().hasPermission();
//         if (enabled) {
//           this.getToken();
//         } else {
//           this.requestPermission();
//         }
//       }
//       showAlert(title, body) {
//   Alert.alert(
//     title, body,
//     [
//         { text: 'OK', onPress: () => console.log('OK Pressed') },
//     ],
//     { cancelable: false },
//   );
// }
    
//       async createNotificationListeners() {
//         /*
//         * Triggered when a particular notification has been received in foreground
//         * */
//         this.notificationListener = firebase.notifications().onNotification((notification) => {
//           const { title, body } = notification;
//           console.log('onNotification:');
//           // this.showAlert(title, body);
//           alert('message is: '+body);
    
//           const localNotification = new firebase.notifications.Notification({
//             sound: 'sampleaudio',
//             show_in_foreground: true,
//           })
//             .setNotificationId(notification.notificationId)
//             .setTitle(notification.title)
//             // .setSubtitle(notification.subtitle)
//             .setBody(notification.body)
//             // .setData(notification.data)
//             .android.setChannelId('fcm_default_channel') // e.g. the id you chose above
//             // .android.setSmallIcon('@drawable/ic_launcher') // create this icon in Android Studio
//             .android.setColor('#000000') // you can set a color here
//             .android.setPriority(firebase.notifications.Android.Priority.High);
            
    
//           firebase.notifications()
//             .displayNotification(localNotification)
//             .catch(err => console.error(err));
//         });
    
    
//         const channel = new firebase.notifications.Android.Channel('fcm_default_channel', 'Demo app name', firebase.notifications.Android.Importance.High)
//           .setDescription('Demo app description')
//           .setSound('sampleaudio.mp3');
//         firebase.notifications().android.createChannel(channel);
    
//         /*
//         * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
//         * */
//         this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
//           const { title, body } = notificationOpen.notification;
//           console.log('onNotificationOpened:');
//           console.warn('open oye')
//           this.showAlert(title, body);
//         });
    
//         /*
//         * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
//         * */
//         const notificationOpen = await firebase.notifications().getInitialNotification();
//         if (notificationOpen) {
//           const { title, body } = notificationOpen.notification;
//           console.log('getInitialNotification:');
//           this.showAlert(title, body);
//         }
//         /*
//         * Triggered for data only payload in foreground
//         * */
//         this.messageListener = firebase.messaging().onMessage((message) => {
//           //process data message
//           console.log(JSON.stringify(message));
//         });
//       }
    
//       //3
//       async getToken() {
//         let fcmToken = await AsyncStorage.getItem('fcmToken');
//         if (!fcmToken) {
//           fcmToken = await firebase.messaging().getToken();
//           if (fcmToken) {
//             // user has a device token
//             console.log('fcmToken:', fcmToken);
//             await AsyncStorage.setItem('fcmToken', fcmToken);
//           }
//         }
//         console.log('fcmToken:', fcmToken);
//       }
    
//       //2
//       async requestPermission() {
//         try {
//           await firebase.messaging().requestPermission();
//           // User has authorised
//           this.getToken();
//         } catch (error) {
//           // User has rejected permissions
//           console.log('permission rejected');
//         }
//       }

   async componentDidMount() {
        this.props.navigation.setParams({ captureScreen: this.state.taskData.length });
        // this.checkPermission();
        // this.createNotificationListeners(); //add this line
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
        this.props.navigation.navigate('TaskDetailsScreen', { 'taskData': this.state.taskData })
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
                                            <Text style={{ fontSize: 18, color: colors.backgroundColor, }}>{td.Name}</Text>
                                        </View>
                                        <View style={{ marginLeft: 5 }}>
                                            <Text style={{ color: 'black' }}>{td.Mission}</Text>
                                        </View>
                                        <View style={{ marginLeft: 5 }}>
                                            <Text style={{ color: 'black', paddingBottom: 5 }}>{td.Status}</Text>
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
