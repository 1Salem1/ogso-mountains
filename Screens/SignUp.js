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
  ImageBackground
} from "react-native";
 
export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");






  const HandleSignUP = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((success) => {
       console.log(success) 
       const dbRef = firebase.database().ref();
           database.ref(uuid.v4()).set({
             id_user: uuid.v4(),
             first_name: FirstName,
             last_name: LastName,
             email: email,
             profile_picture: 'No Image',
             location: 'no Location for this provider',
             provider: 'By Signing in',
           })
         
 
    })
    .catch((error) => {
     console.log(error)
    });
  }



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
            database.ref(googleUser.user.id).set({
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
        dbRef.child("users").child(id).get().then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            return 0
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });

        database.ref(id).set({
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






 
  return (
    <View style={styles.container}>



     <ImageBackground source={require('../assets/Backgrounds/Sign-Up.png')} resizeMode="cover" style={styles.image}>
       

     <Text style={{ top :140, "marginTop": 0, "color": 'black', "fontSize": 35, "fontWeight": "400", "fontStyle": "normal", "fontFamily": "Esoris", "textAlign": "center", "lineHeight": 38.5 }}>{`SIGN up`}</Text>
        <View style={{ flexDirection: "row",  marginTop : 30  , justifyContent :'center'}} >
         <View  style={{width : 140  }}>
         <FontAwesome5Icon.Button  style={{padding : 15}}name="google"
          
            title="With Google" onPress={HandleLoginWithGoogle} >With Google</FontAwesome5Icon.Button>

         </View>
         <View style={styles.space} /> 
        <View style={{width : 160  }}>
        <FontAwesome5Icon.Button  name='facebook' style={{padding : 15}}
                backgroundColor={'#4267B2'}
           onPress={HandleLoginWithFacebook} >With Facebook</FontAwesome5Icon.Button>

        </View>
         
        </View>
      <StatusBar style="auto" />
      <View style={[styles.container ,{Top :50}]}>
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
          placeholder="YourEmail"
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
      <View style={{textAlign :'center'}}>
      <Text style={styles.TextForgot }>By Singing Up , you agree to {"\n"}our <Text onPress={()=> navigation.navigate('Login')} style={styles.SignUptext}>Privacy Policy</Text></Text>

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
  space: {
    width: 20, 
    height: 20,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    top : 100,
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