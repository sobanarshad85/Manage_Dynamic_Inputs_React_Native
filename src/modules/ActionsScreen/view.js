//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Picker, CheckBox } from 'react-native';
import styles from './style'
import color from '../../../config/res'


// create a component
class ActionsScreen extends Component {
    constructor() {
        super()
        this.state = {
            dynamicInputs: [
                {
                    id: 0,
                    type: 'TextInput',
                    response: null,
                },
                {
                    id: 1,
                    type: 'picker',
                    response: null,
                },
                {
                    id: 2,
                    type: 'Text',
                    response: null,
                },
                {
                    id: 3,
                    type: 'TextInput',
                    response: null,
                },
                {
                    id: 4,
                    type: 'CheckBox',
                    response: false,
                },
                {
                    id: 5,
                    type: 'TextInput',
                    response: null,
                },
            ]
        }
    }

    change = (text, key) => {
        console.warn('this is id: ' + key)
        console.warn('this is text: ' + text)
        console.warn('this is type: ' + this.state.dynamicInputs[key].type)
        let updateChanging = this.state.dynamicInputs;
        updateChanging[key].response = text;
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
                                it.type === 'TextInput' || it.type === 'picker' || it.type === 'CheckBox' ?
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
                                            selectedValue={this.state.dynamicInputs[it.id].response}
                                            style={{ height: 50, width: 200 }}
                                            onValueChange={(itemValue, itemIndex) =>
                                                this.change(itemValue, it.id)
                                            }>
                                            <Picker.Item label="Java" value="java" />
                                            <Picker.Item label="JavaScript" value="javaS" />
                                            <Picker.Item label="C#" value="C#" />
                                        </Picker>
                                        :
                                        it.type === 'CheckBox' ?
                                            <CheckBox value={this.state.dynamicInputs[it.id].response}
                                                onChange={() => {
                                                    console.warn('this is id: ' + it.id)
                                                    console.warn('this is type: ' + this.state.dynamicInputs[it.id].type)
                                                    console.warn('this is response: ' + this.state.dynamicInputs[it.id].response)
                                                    let updateChanging = this.state.dynamicInputs;
                                                    updateChanging[it.id].response = !this.state.dynamicInputs[it.id].response;
                                                    this.setState({
                                                        dynamicInputs: updateChanging
                                                    },()=>console.warn('this is original'+this.state.dynamicInputs[it.id].response))
                                                }}
                                            />
                                            :
                                            <View><Text>this is not an input</Text></View>
                            )
                        })
                    }

                </View>

                <CheckBox value={this.state.check} onChange={() => this.setState({ check: !this.state.check })} />


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
