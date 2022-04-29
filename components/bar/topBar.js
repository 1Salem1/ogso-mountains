import { View, Text , StyleSheet, Button, Image} from 'react-native'
import React from 'react'
import firebase from 'firebase'
import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'
import { AntDesign } from '@expo/vector-icons';

export default function TopBar({navigation}) {
  

  const [imageUrl , setImageUrl]= useState(null) 
  const [display , setDisplay ] = useState(false)


  function capitalizeFirstLetter(string) {

    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  const fetchDate = () => {
    const user = firebase.auth().currentUser;
    var firebaseRef =firebase.database().ref('users')
    firebaseRef.once("value" ,function(snapshot){
      var data = snapshot.val()
      for(let i in data){
        if (data[i].email.toLowerCase() == user.email.toLowerCase()){
         setImageUrl(data[i].profile_picture)
          setDisplay(true)
          return true 
        } 
      }
    })
  }


useEffect(()=>{
fetchDate()

})




if(display){
  return (
    <View style={styles.container }  >
      <View style={styles.topContainer}>
      <View style={styles.smallContainer}>
          <StatusBar style='dark'/>
     
        
  
        
      </View>
  
      </View>

    
    </View>
  )
}
else {
    return( <AppLoading/> )
}
}

const styles = StyleSheet.create({
 
    hiFoulen : {
      color: '#eb5c26',
      fontFamily: 'Museo',
      fontSize: 18,
      fontStyle: 'normal',
      textAlign: 'left',
      lineHeight: 36,

    },
    Foulen : {
      color: 'black',
      fontFamily: 'Museo',
      fontSize: 18,
      fontWeight: '400',
      fontStyle: 'normal',
      textAlign: 'left',
      lineHeight: 36,

    },
    smallContainer : {
      top : 57,
      left : 19,
    },
    Text : {
        bottom : 10,
        color: '#666666',
        fontSize: 13,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'left',
        lineHeight: 36,
    
    },
     
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    alignSelf:'center',
    left : 150,
    top : 20,
  
  },
  topContainer : {

    flexDirection : 'row'
  }
  });


  