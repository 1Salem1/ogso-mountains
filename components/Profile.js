import React, { Component, useEffect, useState } from 'react';
import firebase from 'firebase';
import { AntDesign } from '@expo/vector-icons'; 
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import ProfileTab from './Profile/ProfileTab';
import { StatusBar } from "expo-status-bar";
import { withNavigation } from 'react-navigation';
import AppLoading from 'expo-app-loading';








 function Profile  ({navigation}) {


  function capitalizeFirstLetter(string) {

    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const [Name , setName] = useState('Dear Martian')
  const [imageUrl , setImageUrl]= useState(null) 
  const [display , setDisplay ] = useState(false)


  const fetchDate = () => {
    const user = firebase.auth().currentUser;
    var firebaseRef =firebase.database().ref('users')
    firebaseRef.once("value" ,function(snapshot){
      var data = snapshot.val()
      for(let i in data){
        if (data[i].email.toLowerCase() == user.email.toLowerCase()){
         setImageUrl(data[i].profile_picture)
          setName(capitalizeFirstLetter(data[i].first_name) + ' ' + capitalizeFirstLetter(data[i].last_name))
          setDisplay(true)
        } 
      }
    })
  }


useEffect(()=>{
fetchDate()

}, [])




if(display ){
  return (
    <View style={styles.container}>
      
      <AntDesign onPress={() => {navigation.goBack() }} style={{top : 50 , right : 160 , width : 30}}
   name="left" size={24} color="black" />
         <StatusBar  style='dark' />
      <View>
    
         <View style={{top : 130}} >
         <View style={styles.bgCopy}>
         <Image style={styles.avatar}   source={{
        uri: `${imageUrl}`
      }}
    />
       
         </View>
         <Text style={styles.welcomeBack}>Welcome back</Text>
         <Text style={styles.flenBen}>{Name}</Text>
         </View>

      </View>
       
        <ProfileTab   />
    </View>
  );
}
else {
  return (
    <AppLoading/>
  )
}
 

   
 
  }


const styles = StyleSheet.create({
 
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
  
  },
  bgCopy: {
    shadowColor: 'rgba(91, 77, 188, 0.18)',
    shadowOffset: { width: 12, height: 0 },
    shadowRadius: 32,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    bottom : 50
  },
  container :{
    backgroundColor: '#ffffff',
    flex: 1,
    backgroundColor: "#fff",
    alignContent :'center',
    alignItems: "center",
    justifyContent: "center",
  
  }
  ,
  welcomeBack : {
    top : -60,
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 36,
  },
  flenBen : {
    top  : -50,
    height: 37,
    color: '#eb5c26',
    fontFamily: 'Museo',
    fontSize: 30,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 36,
    marginBottom : 110
  }
});



export default  withNavigation (Profile)