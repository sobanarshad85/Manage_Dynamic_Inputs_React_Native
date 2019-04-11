//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Picker } from 'react-native';
import styles from './style'
import color from '../../../config/res'


// create a component
class ActionsScreen extends Component {
    constructor() {
        super()
        this.state = {
            dynamicInputs: [
                {
                    id: 1,
                    type: 'TextInput',
                    response: null,
                },
                {
                    id: 2,
                    type: 'picker',
                    response: null,
                },
                {
                    id: 3,
                    type: 'Text',
                    response: null,
                },
                {
                    id: 3,
                    type: 'TextInput',
                    response: null,
                },
            ]
        }
    }

    change = (text, key) => {
        console.warn('this is id: ' + key)
        console.warn('this is text: ' + text)
        let updateChanging = this.state.dynamicInputs;
        updateChanging[key - 1].response = text;
        this.setState({
            dynamicInputs: updateChanging
        })
    }
    render() {
        return (
            <ScrollView>
                <View style={{}}>
                    <Text>ActionsScreensss</Text>
                    <TextInput style={{ borderWidth: 1 }} onChangeText={(text) => this.setState({ input: text })} />
                    <Text>{this.state.input}</Text>
                    <Text>Test Starts Here. . .</Text>
                    <Text>{this.state.language}</Text>

                    {
                        this.state.dynamicInputs.map((it, key) => {
                            return (
                                it.type === 'TextInput' || it.type === 'picker' ?
                                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: 200, width: '80%', borderRadius: 20 }}>
                                        <Text>{it.response}</Text>
                                    </View>
                                    :
                                    <View><Text>this is not input</Text></View>
                            )
                        })
                    }

                    {
                        this.state.dynamicInputs.map((it, key) => {
                            return (
                                it.type === 'TextInput' ?
                                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: 200, width: '80%', borderRadius: 20 }}>
                                        <TextInput
                                            style={styles.input1}
                                            name="tweet"
                                            maxLength={350}
                                            autoFocus={false}
                                            placeholder={'Write Message Here'}
                                            multiline={true}
                                            placeholderTextColor='red'
                                            onChangeText={(text) => {
                                                this.change(text, it.id)
                                            }}
                                        />
                                    </View>
                                    :
                                    it.type === 'picker' ?
                                        <Picker
                                            selectedValue={this.state.dynamicInputs[it.id-1].response}
                                            style={{ height: 50, width: 200 }}
                                            onValueChange={(itemValue, itemIndex) =>
                                                this.change(itemValue, it.id)
                                            }>
                                            <Picker.Item label="Java" value="java" />
                                            <Picker.Item label="JavaScript" value="javaS" />
                                            <Picker.Item label="C#" value="C#" />
                                        </Picker>
                                        :
                                        <View><Text>not an input</Text></View>
                            )
                        })
                    }

                </View>

                <Text>Item Picker</Text>

                <Picker
                    selectedValue={this.state.language}
                    style={{ height: 50, width: 200 }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ language: itemValue })
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>

            </ScrollView>
        );
    }
}

//make this component available to the app
export default ActionsScreen;
