
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import SignUp from './Screens/SignUp';
import LoginScreen from './Screens/LoginScreen';
import { LogBox } from 'react-native';
import React, { Component } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();







const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

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
    
    }



  componentDidMount() {

    AsyncStorage.getItem("alreadyLaunched").then(value => {
      if(value == null){
           AsyncStorage.setItem('alreadyLaunched', true); 
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
          <Text >Loading </Text>
        </View>

      )
    }


    if (firstLaunch) {      
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





  else
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