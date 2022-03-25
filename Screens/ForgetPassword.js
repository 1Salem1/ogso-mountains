import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import firebase from "firebase"; 
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from "react-native";
 
export default function ForgetPassword({ navigation }) {
  const [email, setEmail] = useState("");

  const HandleForgetPassword =() => {
    firebase.auth().sendPasswordResetEmail(email)
    .then(sucess => {
        alert('Check your email')
    })
    .catch(e => {
        alert (e)
    })

  }

 
  return (
      
    <View style={styles.container}>
          <ImageBackground source={require('../assets/Backgrounds/Sign-In.png')} resizeMode="cover" style={styles.image}>
          <AntDesign style={{top : 50 , right : 170 }}onPress={navigation.goBack} name="left" size={24} color="black" />
          <Text style={{ top :110 , "color": 'black', "fontSize": 30, "fontWeight": "400", "fontStyle": "normal", "fontFamily": "Esoris", "textAlign": "center", "lineHeight": 38.5 }}>{`FORGET PASSWORD`}</Text>
          <Text style={{ top : 130,  color : 'grey' }}>We will send you a reset link by email</Text>
        <View style={{flex : 1 , justifyContent :'center' }}>
        <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <TouchableOpacity  style={styles.loginBtn}>
        <Text onPress={HandleForgetPassword} style={styles.loginText}>Send a reset link</Text>
      </TouchableOpacity>

        </View>
    
      
       </ImageBackground>
     
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    alignItems:'center'
  },
 
  inputView: {
    width: 308,
    height: 50,
    borderRadius: 5,
    borderColor: '#cccccc',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    marginBottom :30
  },
 
  TextInput: {
    
    height: 50,
    flex: 1,
    left : 30
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: 308,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#e8500e",
    color : 'white'
  },
  TextForgot :  {
      marginTop : 10,
  },
  SignUptext: {
     color : '#e8500e'
  },
  loginText : {
     color : 'white',
     fontSize :16
  }
});