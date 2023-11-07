import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import SquareOTPInput from '../components/SquareOTPInput'

const screen1_c = () => {
    return (
        <LinearGradient
            colors={['rgba(199, 244, 246, 1)',
                'rgba(209, 244, 246, 1)',
                'rgba(229, 244, 245, 1)',
                'rgba(0, 204, 249, 1)']} style={styles.container}>
            <Text style={styles.codeHeaderText}>CODE</Text>
            <Text style={styles.verificationCodeText}>VERIFICATION</Text>
            <Text style={styles.otpInstructionsText}>Enter ontime password sent on{"\n"}++849092605798</Text>
            <SquareOTPInput />
            <TouchableOpacity style={styles.verifyButton}>
                <Text style={styles.verifyButtonText}>VERIFY CODE</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: "100 %",
    }, codeHeaderText: {
        fontSize: 60,
        fontWeight: 'bold'
    }, verificationCodeText: {
        fontSize: 20,
        fontWeight: 'bold'
    }, otpInstructionsText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }, verifyButton: {
        width: '100%',
        height: 45,
        backgroundColor: '#E3C000',
        justifyContent: 'center',
        alignItems: 'center'
    }, verifyButtonText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default screen1_c