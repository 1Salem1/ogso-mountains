import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import SignUp from './Screens/SignUp';
import LoginScreen from './Screens/LoginScreen';
import { LogBox } from 'react-native';
import React, { Component } from 'react';
import { createStore, applyMiddleware } from "redux";
import rootReducer from './redux/reducers'
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import firebase from 'firebase';
import Main from './components/MainScreen';
import MainScreen from './components/MainScreen';
import ForgetPassword from './Screens/ForgetPassword';
const store = createStore(rootReducer, applyMiddleware(thunk))

const Stack = createNativeStackNavigator();







export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }


  render() {

    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={styles.container}>
          <Text >Loading </Text>
        </View>

      )
    }
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="forgetpassword">
            <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="signup" component={SignUp} />
            <Stack.Screen options={{ headerShown: false }} name="forgetpassword" component={ForgetPassword} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
    <Provider store={store}>
       <NavigationContainer >
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen options={{ headerShown: false }} name="MainScreen" component={MainScreen} />
          </Stack.Navigator>
          </NavigationContainer>
    </Provider>
    
  )
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