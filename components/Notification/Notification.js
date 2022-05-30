import { View, Text, StyleSheet, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';
import firebase from 'firebase';
import firebaseApp from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState , useEffect} from 'react';
import { NotificationListner , requestUserPermission , getFCMToken} from '../../Configurations/push_notification_helper';
export default function Contact({navigation}) {
  const user = firebase.auth().currentUser;
    const [imageUrl , setImageUrl]= useState(null) 
    const [myloop, setnotification ] = useState([{key :key, title : 'salem' , body : 'dahmani'}])
    const [arr , setArr] = useState()
     const [key,setKeys] = useState(0)

    var  saved = []



const saveDate = async (myArray) => {

  try {
    await AsyncStorage.setItem('@MySuperStore:key', JSON.stringify(myArray));
  } catch (error) {
    // Error saving data
  }
  
  try {
    const myArray = await AsyncStorage.getItem('@MySuperStore:key');
    if (myArray !== null) {
      // We have data!!
      console.log("FROM ASYNC STORAGE",JSON.parse(myArray));
    }
  } catch (error) {
   console.log(error)
  }




}






    const Notifictions = async  () => {
      firebaseApp.messaging().onMessage(response => {


      
    
        if (Platform.OS !== 'ios') {
           setKeys(key+1)
           
          setnotification([...myloop, {key : key ,title : JSON.stringify(response.notification.title), body : JSON.stringify(response.notification.body)}]) 
       
    // console.log(myloop)
     saveDate(myloop)


        }

      });
    }


    const fetchDate = () => {
       
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
    Notifictions()
    },[])



   const notification = myloop.map((item , index) => {
return(
    <View 
    key={index}
    style={styles.notifications}>
     <View style={{padding:10}} >
     <Image style={{height : 50 , width : 50}}source={require('../../assets/icons/Notification.png')} />
       </View>
       <View style={{
         padding : 20
       }}>
       <Text style={{
          
         
             color: '#000000',
             fontFamily: 'Museo',
             fontSize: 14,
             fontWeight: '400',
             fontStyle: 'normal',
             textAlign: 'left',
            
             lineHeight: 14,
       }}>{item.title}</Text>
      <Text style={{
         
    
          color: '#a1a1a1',
          fontFamily: 'Museo',
          fontSize: 13,
          fontWeight: '400',
          fontStyle: 'normal',
          textAlign: 'left',
          lineHeight: 14,
      }}>{item.body}</Text>
       </View>
    
    </View>
  
)

   })




    return (
        
        <View style={styles.container}>
            <View style={{flexDirection:'row' , top : 20}}>
            <AntDesign onPress={() => {navigation.navigate('Home') }} style={{  right: 150,    top : 30, }} name="left" size={24} color="black" />
           <TouchableOpacity style={{ left : 150,}} onPress={() => {navigation.navigate('profile') }}  >
           <Image   style={styles.avatar}   source={{ uri: `${imageUrl}`
        }}
      />
           </TouchableOpacity>
    
            </View>
               <StatusBar  style='dark' />
            <View style={{ marginTop: 70 }}>
               
                <Text style={styles.title}>Notification </Text>

            </View>
            <ScrollView
             
             Vertical
             height ='100%'
             showsVerticalScrollIndicator ={false}
             showsHorizontalScrollIndicator={false}
             contentContainerStyle={{ flexGrow: 1 }}>
               {notification}
                <View style={{marginBottom:10}}></View>
            </ScrollView>
            <View>

                <TouchableOpacity  style={{bottom : 80}}>
                    <View style={{  width: 113,height: 50,borderRadius: 15,borderColor: '#ffd6c7',borderStyle: 'solid',justifyContent :'center',borderWidth: 1,backgroundColor: '#ffffff'}}>
                        <Text style={{ color: '#666666',fontFamily: 'Museo',fontSize: 14,fontWeight: '400',fontStyle: 'normal',textAlign: 'center',lineHeight: 22,}}>Delete all</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    notifications :{
        borderRadius: 10,
        borderColor: '#ffd6c7',
        borderStyle: 'solid',
        borderWidth: 1,
        width: 335,
        flexDirection:'row',
        marginBottom:15
      },
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
        width: 335,
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
        fontFamily: 'Museo',
        fontSize: 13,
        fontWeight: '400',
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
        alignSelf:'center',
        top : 20,
      
      }
})