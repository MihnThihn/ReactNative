import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import RadioForm from 'react-native-simple-radio-button'

const screen1_e = () => {
    const [chosenOption, setChosenOption] = useState(0);
    const options = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.registerText}>REGISTER</Text>
            <TextInput style={styles.input} placeholder='Name'></TextInput>
            <TextInput style={styles.input} placeholder='Phone'></TextInput>
            <TextInput style={styles.input} placeholder='Email'></TextInput>
            <TextInput style={styles.input} placeholder='Password'></TextInput>
            <TextInput style={styles.input} placeholder='Birthday'></TextInput>

            <View style={styles.radioContainer}>
                <RadioForm
                    radio_props={options}
                    initial={0}
                    onPress={(option) => setChosenOption(option)}
                    buttonSize={13}
                    formHorizontal={true}
                    labelStyle={{ fontSize: 18 }}
                    style={styles.radioGroup}
                />
            </View>

            <TouchableOpacity style={styles.registerButton} >
                <Text style={styles.registerButtonText}>REGISTER</Text>
            </TouchableOpacity>
            <Text style={styles.policy}>When you agree to terms and conditions</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#d8efde',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: "100 %"
    }, registerText: {
        fontSize: 25,
        fontWeight: 'bold'
    }, input: {
        width: '100%',
        height: 54,
        backgroundColor: '#C4C4C44D',
        paddingHorizontal: 10,
        fontSize: 18,
    }, radioContainer: {
        width: '100%'
    }, radioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginRight: 120
    }, registerButton: {
        width: '100%',
        height: 45,
        borderRadius: 2,
        backgroundColor: '#E53935',
        alignItems: 'center',
        justifyContent: 'center'
    }, registerButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#d8efde'
    }
})

export default screen1_e