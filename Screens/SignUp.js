import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import firebase from "firebase";
import * as AppAuth from 'expo-app-auth';
import * as Facebook from 'expo-facebook';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { AntDesign } from '@expo/vector-icons'; 
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,

} from "react-native";
 
const { URLSchemes } = AppAuth;

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");

  GoogleSignin.configure({
    // scopes: ['https://www.googleapis.com/auth/drive.readonly'], 
     webClientId: '1047529689642-62qj96fckel3rc8e2014svlul8k9cl4u.apps.googleusercontent.com', 
     offlineAccess: true, 
     forceConsentPrompt: true, 
    
   });


  var database = firebase.database();



  const HandleSignUP = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((success) => {
      firebase.auth().currentUser.sendEmailVerification()
      .then(() => {
        // Email verification sent!
      });
       console.log(success) 
       var myUserId = firebase.auth().currentUser.uid;
       
       database.ref('users/' +  myUserId).set({
             id_user:  myUserId,
             first_name: FirstName,
             last_name: LastName,
             email: email,
             profile_picture: 'No Image',
             location: 'no Location for this provider',
             provider: 'By Signing in',
           })
         
  }
    )}
  


 




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
        let id = facebookProfileData.additionalUserInfo.profile.location.id
        let provider = 'facebook'

        const dbRef = firebase.database().ref();
        var myUserId = firebase.auth().currentUser.uid;
        dbRef.child("users").child('users/' + id).get().then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            return 0
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });

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
      console.log(`Facebook Login Error: ${message}`);
    }

  }

  const HandleLoginWithGoogle = async  () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const Token = await GoogleSignin.getTokens()
      const user = firebase.auth.GoogleAuthProvider.credential(Token.idToken)
      return firebase.auth().signInWithCredential(user);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
       console.log(error)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error)
      } else {
        console.log(error)
      }
    }


    }




 
  return (
    <View 
  
    
    style={styles.container}>



     <ImageBackground source={require('../assets/Backgrounds/Sign-Up.png')} resizeMode="cover" style={styles.image}>
     <AntDesign style={{top : 50 , left : 10 , width : 30}}
     onPress={navigation.goBack} name="left" size={24} color="black" />
     <Text   onPress={()=> navigation.navigate('step4')}   style={{left :310 ,top : 35, fontWeight :'bold' , marginRight : 20}}>Sign In</Text>

      <View>
      <Text style={{ top :80, "marginTop": 0, "color": 'black', "fontSize": 35, "fontWeight": "400", "fontStyle": "normal", "fontFamily": "Esoris", "textAlign": "center", "lineHeight": 38.5 }}>{`SIGN UP`}</Text>
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
    
        
      <StatusBar  style='dark' />
      <View style={[styles.container,{bottom:110} ] }>
      
      
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
          placeholder="Your  Email"
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
        <Text style={styles.loginText }>Sign Up</Text>
      </TouchableOpacity>
      <View style={{textAlign :'center' , top : 45} }>
      <Text style={[styles.TextForgot ]}>By Singing Up , you agree to {"\n"}our <Text onPress={()=> navigation.navigate('Login')} style={styles.SignUptext}>Privacy Policy</Text></Text>

      </View>
       
        
      </View>
     
 
     
 
        </ImageBackground>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
 
  inputView: {
    borderStyle :'solid',
    backgroundColor: "white",
    width: "70%",
    height: 45,
    marginBottom: 20,
    top : 140,
    width: 280,
  },
 
  TextInput: {
     width: 280,
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    right : 10
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  space: {
    width: 20, 
    height: 20,
  },
 
  loginBtn: {
    width: 280,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    top : 160,
    backgroundColor: "#e8500e",
    color : 'white'
  },
  TextForgot :  {
      marginTop : 10,
      textAlign :'center',
      color : 'white'
      , fontWeight :'bold',
      top : 130

  },
  SignUptext: {
     color : 'white',
     textAlign : 'center'
  },
  loginText :  {
    color : 'white',
    fontWeight :'bold'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%'
  },
});


