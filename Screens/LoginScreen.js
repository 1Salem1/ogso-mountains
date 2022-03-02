import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {auth} from '../Configurations/Firebase'
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

  const HandleLogin = () => {
   
    auth
    .signInWithEmailAndPassword(email , password)
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
        <Text onPress={()=> navigation.navigate('forgetpassword')} style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity  onPress={HandleLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      
        <Text style={styles.TextForgot}>Don't have an account <Text onPress={()=> navigation.navigate('signup')} style={styles.SignUptext}>Sign up?</Text></Text>
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
  loginText : {
     color : 'white',
     fontSize :16
  }
});