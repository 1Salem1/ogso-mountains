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
import Location from './SkiPractice/Location';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export class MainScreen extends Component {
  
  componentDidMount() {

  }




  render() {
    return (

      <Tab.Navigator     tabBarOptions={{
        activeTintColor: '#e8500e',
         style : {
           height : 1100
         }
      }}
   
      
     >

        <Tab.Screen name="Home"  component={Location}
          options={{
            "tabBarShowLabel": false,
            header: () => null,
            animation: "slide_from_right",
           tabBarIcon: ({color} ) => 
          ( <AntDesign name="home" size={30}  active={color === "#e8500e"}  color={color}/> )  

          }} />
           <Tab.Screen name="Notifications"  component={Notification}
          options={{
            "tabBarShowLabel": false,
            header: () => null,
            animation: "slide_from_right",
            tabBarIcon: ({color} , focused) =>  <AntDesign name="bells"  size={30}  color={color}/>
          }} />
           <Tab.Screen name="Ogso Selector"  component={Faq}
          options={{
            "tabBarShowLabel": false,
            header: () => null,
            animation: "slide_from_right",
            tabBarIcon: ({color}) =>  <MaterialCommunityIcons name="comment-question-outline" size={30}  color={color}/>
          }} />
            <Stack.Screen name="contact" component={Contact}
          options={{
            "tabBarShowLabel": false,
            header: () => null,
            animation: "slide_from_right",
            tabBarIcon: ({color} , focused) => ( <FontAwesome name="envelope-o" size={30}  color={color}/>),  tabBarOptions: {
            
          },
          }} />
                  <Stack.Screen name="profile" component={Profile}
                  
          options={{
            tabBarButton: () => null,
            tabBarVisible: false,
            tabBarStyle: { display: "none" },
            header: () => null,
            animation: "slide_from_right",
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