import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import React ,  {useEffect, useState} from 'react'
import firebase from 'firebase';


export default function Account() {
  const user = firebase.auth().currentUser;
 // console.log(user)
  const [FirstName,setFirstName] = useState();
  const [LastName,setLastName] = useState();
  const [email, setEmail] =useState()
  const [name , setName] =useState()
  const [id , setId] = useState()
  useEffect(() => {
    fetchDate()
  }, [])





function fetchDate(){
  var firebaseRef =firebase.database().ref('users')
  firebaseRef.once("value" ,function(snapshot){
    var data = snapshot.val()
    for(let i in data){
      if (data[i].email.toLowerCase() == user.email.toLowerCase()){
          setFirstName(data[i].first_name)
          setLastName(data[i].last_name)
          setEmail(data[i].email)
          setId(data[i].id_user)
          break
      } 
    }
  })
}
const SaveProfile =() => {
  user.updateProfile({
    displayName: FirstName +' ' +LastName,
  })
  user.updateEmail(email).then(() => {
    // Update successful
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });
  firebase.database().ref('users').child(id).remove();

  firebase.database().ref('users/'+ user.uid).set({
    id_user: user.uid,
    first_name: FirstName,
    last_name: LastName,
    email: email,
  })

}
    
  const onLogout = () => {
    firebase.auth().signOut().then((x) => {
    //  console.log(x)
      }).catch((error) => {
     //  console.log(error)
      });
}






  


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>

      <View style={styles.child}>
        <View style={styles.TextInputContainer}>
          <TextInput  style={styles.foulen}
          value={FirstName}
          onChangeText={(FirstName) => setFirstName(FirstName)}
          />
        </View>
        <View style={styles.TextInputContainer}>
          <TextInput style={styles.foulen} 
           value={LastName}
           onChangeText={(LastName) => setLastName(LastName)}
           />
        </View>
        <View style={styles.TextInputContainer}>
          <TextInput style={styles.foulen}
           value={email} 
           onChangeText={(email) => setEmail(email)}
           />
        </View>
      


      </View>
      <View style={{ marginTop : 40, flexDirection: 'row' }}>
        <TouchableOpacity  onPress={onLogout}
        
        
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
        <TouchableOpacity  onPress={SaveProfile}
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
    right: 125,
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