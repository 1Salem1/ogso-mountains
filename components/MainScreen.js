import { Text, View, StyleSheet , Image } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home'
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Profile from './Profile';
import Faq from "./FAQ/faq"
import { AntDesign } from '@expo/vector-icons'; 
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Contact from './Contact';
import b2c from './PDF/b2c';
import { createStackNavigator} from '@react-navigation/stack';
import EmailVerification from '../Screens/EmailVerification';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export class MainScreen extends Component {
  componentDidMount() {

  }




  render() {
    return (

      <Tab.Navigator tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: '#e9500e',
        },
        
      }} >
        <Tab.Screen name="Home"  component={Faq}
          options={{
            tabBarActiveTintColor: '#e8500e',
            header: () => null,
            animation: "slide_from_right",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={30} />
            ),
          }} />
           <Tab.Screen name="Ski Practice"  component={Home}
          options={{
            tabBarActiveTintColor: '#e8500e',
            header: () => null,
            animation: "slide_from_right",
            tabBarIcon: ({ color, size }) => (
              <Icon name="md-notifications" size={26} style={styles.icon}></Icon>
            ),
          }} />
           <Tab.Screen name="Ogso Selector"  component={Contact}
          options={{
            tabBarStyle: { display: "none" },
            header: () => null,
            animation: "slide_from_right",
            tabBarIcon: ({ color, size }) => (
              <Icon2 name="comment-question-outline" size={26}  style={styles.icon}></Icon2>
            ),
          }} />
            <Stack.Screen name="Profile" component={Profile}
          options={{
            tabBarStyle: { display: "none" },
            header: () => null,
            animation: "slide_from_right",
            tabBarIcon: ({ color, size }) => (
              <Icon name="ios-mail" size={26} style={styles.icon2}></Icon>
            ),
          }} />
   
      </Tab.Navigator>
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


export default MainScreen;