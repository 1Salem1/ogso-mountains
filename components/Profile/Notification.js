import { View, Text , StyleSheet , TextInput ,TouchableOpacity} from 'react-native'
import React , {useState , useEffect} from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 
import firebase from 'firebase';
export default function Notification() {

  const user = firebase.auth().currentUser;
  console.log(user)








    
  const onLogout = () => {
    firebase.auth().signOut().then((x) => {
      console.log(x)
      }).catch((error) => {
       console.log(error)
      });
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification</Text>
       <Text style={{ width: 146,
    height: 15,
    right: 80,
    color: '#666666',
    fontFamily: 'Museo',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 14,}}>Notification settings</Text>
        <Text>Allow The MARTIAN to send notifications</Text>
      <View style={{ marginTop : 40, flexDirection: 'row' }}>
        <TouchableOpacity  
        
        
        style={{
            width: 159,
            height: 50,
            right : 30,
            borderRadius: 5,
            alignItems:'center',
            flexDirection: 'row',
            justifyContent:'center'
        }} ><FontAwesome5 name="door-open" size={24} color="black"  />
          <Text style={{  width: 58,
    height: 21,
    color: '#666666',
    fontFamily: 'Poppins - Regular',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    marginLeft : 5,
    textAlign: 'left',
    letterSpacing: -0.14,
    lineHeight: 20,}}>
        Sign Out</Text>
        </TouchableOpacity >
        <TouchableOpacity 
        style={{
          width: 159,
          height: 50,
          borderRadius: 5,
          backgroundColor: '#eb5c26',
          alignItems:'center',
          justifyContent:'center'
        }} >
          
          <Text style={{
            color: '#ffffff',
            fontFamily: 'Museo',
            fontSize: 14,
            fontWeight: '400',
            fontStyle: 'normal',
            textAlign: 'center',
            lineHeight: 31.7,
          
          }}>Save Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  foulen: {

    color: '#000000',
    fontFamily: 'Museo',
    fontSize: 13,
    fontWeight :'100',
    marginLeft : 10,
   
   
  
  },
  container: {
    marginTop: 16,


    alignItems: 'center',
    paddingBottom: 5,
    shadowColor: 'rgba(91, 77, 188, 0.18)',
    shadowOffset: { width: 12, height: 0 },
    shadowRadius: 32,
    borderRadius: 25,
    height: 380,

  },
  title: {
    color: '#000000',
    fontFamily: 'Museo',
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 36,
    right: 110,
    marginBottom: 10
  },
  TextInputContainer: {
    width: 335,
    height: 45,
    borderRadius: 5,
    borderColor: '#cccccc',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    margin: 15,
    justifyContent:'center'
  },
  child: {
    backgroundColor: '#00000000'
  }

})