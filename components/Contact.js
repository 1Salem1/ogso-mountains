import { View, Text, StyleSheet, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';
import Mailer from 'react-native-mail';
import Communications from "react-native-communications";
import TopBar from './bar/topBar';
import firebase from 'firebase';
import { useState , useEffect} from 'react';
export default function Contact({navigation}) {

    const [Name, onChangeName] = React.useState(null);
    const [Email, onChangeEmail] = React.useState(null);
    const [Subject, onChangesubject] = React.useState(null);
    const [Message, onChangeMessage] = React.useState(null);
    const [imageUrl , setImageUrl]= useState(null) 

    const fetchDate = () => {
        const user = firebase.auth().currentUser;
        var firebaseRef =firebase.database().ref('users')
        firebaseRef.once("value" ,function(snapshot){
          var data = snapshot.val()
          for(let i in data){
            if (data[i].email.toLowerCase() == user.email.toLowerCase()){
             setImageUrl(data[i].profile_picture)
              return true 
            } 
          }
        })
      }
    
    
    useEffect(()=>{
    fetchDate()
    
    })



   const  handleEmail = () => {
    Communications.email(
        ["salem.d@ogso.eu", "salem.dahmani345@gmail.com"],   //<---- destination emails
        null,                      // <--- CC email
        null,                      // <--- bcc   
        Subject,            //<--- Subject
        
        `From ${Name},
         
        ${Message}`   //<--- Body Text
      );
    }



    return (
        
        <View style={styles.container}>
            <View style={{flexDirection:'row' , top : 20}}>
            <AntDesign onPress={() => {navigation.navigate('Home') }} style={{  right: 150,    top : 30, }} name="left" size={24} color="black" />
           <TouchableOpacity style={{left : 150}} onPress={() => {navigation.navigate('profile') }} >
           <Image style={styles.avatar}   source={{
          uri: `${imageUrl}`
        }}
      />
           </TouchableOpacity>
    
            </View>
             <TopBar/>
               <StatusBar  style='dark' />
            <View style={{ marginTop: 70 }}>
               
                <Text style={styles.title}>Contact us </Text>

            </View>
            <ScrollView
             
             Vertical
             height ='100%'
             showsVerticalScrollIndicator ={false}
             showsHorizontalScrollIndicator={false}
             contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{     justifyContent: 'center',  alignItems: 'center', }}>
                <Image  style={{bottom : 20 , marginTop : 20}} source={require('../assets/images/Mascot.png')} />
                </View>
          
            <Text style={styles.inOur}>
                In our FAQs section you’ll likely find the answer to most questions. Everything from technical to shipping to OGSO history, philosophy and mission.
              
            </Text>
            <Text style={[styles.inOur , {bottom : 45}]}>
                If you can’t find the answer to your question in our FAQs , please send us a message.

            </Text>
          
                <SafeAreaView style={{bottom : 80}}>


                    <View style={styles.input}>
                        <TextInput
                            style={styles.TextStyle}
                            onChangeText={onChangeName}
                            placeholder="Your Name"
                            placeholderTextColor='black'
                            value={Name}
                        />
                   
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.TextStyle}
                            onChangeText={onChangeEmail}
                            value={Email}
                            placeholderTextColor='black'
                            placeholder="Your Email"
                        />
                     
                    </View>
                    <View style={styles.input}>

                        <TextInput
                            style={styles.TextStyle}
                            onChangeText={onChangesubject}
                            value={Subject}
                            placeholder="Subject"
                            placeholderTextColor='black'

                        />
                       
                    </View>

                    <View style={[styles.input, { height: 300  ,overflow:'hidden'}]}>
                        <TextInput
                            multiline = {true}
                            numberOfLines = {4}
                            style={[styles.TextStyle, { bottom: 120 }]}
                            onChangeText={onChangeMessage}
                            value={Message}
                            placeholder="Your Message"
                            placeholderTextColor='black'
                        />
                       
                    </View>
                    <View >
                        <TouchableOpacity
                            style={styles.loginScreenButton}
                            onPress={handleEmail}
                            underlayColor='#fff'>
                            <Text style={styles.loginText}>Send</Text>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
              
            </ScrollView>
            <View style={{height : 100}}>

</View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignContent: 'center',
        alignItems: "center",
        justifyContent: 'center',
    },
    title: {
        bottom: 20,
        marginBottom :20,
        color: '#000000',
        fontFamily: 'Museo',
        fontSize: 28,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'left',
        right : 90,
        lineHeight: 36,
    },
    inOur: {
        alignContent: 'center',
        alignItems: "center",
        justifyContent: 'center',
        width: 320,
        height: 137,
        color: '#666666',
        fontSize: 14,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'center',
        bottom: 10,
        lineHeight: 23,
    },
    input: {
        width: 345,
        height: 45,
        borderRadius: 5,
        borderColor: '#cccccc',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        marginBottom: 30,
        flex: 1,
        flexDirection: 'row',
    },
    TextStyle: {
        color: 'black',
        fontFamily: 'Muso',
        fontSize: 13,
        fontWeight: '700',
        fontStyle: 'normal',
        textAlign: 'left',
        left: 30,
        width: 320,
    },
    loginScreenButton: {
        width: 159,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#eb5c26',
        left: 170,
        position :'absolute'
    },
    loginText: {
        color: '#fff',
        textAlign: 'center',
        alignItems:'center',
        justifyContent :'center',
        fontWeight :'bold',
        top : 12
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        top : 20,
      
      }
})