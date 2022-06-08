import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 

export default function ShareButton () {
  return (
    <View style={{height : '11%' , flexDirection:'column' , alignItems:'center'}}>

    <TouchableOpacity style={{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
       borderRadius: 5,
       padding:5,
       borderColor: '#cccccc', 
       borderStyle: 'solid',
       borderWidth: 1,
       backgroundColor: '#ffffff',
     
       width:110,
       height : 50
    }} >
    <MaterialIcons name="share" size={24} color="#e8500e" />
     <Text style={{  marginLeft : 10,}}>Share</Text> 
    </TouchableOpacity>
    </View>
  )
}

