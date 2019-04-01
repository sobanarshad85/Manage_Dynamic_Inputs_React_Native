import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    nav=()=>{
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <View>
                <Text> Profile </Text>
                <Button onPress={this.nav} title='Go to Home' />
            </View>
        );
    }
}

export default ProfileScreen
