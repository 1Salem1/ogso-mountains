import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home'
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Profile from './Profile';
const Tab = createBottomTabNavigator();

export class MainScreen extends Component {
  componentDidMount() {

  }




  render() {
    return (

      <Tab.Navigator>
        <Tab.Screen name="Home" options={{ headerShown: false}} component={Home}
          options={{
            tabBarActiveTintColor: '#e8500e',
            header: () => null,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" color={color} size={26} />
            ),
          }} />
           <Tab.Screen name="Ski Practice" options={{ headerShown: false }} component={Home}
          options={{
            tabBarActiveTintColor: '#e8500e',
            header: () => null,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="snowboarding" color={color} size={26} />
            ),
          }} />
           <Tab.Screen name="Ogso Selector" options={{ headerShown: false }} component={Home}
          options={{
            tabBarActiveTintColor: '#e8500e',
            header: () => null,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="flask" color={color} size={26} />
            ),
          }} />
            <Tab.Screen name="Profile" options={{ headerShown: false }} component={Profile}
          options={{
            tabBarActiveTintColor: '#e8500e',
            header: () => null,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" color={color} size={26} />
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