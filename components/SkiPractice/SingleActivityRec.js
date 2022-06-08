import { View, Text  , StyleSheet , TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import RecTab from './RecTab';
import DistanceComponent from './Rec/InformationsComponent';
export default function SingleActivityRec() {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <View style={{height : 70 }} ></View>
      <TouchableOpacity onPress={() => {navigation.navigate('ListRecords') }}  style={{marginHorizontal:20,flexDirection:'row'  , width:50}}>
      <AntDesign name="left" size={32} color="black" />
      </TouchableOpacity>
     <View style={{marginHorizontal:2}}>
       <View style={{flexDirection:'row' , marginTop:30}}>
       <Entypo style={{marginBottom:5 , marginRight:5}} name="location-pin" size={32} color="#e8500e" />
       <Text style={styles.boldTitle} >Les aiguilles de midi ,</Text>
       <Text style={styles.smallTitle} > France</Text>
       </View>


     </View>

     <View style={{flexDirection:'row' ,  marginTop:10,justifyContent:'space-between' , marginLeft:40,marginHorizontal:70}}>

       <View style={{flexDirection:'row',}}>
       <AntDesign name="calendar" style={{marginBottom:5 , marginRight:5}}  size={24} color="#666666" />
     <Text>17/05/2022</Text>
       </View>

       <View style={{flexDirection:'row'}}>
       <Ionicons name="time-sharp" style={{marginBottom:5 , marginRight:5}}  size={24} color="#666666" />
     <Text>11:05 - 13:12</Text>
       </View>
   
     </View>
     <View style={{flex : 1}}>
     <RecTab/>
     
     
     </View>
     
   
    </View>
  )
}


const styles = StyleSheet.create({

container : {
  flex : 1,
  backgroundColor:'white'
},
boldTitle :{
    color: '#000000',
    fontFamily: 'Museo',
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 36,
},
smallTitle :{
  color: '#000000',
  fontSize: 18,
  fontWeight: '300',
  fontStyle: 'normal',
  textAlign: 'left',
  lineHeight: 36,
}

})