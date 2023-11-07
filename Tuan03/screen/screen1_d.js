import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const screen1_d = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.loginText}>LOGIN</Text>
            <TextInput style={[styles.input, styles.inputEmail]} placeholder='Email' />
            <TextInput style={[styles.input, styles.inputPassword]} secureTextEntry={true} placeholder='Password' />
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>
            <Text>When you agree to terms and conditions</Text>
            <Text style={styles.forgotPasswordLink}>For got your password?</Text>
            <Text>Or login with</Text>

            <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={[styles.socialButtonFacebook, styles.socialButton]}>
                    <Image source={require('../assets/facebook.png')} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.socialButtonZalo, styles.socialButton]}>
                    <Image source={require('../assets/zalo.png')} style={{ width: 24, height: 30, color: '#fff' }} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.socialButtonGoogle, styles.socialButton]}>
                    <Image source={require('../assets/google.png')} style={{ width: 35, height: 35 }} />
                </TouchableOpacity>
            </View>
        </View >
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
        backgroundColor: '#d8efde'
    }, loginText: {
        fontSize: 25,
        fontWeight: 'bold'
    }
    , input: {
        width: '100%',
        backgroundColor: '#C4C4C44D',
        height: 54,
        fontSize: 20,
        paddingHorizontal: 10
    }, loginButton: {
        width: '100%',
        height: 45,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c34e3b',
    }, loginButtonText: {
        color: '#d8efde',
        fontSize: 20,
        fontWeight: 'bold'
    }, forgotPasswordLink: {
        color: '#5D25FA'
    }, socialButtonsContainer: {
        flexDirection: 'row'
    }, socialButton: {
        width: 110,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    }, socialButtonFacebook: {
        backgroundColor: '#25479B',
    }, socialButtonZalo: {
        backgroundColor: '#0F8EE0'
    }, socialButtonGoogle: {
        backgroundColor: '#fff'
    }
})

export default screen1_d