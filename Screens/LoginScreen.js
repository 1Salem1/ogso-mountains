import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import uuid from 'react-native-uuid';
import firebase from "firebase";
import * as Facebook from 'expo-facebook';
import { FontAwesome5 } from '@expo/vector-icons'; 
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { AntDesign } from '@expo/vector-icons'; 
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import Icon from "react-native-vector-icons/Ionicons";
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
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";






export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var database = firebase.database();












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
          let newUser = GoogleProfileData.additionalUserInfo.isNewUser
          let id = uuid.v4()
          let provider = 'Google'
  
          const dbRef = firebase.database().ref();
       
            if (false) {
  
              return 0
            } else if (newUser) {
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
        const facebookProfileData = await firebase.auth().signInWithCredential(credential);  // Sign in with Facebook credential

        // Do something with Facebook profile data
        // OR you have subscribed to auth state change, authStateChange handler will process the profile data
        let email_user = facebookProfileData.additionalUserInfo.profile.email
        let first_name = facebookProfileData.additionalUserInfo.profile.first_name
        let last_name = facebookProfileData.additionalUserInfo.profile.last_name
        let location = facebookProfileData.additionalUserInfo.profile.location.name
        let imageUrl = facebookProfileData.additionalUserInfo.profile.picture.data.url
        let newUser = facebookProfileData.additionalUserInfo.isNewUser
        let id = uuid.v4()
        let provider = 'facebook'

        const dbRef = firebase.database().ref();
       

         if (newUser) {
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
        
        
        <View style={{bottom : 120}}>
  
        <View style={{ flexDirection: "row",  position:'relative' , top : 130  , justifyContent :'center' , paddingBottom : 50 }} >
         <View  style={{width : 140  , backgroundColor :'' }}>
         <FontAwesome5Icon.Button  style={{padding : 15}}name="google"
               backgroundColor={'#3367D6'}
            title="With Google" onPress={HandleLoginWithGoogle} >With Google</FontAwesome5Icon.Button>

         </View>
         <View style={styles.space} /> 
        <View style={{width : 160  }}>
        <FontAwesome5Icon.Button  name='facebook' style={{padding : 15}}
                backgroundColor={'#4267B2'}
           onPress={HandleLoginWithFacebook} >With Facebook</FontAwesome5Icon.Button>

        </View>
         
        </View>
      </View>

        <Text style={{marginBottom :30 , color : 'grey' , fontWeight :'bold'}}>Or With Email</Text>

        <StatusBar  style='dark' />
        <View style={styles.inputView}>
          
          <TextInput
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
    marginBottom : 20,
   opacity:0.9,
    backgroundColor: "#f1f3f0",
    borderColor:'grey',
    width: "70%",
    height: 45,
    borderBottomWidth : 0.5,
    borderTopWidth: 0.2,
    borderLeftWidth :0.2,
    borderRightWidth:0.5,
    borderRadius: 5,

    flexDirection :'row',
    width: 290,
  },

  TextInput: {
    width: 290,
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    right : 17,
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
