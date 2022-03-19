import React from 'react'
import {ImageBackground, StyleSheet, View, Image} from 'react-native'

function WelcomeScreen() {
    return(
        <ImageBackground source={require("../../app/assets/bg.jpg")} style={styles.background}>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
            <Image style={styles.logo} source= {require("../../app/assets/IT_KMITL_Logo_UPDATE.png")} />
        </ImageBackground>
    ); 
}

const styles = StyleSheet.create({
    background: { 
        flex:1, 
        justifyContent: "flex-end"
    },

    loginButton:{
        width: "100%",
        height: 70,
       backgroundColor: "#fc5c65",
    },

    registerButton:{
        width: "100%",
        height: 70,
       backgroundColor: "#4ecdc4",
    },

    logo:{
        width: 100,
        height: 100,
       position: "absolute",
       top: 70,
    },    
    
})

export default WelcomeScreen; 
