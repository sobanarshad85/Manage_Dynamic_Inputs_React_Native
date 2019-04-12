//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, CheckBox, ScrollView, Picker, ActivityIndicator } from 'react-native';
import styles from './style'
import colors from '../../../config/res'

// create a component
class PatientDetailsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Patient Details',
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
            loading: true,
            dynamicInputs: [
                {
                    id: 0,
                    heading: 'Patient Name',
                    type: 'textInput',
                    response: null,
                },
                {
                    id: 1,
                    heading: 'Patient Father Name',
                    type: 'textInput',
                    response: null,
                },
                {
                    id: 2,
                    heading: 'Incident Description',
                    type: 'textInput',
                    response: null,
                },
                {
                    id: 3,
                    heading: 'Destination Point',
                    type: 'textInput',
                    response: null,
                },
                {
                    id: 4,
                    heading: 'Patient First Aid Report',
                    type: 'textInput',
                    response: null,
                },
                {
                    id: 5,
                    type: 'picker',
                    response: null,
                    heading: 'Patient Status',
                    list: [
                        { item: "None" },
                        { item: "Alive" },
                        { item: "Dead" },
                        { item: "Near To Death" },
                        { item: "Don't Know Yet" }
                    ]
                },
                {
                    id: 6,
                    type: 'picker',
                    heading: 'Nearest Hospital',
                    response: null,
                    list: [
                        { item: "None" },
                        { item: "Ganga Ram" },
                        { item: "Butt Hospital" },
                        { item: "Sheikh Zayd" },
                        { item: "Don't Know Yet" }
                    ]
                },
                {
                    id: 7,
                    type: 'checkBox',
                    response: false,
                    heading: 'Patient Alive',
                },
                {
                    id: 8,
                    type: 'checkBox',
                    response: false,
                    heading: 'First Aid',
                },
                {
                    id: 9,
                    type: 'checkBox',
                    response: false,
                    heading: 'Reached To Hospital',
                },
            ]
        }
    }

    componentDidMount() {
        this.setState({
            loading: false
        })
    }

    change = (text, key) => {
        // console.warn('this is id: ' + key)
        // console.warn('this is text: ' + text)
        // console.warn('this is type: ' + this.state.dynamicInputs[key].type)
        let updateChanging = this.state.dynamicInputs;
        updateChanging[key].response = text;
        this.setState({
            dynamicInputs: updateChanging
        })
    }
    onCheckboxChange = (text, key) => {
        // console.warn('this is id: ' + key)
        // console.warn('this is type: ' + this.state.dynamicInputs[key].type)
        // console.warn('this is response: ' + this.state.dynamicInputs[key].response)
        let updateChanging = this.state.dynamicInputs;
        updateChanging[key].response = !this.state.dynamicInputs[key].response;
        this.setState({
            dynamicInputs: updateChanging
        })
    }
    render() {
        let { loading } = this.state
        return (


            loading ?
                <View>
                    <ActivityIndicator size="large" color={colors.backgroundColor} />
                </View>
                :


                < ScrollView >

                    <View style={styles.vehicleShortDetailsSection}>
                        <View style={styles.headerMainStyle}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={styles.headerTextView}>
                                    <Text style={styles.headerText}>Clinical Form</Text>
                                </View>
                            </View>
                        </View>
                        {
                            this.state.dynamicInputs.map((it, key) => {
                                return (
                                    it.type === 'textInput' ?
                                        // {/* Input Section */}
                                        <View style={{ width: '100%', marginTop: 10, }} key={key}>
                                            <Text style={{ fontWeight: 'bold', color: 'black' }}>{this.state.dynamicInputs[it.id].heading}</Text>
                                            <TextInput
                                                style={styles.input1}
                                                name={this.state.dynamicInputs[it.id].id}
                                                // maxLength={350}
                                                autoFocus={false}
                                                placeholder={this.state.dynamicInputs[it.id].heading}
                                                // multiline={true}
                                                placeholderTextColor={colors.backgroundColor}
                                                onChangeText={(text) => {
                                                    this.change(text, it.id)
                                                }}
                                            />
                                        </View>
                                        :
                                        //  {/* DropDown/picker section */}
                                        it.type === 'picker' ?
                                            <View style={{ width: '100%', marginTop: 10, }} key={key}>
                                                <Text style={{ fontWeight: 'bold', color: 'black' }}>{this.state.dynamicInputs[it.id].heading}</Text>
                                                <Picker
                                                    selectedValue={this.state.dynamicInputs[it.id].response}
                                                    // style={{ height: 50, width: 200 }}
                                                    onValueChange={(itemValue, itemIndex) =>
                                                        this.change(itemValue, it.id)
                                                    }>
                                                    {
                                                        this.state.dynamicInputs[it.id].list.map((li, index) => {
                                                            return (
                                                                <Picker.Item label={li.item} value={li.item} key={index} />
                                                            )
                                                        })
                                                    }
                                                </Picker>
                                            </View>

                                            :
                                            it.type === 'checkBox' ?
                                                //   {/* CheckBox section */}
                                                <View style={{ width: '100%', marginTop: 10, }} key={key}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={{ flex: 3, fontWeight: 'bold', color: 'black', justifyContent: 'center', alignSelf: 'center' }}>{this.state.dynamicInputs[it.id].heading}</Text>
                                                        <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
                                                            <CheckBox value={this.state.dynamicInputs[it.id].response}
                                                                onChange={(text) => {
                                                                    this.onCheckboxChange(text, it.id)
                                                                }
                                                                }
                                                            />
                                                        </View>
                                                    </View>
                                                </View>
                                                :
                                                null
                                )
                            })
                        }

                    </View>

                </ScrollView >
        );
    }
}

// define your styles


//make this component available to the app
export default PatientDetailsScreen;
