import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Button } from 'react-native';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    nav=()=>{
        this.props.navigation.navigate('Profile')
    }

    render() {
        return (
            <View>
                <Text> Home </Text>
                <Button onPress={this.nav} title='Go to Profile'/>
            </View>
        );
    }
}

export default HomeScreen;