import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
const screen1_b = () => {
    return (
        <LinearGradient colors={['rgba(199, 244, 246, 1)',
            'rgba(209, 244, 246, 1)',
            'rgba(229, 244, 245, 1)',
            'rgba(0, 204, 249, 1)']} style={styles.container}>
            <Image source={require('../assets/lock.png')} style={{
                width: 105,
                height: 117,
                flexShrink: 0
            }}></Image>
            <Text style={styles.forgetPasswordText}>FORGET {"\n"}PASSWORD</Text>
            <Text style={styles.resetPasswordInstructions}>Provide your account’s email for which you want to reset your password</Text>
            <View style={styles.emailInputContainer}>
                <TextInput style={styles.emailInput} placeholder='Email'></TextInput>
            </View>
            <TouchableOpacity style={styles.nextButton}>
                <Text style={styles.nextButtonText}>NEXT</Text>
            </TouchableOpacity>
        </LinearGradient >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }, forgetPasswordText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    }, resetPasswordInstructions: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }, emailInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    }, emailInput: {
        width: '100%',
        backgroundColor: '#C4C4C4',
        height: 45,
        paddingHorizontal: 25,
    }, nextButton: {
        width: '100%',
        height: 45,
        backgroundColor: '#E3C000',
        justifyContent: 'center',
        alignItems: 'center'
    }, nextButtonText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default screen1_b