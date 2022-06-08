import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
import SkiActivityRec from './SkiActivityRec';
 import ContainerSkiMars from './ContainerSkiMars';
import RecInfo from './Rec/RecInfo';
import Mapinfo from './Rec/Mapinfo';
 
export default class RecTab extends Component {
  
  render() {
    return (
        <View style={[styles.container ]}>
          <ScrollableTabView 
         
              tabBarActiveTextColor="#e8500e"
              tabBarInactiveTextColor='#666666'
              renderTabBar={() => <TabBar style={{ width : 190,
                borderBottomWidth: 0,
              
                borderBottomColor: "#47315a"}}
                
              underlineColor="#e8500e"
              underlineHeight={5}
    
              tabBarTextStyle={{
        
                fontFamily: 'Museo',
                fontSize: 14,
                fontWeight: '400',
                fontStyle: 'normal',
                textAlign: 'center',
                lineHeight: 31.7,
                fontSize : 14 , fontWeight : 'bold'}}
            
              
              />}>
            <RecInfo tabLabel={{label: "Statistics" }} label="Statistics"/>
            <Mapinfo tabLabel={{label: "Map"}} label="Map"/>
            
          
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