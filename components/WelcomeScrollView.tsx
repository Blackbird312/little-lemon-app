import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Colors } from "../constants/Colors"

const WelcomeScrollView = () => {

   return (
    <>
    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
    <Image 
      source={require('../assets/images/lemon-logo.png')}  
      style={{height:100, width:100, alignSelf:'center'}}
      resizeMode='contain'
    />
    <Text
    style={{
        padding: 10,
        fontSize: 30,
        color: '#EDEFEE',
    }}>
      Little Lemon
    </Text>
    </View>
    <ScrollView indicatorStyle={"white"}>
    <Text
    style={{
      fontSize: 20,
      padding: 20,
      marginVertical: 8,
      color: '#EDEFEE',
      textAlign: 'center',
    }}>
      Little Lemon is a charming neighborhood bistro that serves simple food
      and classic cocktails in a lively but casual environment. We would love
      to hear more about your experience with us!
    </Text>
    </ScrollView></>
  )
}

export default WelcomeScrollView

const Styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor:Colors.app.primary
    },
    title : {
      fontSize: 30, 
      textAlign: 'center', 
      padding:50, 
      color:"#fff"
    },
    content:{
      textAlign: 'center', 
      padding:20, 
      color:"#fff", 
      fontSize:20
    }
  });