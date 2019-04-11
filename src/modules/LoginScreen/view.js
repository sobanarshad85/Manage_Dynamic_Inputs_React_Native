//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style'
import colors from '../../../config/res'

// create a component
class LoginSceen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{flex:1,justifyContent:'center',alignItems:'center',marginBottom:50}}>
                    <Text style={styles.welcome}>Medicore</Text>

                    <TextInput
                        style={styles.input}
                        name="userName"
                        placeholder='User Name '
                        placeholderTextColor={colors.backgroundColor}
                        onChangeText={(userName) => this.setState({ userName })}
                    // value={this.state.userName}
                    />
                    <TextInput
                        style={styles.input}
                        name='password'
                        placeholderTextColor={colors.backgroundColor}
                        placeholder='Password'
                        onChangeText={(password) => this.setState({ password })}
                    // value={this.state.password}
                    />

                    <TouchableOpacity style={styles.button} onPress={this.loginButton} >
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>

                    <View style={styles.textCont}>
                        <Text style={styles.simpleText}>Forgotten your login details?</Text>
                        <TouchableOpacity>
                            <Text style={styles.boldText}> Get help with signing in.</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                {/* <View style={{ flexDirection: 'column', height: '100%' }}>
                    <View style={styles.container}>
                        <Text style={styles.welcome}>Medicore</Text>

                        <TextInput
                            style={styles.input}
                            name="userName"
                            placeholder='User Name '
                            placeholderTextColor={colors.backgroundColor}
                            onChangeText={(userName) => this.setState({ userName })}
                        // value={this.state.userName}
                        />
                        <TextInput
                            style={styles.input}
                            name='password'
                            placeholderTextColor={colors.backgroundColor}
                            placeholder='Password'
                            onChangeText={(password) => this.setState({ password })}
                        // value={this.state.password}
                        />

                        <TouchableOpacity style={styles.button} onPress={this.loginButton} >
                            <Text style={styles.buttonText}>Log In</Text>
                        </TouchableOpacity>

                        <View style={styles.textCont}>
                            <Text style={styles.simpleText}>Forgotten your login details?</Text>
                            <TouchableOpacity>
                                <Text style={styles.boldText}> Get help with signing in.</Text>
                            </TouchableOpacity>

                        </View> */}

                {/* <View style={styles.cont}> */}
                {/* <View style={styles.line}></View> */}
                {/* <Text>OR</Text> */}
                {/* <View style={styles.line}></View> */}
                {/* </View> */}
                {/* <TouchableOpacity style={styles.button} onPress={this.awin} >
                            <Text style={styles.buttonText}>Log in as facebook</Text>
                        </TouchableOpacity> */}

                {/* <View style={styles.line1}></View>

                        <View style={styles.footer}>
                            <Text style={styles.simpleText}>Don't have an account? </Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                                <Text style={styles.boldText}>Sign up.</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line2}></View> */}
                {/* </View>
                </View> */}
            </ScrollView>
        );
    }
}

//make this component available to the app
export default LoginSceen;
