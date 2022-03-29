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
const Tab = createBottomTabNavigator();

export class MainScreen extends Component {
  componentDidMount() {

  }




  render() {
    return (

      <Tab.Navigator>
        <Tab.Screen name="Home"  component={Faq}
          options={{
            tabBarActiveTintColor: '#e8500e',
            header: () => null,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={30} />
            ),
          }} />
           <Tab.Screen name="Ski Practice"  component={Home}
          options={{
            tabBarActiveTintColor: '#e8500e',
            header: () => null,
            tabBarIcon: ({ color, size }) => (
              <Icon name="md-notifications" size={26} style={styles.icon}></Icon>
            ),
          }} />
           <Tab.Screen name="Ogso Selector"  component={Contact}
          options={{
            tabBarActiveTintColor: '#e8500e',
            header: () => null,
            tabBarIcon: ({ color, size }) => (
              <Icon2 name="comment-question-outline" size={26}  style={styles.icon}></Icon2>
            ),
          }} />
            <Tab.Screen name="Profile" component={Profile}
          options={{
            tabBarActiveTintColor: '#e8500e',
            header: () => null,
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