import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
import SkiActivityRec from './SkiActivityRec';
 import ContainerSkiMars from './ContainerSkiMars';
 
export default class SkiTab extends Component {
  
  render() {
    return (
        <View style={[styles.container ]}>
          <ScrollableTabView 
         
              tabBarActiveTextColor="#e8500e"
              tabBarInactiveTextColor='#666666'
              renderTabBar={() => <TabBar 
              underlineColor="#e8500e"
              
              tabBarTextStyle={{
                
                 width : 150, 
                fontFamily: 'Museo Sans 900',
                fontSize: 14,
                fontWeight: '400',
                fontStyle: 'normal',
                textAlign: 'left',
                lineHeight: 31.7,
                fontSize : 14 , fontWeight : 'bold'}}
             
              
              />}>
            <ContainerSkiMars tabLabel={{label: "Ski On Mars" }} label="Ski On Mars"/>
            <SkiActivityRec tabLabel={{label: "Recent Ski Activities"}} label="Recent Ski Activities"/>
            
          
          </ScrollableTabView>
 
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

   
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