import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
 import Account from './Account'
 import Policy from './Policy'
 import Activicty from './ActivityHistory'
 import Notification from './Notification'
 
export default class ProfileTab extends Component {
  render() {
    return (
        <View style={[styles.container ]}>
          <ScrollableTabView 
         
              tabBarActiveTextColor="#e8500e"
            
              renderTabBar={() => <TabBar 
              underlineColor="#e8500e"
              tabBarTextStyle={{fontSize : 12}}
             
              
              />}>
            <Account tabLabel={{label: "Acccount" }} label="Account"/>
            <Activicty tabLabel={{label: "Activity History"}} label="Activity"/>
            <Notification tabLabel={{label: "Notifications"}} label="Notifications"/>
            <Policy  tabLabel={{label: "Privacy Policy"}} label="privacyPolicy"/>
          
          </ScrollableTabView>
 
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 28,
  },
});