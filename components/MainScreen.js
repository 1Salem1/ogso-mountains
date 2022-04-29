import { Text, View, StyleSheet , Image } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home'
import Profile from './Profile';
import Notification from './Notification/Notification.js'
import Contact from './Contact';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Faq from './FAQ/faq'
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { createStackNavigator} from '@react-navigation/stack';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export class MainScreen extends Component {
  
  componentDidMount() {

  }




  render() {
    return (

      <Tab.Navigator  tabBarOptions={{
        showLabel: false}}

   
      
     
>
        <Tab.Screen name="Home"  component={Home}
          options={{
            tabBarActiveTintColor: '#e8500e',
            header: () => null,
            animation: "slide_from_right",
           tabBarIcon: (color , focused) => 
          ( <AntDesign name="home" size={30}   /> ) , tabBarOptions: {
            activeTintColor: '#e8500e'
        }

          }} />
           <Tab.Screen name="Notifications"  component={Notification}
          options={{
            showLabel: false,

            tabBarActiveTintColor: '#e8500e',
            header: () => null,
            animation: "slide_from_right",
            tabBarIcon: () => <AntDesign name="bells"  size={30}  />
          }} />
           <Tab.Screen name="Ogso Selector"  component={Faq}
          options={{
            tabBarActiveTintColor: '#e8500e',
            header: () => null,
            animation: "slide_from_right",
            tabBarIcon: () => <MaterialCommunityIcons name="comment-question-outline" size={30}  />
          }} />
            <Stack.Screen name="contact" component={Contact}
          options={{
            tabBarActiveTintColor: '#e8500e',
            header: () => null,
            animation: "slide_from_right",
            tabBarIcon: () =>( <FontAwesome name="envelope-o" size={30}  />),  tabBarOptions: {
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
          },
          }} />
                  <Stack.Screen name="profile" component={Profile}
                  
          options={{
            tabBarButton: () => null,
            tabBarVisible: false,
            tabBarStyle: { display: "none" },
            header: () => null,
            animation: "slide_from_right",
            tabBarIcon: () => (<Image source={require("../assets/icons/message.png")} style={{width: 20, height: 25}} />)
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