import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const screen2_b = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Group.png')} style={styles.logo} />
            <View style={styles.inputContainer}>
                <View style={styles.inputNameContainer}>
                    <Image source={require('../assets/user.png')} style={styles.icon} />
                    <TextInput style={styles.input} placeholder='Please input user name' placeholderTextColor={'#C4C4C4'} ></TextInput>
                </View>
                <View style={styles.inputPasswordContainer}>
                    <Image source={require('../assets/lock3.png')} style={styles.icon} />
                    <TextInput style={styles.input} placeholder='Please input password' placeholderTextColor={'#C4C4C4'} secureTextEntry={true}></TextInput>
                </View>
            </View>

            <View style={styles.lineAndTextContainer}>
                <View style={styles.line}></View>
                <Text style={styles.otherMethodsText}>Other login methods</Text>
                <View style={styles.line}></View>
            </View>

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>

            <View style={styles.socialButtonsContainer}>
                <TouchableOpacity >
                    <Image source={require('../assets/Group 8.png')} style={{ width: 74, height: 74 }}></Image>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image source={require('../assets/Group 9.png')} style={{ width: 74, height: 74 }}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialFacebookButton}>
                    <Image source={require('../assets/brandico_facebook.png')} style={{ width: 32, height: 45 }}></Image>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }, logo: {
        width: 112.188,
        height: 107.199
    }, inputContainer: {
        width: '100%',
        justifyContent: 'space-around'
    }, icon: {
        position: 'absolute',
        left: 10,
        width: 32,
        height: 32
    }, inputNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }, inputPasswordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }, input: {
        width: '100%',
        height: 54,
        fontSize: 18,
        paddingRight: 10,
        paddingLeft: 60,
        borderWidth: 1,
        marginVertical: 10,
        borderColor: '#F2F2F2',
        borderBottomColor: '#C4C4C4',
        outlineStyle: 'none'
    }, lineAndTextContainer: {
        flexDirection: ' row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }, line: {
        flex: 1,
        height: 1,
        backgroundColor: '#0E18F5'
    }, otherMethodsText: {
        fontSize: 18,
        marginHorizontal: 3,
    }, loginButton: {
        borderRadius: 10,
        backgroundColor: '#386FFC',
        width: '100%',
        height: 48,
        alignItems: 'center',
        justifyContent: 'center'
    }, loginButtonText: {
        fontSize: 18,
        color: '#fff'
    }, socialButtonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    }, socialFacebookButton: {
        width: 74,
        height: 74,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3A579C',
        borderRadius: 10
    }
})


export default screen2_b