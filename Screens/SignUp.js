import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import firebase from "firebase";
import { auth } from "../Configurations/Firebase";
import { getAuth, sendEmailVerification } from "firebase/auth";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { user } from "../redux/reducers/user";
 
export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");






  const HandleSignUP = () => {
     if(!FirstName){
      alert('Last Name Field cannot be empty ')
      return null
     }
     if(!LastName){
       alert('Last Name Field cannot be empty ')
       return null
     }
    auth
    .createUserWithEmailAndPassword(email , password)
    .then(() => {
    firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
      console.log("Email verification is sent")
  });
      firebase.firestore().collection("users")
      .doc(firebase.auth().currentUser.uid)
      .set({
        email,
        FirstName,
        LastName
      })

    })
    .catch(error => alert(error.message))
  }







 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo.png")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          onChangeText={(FirstName) => setFirstName(FirstName)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
          onChangeText={(LastName) => setLastName(LastName)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
     
 
      <TouchableOpacity style={styles.loginBtn} onPress={HandleSignUP}>
        <Text style={styles.loginText}>Create Account</Text>
      </TouchableOpacity>
        <Text style={styles.TextForgot}>Already got an account ? <Text onPress={()=> navigation.navigate('Login')} style={styles.SignUptext}>Sign in</Text></Text>
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
    marginTop: 40,
    backgroundColor: "#e8500e",
    color : 'white'
  },
  TextForgot :  {
      marginTop : 10,
  },
  SignUptext: {
     color : '#e8500e'
  },
  loginText :  {
    color : 'white'
  }
});