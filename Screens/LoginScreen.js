import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as GoogleSignIn from 'expo-google-app-auth';
import firebase from "firebase";
import * as Facebook from 'expo-facebook';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { AntDesign } from '@expo/vector-icons'; 

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
  state = { user: null };
  var database = firebase.database();




  const onSignIn = (googleUser) => {
    console.log(googleUser)
    firebase.auth().createUserWithEmailAndPassword(googleUser.user.email, googleUser.user.id)
      .catch(e => {
        if (e.message == 'The email address is already in use by another account.') {
          firebase.auth().signInWithEmailAndPassword(googleUser.user.email, googleUser.user.id)
        }
      })
      .then((userCredential) => {
        // Signed in 
        const dbRef = firebase.database().ref();
        dbRef.child("users").child(googleUser.user.id).get().then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            return 0
          }
          else {
            database.ref('users/' + googleUser.user.id).set({
              id_user: googleUser.user.id,
              first_name: googleUser.user.familyName,
              last_name: googleUser.user.givenName,
              email: googleUser.user.email,
              profile_picture: googleUser.user.photoUrl,
              location: 'no Location for this provider',
              provider: 'Google',
            })
          }
        }).catch((error) => {
          console.error(error);
        });
      })

  }
  const HandleLoginWithFacebook = async () => {
    try {
      await Facebook.initializeAsync({
        appId: '2813714962259392',
      });
      const { type, token} =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile']
        });
      if (type === 'success') {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);  // Set persistent auth state
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        const facebookProfileData = await firebase.auth().signInWithCredential(credential);  // Sign in with Facebook credential

        // Do something with Facebook profile dataa
        // OR you have subscribed to auth state change, authStateChange handler will process the profile data
        let email_user = facebookProfileData.additionalUserInfo.profile.email
        let first_name = facebookProfileData.additionalUserInfo.profile.first_name
        let last_name = facebookProfileData.additionalUserInfo.profile.last_name
        let location = facebookProfileData.additionalUserInfo.profile.location.name
        let imageUrl = facebookProfileData.additionalUserInfo.profile.picture.data.url
        let id = facebookProfileData.additionalUserInfo.profile.location.id
        let provider = 'facebook'

        const dbRef = firebase.database().ref();
         dbRef.child("users").child('users/' + id).get().then((snapshot) => {
          if (snapshot.exists()) {
            return 0
          }
        }).catch((error) => {
          console.error(error);
        });

        database.ref('users/'+ id).set({
          id_user: id,
          first_name: first_name,
          last_name: last_name,
          email: email_user,
          profile_picture: imageUrl,
          location: location,
          provider: provider
        })
      }
    } catch ({ message }) {
      console.log(`Facebook Login Error: ${message}`);
    }

  }

  const HandleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });


  }
  const HandleLoginWithGoogle = () => {
    const config = {
      iosClientId: `734034396875-pqk29bc8eosn8e345fu2fljl6fq8adib.apps.googleusercontent.com`,
      androidClientId: `734034396875-d2sdsiabd607imcjcietevhpre9f811t.apps.googleusercontent.com`,
      scopes: ['profile', 'email']
    }
    GoogleSignIn.logInAsync(config).then((res) => {
      const { type, user } = res


      if (type == 'success') {
        onSignIn(res)
        return res.accessToken
      }

    })
      .catch(err => {
        console.log(err)
        console.log("an Error occurred . Check your network and try again")
      })
  }
     return(
    <View style={styles.container}>








            <View style={{ flexDirection: "row",  marginTop: 70  ,  }} >
            <AntDesign style={{right : 150}} onPress={navigation.goBack} name="left" size={24} color="black" />
            
               <Text   onPress={()=> navigation.navigate('signup')}   style={{left : 140 , fontWeight :'bold'}}>Sign Up</Text>
            
       </View>



      <ImageBackground source={require('../assets/Backgrounds/Sign-In.png')} resizeMode="cover" style={styles.image}>
        <Text style={{ "marginBottom": 30, "color": 'black', "fontSize": 35, "fontWeight": "400", "fontStyle": "normal", "fontFamily": "Esoris", "textAlign": "center", "lineHeight": 38.5 }}>{`SIGN IN`}</Text>
       
        <View style={{ flexDirection: "row", marginBottom: 50, marginTop: 60    }} >
         <View  style={{width: 155,
    height: 55,
    borderRadius: 5,
    backgroundColor: '#4285f4', }}>
         <FontAwesome5Icon.Button  style={{padding : 10 , top : 5}}name="google"
            backgroundColor={'#4285f4'}
            title="With Google" onPress={HandleLoginWithGoogle} >With Google</FontAwesome5Icon.Button>

         </View>
         <View style={styles.space} /> 
        <View style={{width: 155,
    height: 55,
    borderRadius: 5,
    backgroundColor: '#3b5998',}}>
        <FontAwesome5Icon.Button  name='facebook' style={{padding : 10 ,  top : 5}}
                backgroundColor={'#3b5998'}
           onPress={HandleLoginWithFacebook} >With Facebook</FontAwesome5Icon.Button>

        </View>
         
        </View>
        <Text style={{marginBottom :30 , color : 'grey' , fontWeight :'bold'}}>Or With Email</Text>

        <StatusBar style="auto" />
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