//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback, ActivityIndicator, TextInput, Button, Image } from 'react-native';
import styles from './style'
import colors from '../../../config/res'
import Entypo from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Upload Incident Image',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

// create a component
class ClinicalQueryScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Clinical Query',
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
            avatarSource: null
        }
    }

    uploadImage = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
            }
        });
    }
    render() {
        return (
            <ScrollView>
                <View style={{ marginTop: 30 }}>
                    <TextInput
                        style={styles.input1}
                        name='incidentReport'
                        // maxLength={350}
                        autoFocus={false}
                        placeholder='Incident Report'
                        multiline={true}
                        placeholderTextColor={colors.backgroundColor}
                        onChangeText={text => this.setState({ text })}
                    />
                    <Text>{this.state.text}</Text>
                    <Button style={{ marginTop: 10 }} onPress={this.uploadImage} title='Upload Incident Image' />

                    <Image
                        style={{ width: 200, height: 200 }}
                        source={this.state.avatarSource}
                    />
                </View>
            </ScrollView>
        );
    }
}

//make this component available to the app
export default ClinicalQueryScreen;
