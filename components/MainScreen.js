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
import PDF from './PDF/b2c';
import SmartOgsoSelect from './SmartOgsoSelect';
import Map from './SkiPractice/Map';
import NotificationIcon from './SvgComponents/NotificationIcon';
import ContactIcon from './SvgComponents/ContactIcon';
import FaqIcon from './SvgComponents/FaqIcon';
import firebaseApp from '@react-native-firebase/app';
import HomeIcon from './SvgComponents/HomeIcon';
import SkiOnMars from './SkiOnMars/SkiOnMars';
import { NotificationListner , requestUserPermission , getFCMToken} from '../Configurations/push_notification_helper';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number:0
    }


  }

  
  incrementCount() {
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {number: state.number + 1}
    });
  }



  componentDidMount() {
    NotificationListner()
    requestUserPermission()
    getFCMToken()
    firebaseApp.messaging().onMessage(response => {
    this.incrementCount()
    });

  }




  render() {
    const { number } = this.state;

    return (

      <Tab.Navigator 
      
      screenOptions={{
        tabBarStyle: { position: 'absolute', height : 63 },
        tabBarBadgeStyle : {
          color : 'white',
          backgroundColor :'#e8500e',
          fontSize : 12
        }
      }}
      
      tabBarOptions={{
        activeTintColor: '#e8500e',
        
      }}
   
      
     >

        <Tab.Screen name="Home"  component={Home}
        
          options={{
            "tabBarShowLabel": false,
            header: () => null,
            animation: "slide_from_right",
           tabBarIcon: ({color , focused} ) => 
          (
             <HomeIcon  color={focused ? '#e8500e' : 'black'} /> )  

          }} />
           <Tab.Screen name="Notifications"  component={Notification}
          options={{
            tabBarBadge: number ,
            "tabBarShowLabel": false,
            header: () => null,
            animation: "slide_from_right",
            tabBarIcon: ({color , focused}) =>  
            <NotificationIcon color={focused ? '#e8500e' : 'black'}/>
          }} />
           <Tab.Screen name="faq"  component={Faq}
          options={{
            "tabBarShowLabel": false,
            header: () => null,
            animation: "slide_from_right",
            tabBarIcon: ({color ,focused}) =>  <FaqIcon color={focused ? '#e8500e' : 'black'} />
          }} />
            <Stack.Screen name="contact" component={Contact}
          options={{
            "tabBarShowLabel": false,
            header: () => null,
            animation: "slide_from_right",
            tabBarIcon: ({color , focused}) => ( <ContactIcon color={focused ? '#e8500e' : 'black'} />)
          }} />
                  <Stack.Screen name="profile" component={Profile}
                  
          options={{
            tabBarButton: () => null,
            tabBarVisible: false,
            tabBarStyle: { display: "none" },
            header: () => null,
            animation: "slide_from_right",
          }} />
          <Stack.Screen name="skip" component={Location}
                  
                  options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                    "tabBarShowLabel": false,
                    header: () => null,
                    animation: "slide_from_right",
                  }} />
                   <Stack.Screen name="pdf" component={PDF}
                  
                  options={{
                    header: () => null,
                    tabBarButton: () => null,
                    "tabBarShowLabel": false,
                    animation: "slide_from_right",
                  }} />
                      <Stack.Screen name="ogso-selector" component={SmartOgsoSelect}
                  
                  options={{
                    tabBarStyle:{
                      backgroundColor:'white',
                      opacity : 0.8,
                      position: 'absolute', height : 63,
                      color : 'white'
                    },
                    header: () => null,
                    tabBarButton: () => null,
                    "tabBarShowLabel": false,
                    animation: "slide_from_right",
                  }} />
                  <Stack.Screen name="map" component={Map}
                  
                  options={{
                    tabBarStyle:{
                      backgroundColor:'white',
                      opacity : 0.8,
                      position: 'absolute', height : 63,
                      color : 'white'
                    },
                    tabBarStyle: { display: "none" },
                    header: () => null,
                    tabBarButton: () => null,
                    "tabBarShowLabel": false,
                    animation: "slide_from_right",
                  }} />
                   <Stack.Screen name="SkiOnMars" component={SkiOnMars}
                  
                  options={{
                    tabBarStyle:{
                      backgroundColor:'white',
                      opacity : 0.8,
                      position: 'absolute', height : 63,
                      color : 'white'
                    },
                    tabBarStyle: { display: "none" },
                    header: () => null,
                    tabBarButton: () => null,
                    "tabBarShowLabel": false,
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

console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
export default MainScreen;