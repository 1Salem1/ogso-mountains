import { View, Text , StyleSheet, Button, Image , TouchableOpacity} from 'react-native'
import React from 'react'
import firebase from 'firebase'
import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'


export default function Home({navigation}) {
  
  const [Name , setName] = useState('Dear Martian')
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
          setName(capitalizeFirstLetter(data[i].first_name) + ' ' + capitalizeFirstLetter(data[i].last_name))
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
      <Text style={styles.hiFoulen}><Text style={styles.Foulen}>Hi </Text>{Name}</Text>
        <Text style={styles.Text}>Let’s go for a new Adventure</Text>
        
        <View>

        </View>
        
      </View>
      <TouchableOpacity style={{ left : 150}} onPress={() => {navigation.navigate('profile') }}   >
      <Image 
         style={styles.avatar}   source={{
          uri: `${imageUrl}`
        }}
      />
      </TouchableOpacity>

   
      </View>

    
    </View>
  )
}
else {
    return( <AppLoading/> )
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
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
    width: 60,
    height: 60,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    alignSelf:'center',
    top : 50,
  
  },
  topContainer : {

    flexDirection : 'row'
  }
  });


  