import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
export default function InformationsComponent(props) {
  return (
      <View style={{flex : 1 , alignItems:'center'}}>
    <View style={styles.container}>
     <View style={styles.TimerContainer}>
     <MaterialCommunityIcons  name={props.iconName} size={24} color="#eb5c26" />
         <Text style={styles.textTimer}>{props.title}</Text>
     </View>
     <View  style={{ width:'85%' , marginLeft:'12%'}}>
     <View style={{
                 justifyContent: 'space-between', flexDirection: 'row', 
                }}>
                    <View >
                        <Text style={styles.title}>{props.name1}</Text>
                        <Text style={{
                           
                            color: '#707070',
                            fontFamily: 'Museo',
                            fontSize: 12,
                            fontWeight: '400',
                            fontStyle: 'normal',
                            textAlign: 'left',
                           
                        }}>{props.uphill}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>{props.name2}</Text>
                        <Text style={{
                          
                          color: '#666666',
                            fontFamily: 'Museo',
                            fontSize: 12,
                            fontWeight: '400',
                            fontStyle: 'normal',
                            textAlign: 'left',
                           
                        }}>{props.downhill}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>{props.name3}</Text>
                        <Text style={{
                           
                            color: '#707070',
                            fontFamily: 'Museo',
                            fontSize: 12,
                            fontWeight: '400',
                            fontStyle: 'normal',
                            textAlign: 'left',
                           
                        }}>{props.total}</Text>
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
    height: 100,
    borderRadius: 5,
    borderColor: '#cccccc',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',  
},
TimerContainer: {
    flexDirection:'row',
    padding:10,
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