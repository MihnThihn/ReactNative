import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const screen1_a = () => {
    return (
        <LinearGradient
            colors={['rgba(199, 244, 246, 1)',
                'rgba(209, 244, 246, 1)',
                'rgba(229, 244, 245, 1)',
                'rgba(0, 204, 249, 1)']} style={styles.container}>

            <View style={styles.circle}></View>
            <Text style={styles.sloganText}>GROW {"\n"}YOUR BUSINESS</Text>
            <Text style={styles.descriptionText}>
                We will help you to grow your business {"\n"}using online server
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        SIGN UP
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: "100 %",
    }, circle: {
        width: 140,
        height: 140,
        borderWidth: 15,
        borderRadius: "50%"
    }, sloganText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25
    }, descriptionText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
    , button: {
        width: 119,
        height: 48,
        backgroundColor: '#E3C000',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
    , buttonText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});


export default screen1_a