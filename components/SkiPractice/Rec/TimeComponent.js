import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
export default function TimeComponent(props) {
  return (
      <View style={{flex : 1 , alignItems:'center'}}>
    <View style={styles.container}>
     <View style={styles.TimerContainer}>
     <MaterialCommunityIcons  name="clock-time-five" size={24} color="#eb5c26" />
         <Text style={styles.textTimer}>TIME</Text>
     </View>
     <View  style={{ width:'85%' , marginLeft:'12%'}}>
     <Text style={styles.containerTexte}>01:45:43</Text>

     <View style={{
                 justifyContent: 'space-between', flexDirection: 'row', 
                }}>
                    <View >
                        <Text style={styles.title}>SKI</Text>
                        <Text style={{
                           
                            color: '#707070',
                            fontFamily: 'Museo',
                            fontSize: 12,
                            fontWeight: '400',
                            fontStyle: 'normal',
                            textAlign: 'left',
                           
                        }}>{props.ski}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>ASCENT</Text>
                        <Text style={{
                          
                          color: '#666666',
                            fontFamily: 'Museo',
                            fontSize: 12,
                            fontWeight: '400',
                            fontStyle: 'normal',
                            textAlign: 'left',
                           
                        }}>{props.ascent}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>REST</Text>
                        <Text style={{
                           
                            color: '#707070',
                            fontFamily: 'Museo',
                            fontSize: 12,
                            fontWeight: '400',
                            fontStyle: 'normal',
                            textAlign: 'left',
                           
                        }}>{props.rest}</Text>
                    </View>

                </View>

     </View>
    
    </View>

      </View>

  )
}

const styles = StyleSheet.create({

container : {
    width: "85%",
    height: 150,
    borderRadius: 5,
    borderColor: '#cccccc',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',  
},
TimerContainer: {
    flexDirection:'row',
    padding:20,
    //backgroundColor:'red'
},
textTimer : {
marginLeft:5,
top : 4,
color: '#eb5c26',
fontSize: 14,
fontFamily: 'Museo',
fontWeight: '400',
fontStyle: 'normal',
textAlign: 'left',
},
containerTexte : {
    color: '#666666',
    fontFamily: 'Museo',
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    bottom : 10
}
,
title: {
    color: '#666666',
    fontSize: 13,
    fontStyle: 'normal',
    marginBottom: 5
},

})