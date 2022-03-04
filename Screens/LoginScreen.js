import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { auth } from '../Configurations/Firebase'
import FontAwesome from "react-native-vector-icons/FontAwesome";
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

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var provider = new firebase.auth.FacebookAuthProvider();

const LoginWithFacebook = () => {


  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });
}



  const HandleLogin = () => {

    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user
        console.log(user.email)
      })
      .catch(error => console.log(error.message))
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

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text onPress={() => navigation.navigate('forgetpassword')} style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={HandleLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtnFacebook} onPress={LoginWithFacebook}>
        <FontAwesome style={{  marginTop : 20 }} name='facebook' size={20} color='#fff' />
        <Text style={{  color: '#fff', fontWeight: 'bold' }}>
      
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtnGoogle}>
        <FontAwesome style={{  marginTop : 20 }} name='google' size={20} color='#fff' />
        <Text style={{  color: '#fff', fontWeight: 'bold' }}>
      
        </Text>
      </TouchableOpacity>
   
      <Text style={styles.TextForgot}>Don't have an account <Text onPress={() => navigation.navigate('signup')} style={styles.SignUptext}>Sign up?</Text></Text>
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
  loginBtnGoogle : {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#d34836",
    color: 'white'
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#e8500e",
    color: 'white'
  }, 
  loginBtnFacebook: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#1877f2",
    color: 'white'
  },
  TextForgot: {
    marginTop: 10,
  },
  SignUptext: {
    color: '#e8500e'
  },
  loginText: {
    color: 'white',
    fontSize: 16
  }
});