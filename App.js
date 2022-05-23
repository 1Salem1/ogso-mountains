
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import SignUp from './Screens/SignUp';
import LoginScreen from './Screens/LoginScreen';
import { LogBox } from 'react-native';
import React, { Component } from 'react';
import firebaseApp from '@react-native-firebase/app';
import firebase from 'firebase';
import MainScreen from './components/MainScreen';
import ForgetPassword from './Screens/ForgetPassword';
import firebaseConfig from './Configurations/Firebase'
import WelcomeStep1 from './Screens/tuto/step1';
import WelcomeStep2 from './Screens/tuto/step2';
import WelcomeStep3 from './Screens/tuto/step3';
import WelcomeStep4 from './Screens/tuto/step4';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import PushController from './components/Notification/PushController';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NotificationListner , requestUserPermission , getFCMToken} from './Configurations/push_notification_helper';
import '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import {Platform} from 'react-native';
import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
const Stack = createNativeStackNavigator();








const fetchFonts = () => {
  return Font.loadAsync({
    'Esoris': require('./assets/fonts/Esoris.otf'),
     'Museo': require('./assets/fonts/MuseoSans_700.otf')
  });
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}







export default class App extends Component {


  
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      fontloaded: false,
      emailverified: false,
      firstLaunch: null
    }


  }



  componentWillUnmount() {
      firebaseApp.messaging().onMessage(response => {
        console.log(JSON.stringify(response));
        if (Platform.OS !== 'ios') {
          PushNotification.localNotification({
            title: response.title,
            message: response.body,
          });
      
          return;
        }

      });
  
  }



  componentDidMount() {
    NotificationListner()
    requestUserPermission()
    getFCMToken()





    AsyncStorage.getItem("alreadyLaunched").then(value => {
      if(JSON.parse(value) == null){
           AsyncStorage.setItem('alreadyLaunched', JSON.stringify(true)); 
           console.log('already launched')
           this.setState({firstLaunch: true});
      }
      else{
           this.setState({firstLaunch: false});
      }}) 





     




    firebase.auth().onIdTokenChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else if (user.emailVerified){

        this.setState({
          loggedIn: true,
          loaded: true,
          emailVerified : true ,
        })
      }      
      else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }

    })
  }


  render() {

    const { loggedIn, loaded, fontloaded , firstLaunch } = this.state;



   











    if (!fontloaded) {
      return (
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => this.setState({ fontloaded: true })}
          onError={console.warn}

        />
      )
    }

    if (!loaded) {      
      return (
        <View style={styles.container}>
      <AppLoading/>
        </View>

      )
    }



  










    if (!loggedIn  ) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="step1" 
             screenOptions={{
               
             }}
             headerMode="float"
          >
            <Stack.Screen options={{
              headerShown: false,
              animation: "slide_from_right",
              
            }} name="Login" component={LoginScreen} />
            <Stack.Screen options={{
              headerShown: false,
              animation: "slide_from_right",
            }} name="signup" component={SignUp} />
            <Stack.Screen options={{
             headerShown: false,
             animation: "slide_from_right",
            }} name="forgetpassword" component={ForgetPassword} />
            <Stack.Screen options={{
             headerShown: false,
             animation: "slide_from_right",
            }} name="step1" component={WelcomeStep1} />
            <Stack.Screen options={{
               headerShown: false,
               animation: "slide_from_right",
            }} name="step2" component={WelcomeStep2} />
            <Stack.Screen options={{ 
               headerShown: false,
               animation: "slide_from_right",
            }} name="step3" component={WelcomeStep3} />
            <Stack.Screen options={{
               headerShown: false,
               animation: "slide_from_right",
            }} name="step4" component={WelcomeStep4}


            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }





  else if(loggedIn )
  {
  return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen options={{
            headerShown: false,
            animation: "slide_from_right",
          }} name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>


    )

  }

  if (!firstLaunch && !loggedIn) {      
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="step4" 
           screenOptions={{
             
           }}
           headerMode="float"
        >
          <Stack.Screen options={{
            headerShown: false,
            animation: "slide_from_right",
            
          }} name="Login" component={LoginScreen} />
          <Stack.Screen options={{
            headerShown: false,
            animation: "slide_from_right",
          }} name="signup" component={SignUp} />
          <Stack.Screen options={{
           headerShown: false,
           animation: "slide_from_right",
          }} name="forgetpassword" component={ForgetPassword} />
          <Stack.Screen options={{
             headerShown: false,
             animation: "slide_from_right",
          }} name="step4" component={WelcomeStep4}


          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Setting a timer']);
LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);
console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];