import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import firebase from "firebase";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function ForgetPassword({ navigation }) {
  const [email, setEmail] = useState("");

  const HandleForgetPassword =() => {
  firebase.auth().sendPasswordResetEmail(email)
  .then(sucess => {
      alert(sucess)
  })
  .catch(e => {
      alert (e)
  })

  }

 
  return (
      
    <View style={styles.container}>
        
      <Image style={styles.image} source={require("../assets/logo.png")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <TouchableOpacity onPress={HandleForgetPassword} style={styles.loginBtn}>
        <Text style={styles.loginText}>Send a mail verification</Text>
      </TouchableOpacity>
      
        <Text style={styles.TextForgot}>Back to the  <Text onPress={()=> navigation.navigate('Login')} style={styles.SignUptext}>Login</Text></Text>
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
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    textAlign: 'center'
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
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