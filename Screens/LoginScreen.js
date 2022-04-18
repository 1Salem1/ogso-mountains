import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import uuid from 'react-native-uuid';
import firebase from "firebase";
import * as Facebook from 'expo-facebook';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { GoogleSignin, statusCodes } from 'react-native-google-signin';

GoogleSignin.configure({
  // scopes: ['https://www.googleapis.com/auth/drive.readonly'], 
   webClientId: '1047529689642-62qj96fckel3rc8e2014svlul8k9cl4u.apps.googleusercontent.com', 
   offlineAccess: true, 
   forceConsentPrompt: true, 
  
 });


import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView, 
  Platform
} from "react-native";






export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var database = firebase.database();




  const exist = (email) => {
    var firebaseRef =firebase.database().ref('users')
    firebaseRef.once("value" ,function(snapshot){
      var data = snapshot.val()
      for(let i in data){
        if (data[i].email.toLowerCase() == email.toLowerCase()){
           return false
        } 
        else {
          return true
        }
      }
    })
  }









  const HandleLoginWithGoogle = async () => {
   
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        const Token = await GoogleSignin.getTokens()
        const user = firebase.auth.GoogleAuthProvider.credential(Token.idToken)
     
        const GoogleProfileData = await firebase.auth().signInWithCredential(user)
       // console.log(GoogleProfileData)
          let email_user = GoogleProfileData.additionalUserInfo.profile.email
          let first_name =GoogleProfileData.additionalUserInfo.profile.family_name
          let last_name = GoogleProfileData.additionalUserInfo.profile.given_name
          let location = 'No Location for this Provider'
          let imageUrl = GoogleProfileData.additionalUserInfo.profile.picture
          let id = uuid.v4()
          let provider = 'Google'
  
          const dbRef = firebase.database().ref();
       
            if (exist(email_user)) {
  
              return 0
            } else {
              database.ref('users/' + id ).set({
                id_user: id,
                first_name: first_name,
                last_name: last_name,
                email: email_user,
                profile_picture: imageUrl,
                location: location,
                provider: provider
              })
            }

      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
       //  console.log(error)
        } else if (error.code === statusCodes.IN_PROGRESS) {
         // console.log(error)
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
         // console.log(error)
        } else {
        //  console.log(error)
        }
      }
  
    
    
    }
    
   


  





  const HandleLoginWithFacebook = async () => {
    try {
      await Facebook.initializeAsync({
        appId: '2813714962259392',
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile']
        });
      if (type === 'success') {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);  // Set persistent auth state
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        const facebookProfileData = await firebase.auth().signInAndRetrieveDataWithCredential(credential);  // Sign in with Facebook credential

        // Do something with Facebook profile data
        // OR you have subscribed to auth state change, authStateChange handler will process the profile data
        let email_user = facebookProfileData.additionalUserInfo.profile.email
        let first_name = facebookProfileData.additionalUserInfo.profile.first_name
        let last_name = facebookProfileData.additionalUserInfo.profile.last_name
        let location = facebookProfileData.additionalUserInfo.profile.location.name
        let imageUrl = facebookProfileData.additionalUserInfo.profile.picture.data.url
        let id = uuid.v4()
        let provider = 'facebook'

        const dbRef = firebase.database().ref();
       
          if (exist(email_user)) {
       //     console.log(snapshot.val());
            return 0
          } else {
         //   console.log("No data available");
          }

        database.ref('users/' + id ).set({
          id_user: id,
          first_name: first_name,
          last_name: last_name,
          email: email_user,
          profile_picture: imageUrl,
          location: location,
          provider: provider
        })
      } else {
      }
    } catch ({ message }) {
    //  console.log(`Facebook Login Error: ${message}`);
    }

  }

  const HandleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
  }



  
     return(
    <View style={styles.container}>








            <View style={{ flexDirection: "row",  marginTop: 60  ,  }} >
            <AntDesign  style={{right : 150}} onPress={navigation.goBack} name="left" size={24} color="black" />
            
               <Text   onPress={()=> navigation.navigate('signup')}   style={{left : 140 , fontWeight :'bold'}}>Sign Up</Text>
            
       </View>



      <ImageBackground source={require('../assets/Backgrounds/Sign-In.png')} resizeMode="cover" style={styles.image}>
        <Text style={{ "marginBottom": 30, "color": 'black', "fontSize": 35, "fontWeight": "400", "fontStyle": "normal", "fontFamily": "Esoris", "textAlign": "center", "lineHeight": 38.5 }}>{`SIGN IN`}</Text>
        
        
       
        <View style={{ flexDirection: "row", marginBottom: 50, marginTop: 60    }} >
         <TouchableOpacity  onPress={HandleLoginWithGoogle}
    style={{width: 155,
    height: 55,
    borderRadius: 5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#4285f4', }}>
      <AntDesign style={{color : 'white' , marginRight:15}} name="google" size={24} color="black" />
   <Text style={{
        color: '#ffffff',
        fontFamily: 'Museo',
        fontSize: 14,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 32,
        textAlign :'center',
        justifyContent :'center',
        alignContent :'center',
        alignItems:'center'


   }}>Google</Text>

         </TouchableOpacity>
         <View style={styles.space} /> 
        <TouchableOpacity  onPress={HandleLoginWithFacebook}
    style={{width: 155,
     height: 55,
     borderRadius: 5,
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
     backgroundColor: '#3b5998',}}>
      <FontAwesome5  style={{color : 'white' , marginRight:15}}  name="facebook-f" size={24} color="black" />
  <Text style={{
            color: '#ffffff',
            fontFamily: 'Museo',
            fontSize: 14,
            fontWeight: '400',
            fontStyle: 'normal',
            lineHeight: 32,
            textAlign :'center',
            justifyContent :'center',
            alignContent :'center',
            alignItems:'center'
  }}>Facebook</Text>

        </TouchableOpacity>
         
        </View>
        <Text style={{marginBottom :30 , color : 'grey' , fontWeight :'bold'}}>Or With Email</Text>

        <StatusBar  style='dark' />
        <View style={styles.inputView}>
          <TextInput
            onBlur={function(){
              if (!this.validateEmail(this.state.text_input_email)) {
                // not a valid email
             } else {
                // valid email
             }
            }}
            style={styles.TextInput}
            placeholder="Your Email"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />


        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />


        </View>
      
        <Text    onPress={()=> navigation.navigate('forgetpassword')}  style={{ left : 290, top : -10,  color : 'black'  , height :20,  width :'100%'}}>Forgot?</Text>
    
       


        <TouchableOpacity onPress={HandleLogin} style={styles.loginBtn}>
          <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>



      </ImageBackground>
    </View>



     ) 
  }

  


const styles = StyleSheet.create({


searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
},
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent :'center',
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
  },
  space: {
    width: 20, 
    height: 20,
  },

  inputView: {
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: '#cccccc',
    width: "70%",
    height: 45,
    marginBottom: 20,
    width: 308,
    height: 50,
    backgroundColor: '#ffffff',
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    marginLeft: 30,
    left : 15,
    width: 340
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtnGoogle: {
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d34836",
    color: 'white',
  },
  image: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%'
  },

  loginBtn: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#e8500e",
    color: 'white',
    width: 308
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
    fontSize: 16,
    fontWeight: 'bold'

  }
});
