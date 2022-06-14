import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
import SkiActivityRec from './SkiActivityRec';
 import ContainerSkiMars from './ContainerSkiMars';
 import firebase from 'firebase';
export default function SkiTab  () {
 
  const [data,setData] = useState()

  const fetchDate = () => {
    var tab = []
    const user = firebase.auth().currentUser;
    var firebaseRef =firebase.database().ref('skiactivity')
    firebaseRef.once("value" ,function(snapshot){
      var data = snapshot.val()
     // console.log("FROM DATA", data)
      for(let i in data){
        if (data[i].email.toLowerCase() == user.email.toLowerCase()){
               tab.push(data[i])
            
        } 
       // console.log("from data", tab)
        return tab
      }
    })
  }


 useEffect(()=>{
setData(fetchDate())
 },[])



  
 
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
            <SkiActivityRec tab={data} tabLabel={{label: "Recent Ski Activities"}} label="Recent Ski Activities"/>
            
          
          </ScrollableTabView>
 
        </View>
    );
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