import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import TimeComponent from './TimeComponent';
import DistanceComponent from './InformationsComponent';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import InformationsComponent from './InformationsComponent';
import { MaterialIcons } from '@expo/vector-icons'; 
import ShareButton from './ShareButton';
export default function RecInfo() {
  return (
    <View style={styles.container}>
     

<ScrollView style={{flex : 1, height : '40%'}} >
<View style={styles.firstBlock}>


<View style={styles.caloriesDiv}>
<View style={styles.smallContainer1}>
  <FontAwesome5 name="fire" size={24} color="white" />
    <Text style={styles.textInsideContainer}>CALORIES</Text>

  </View>
  <View style={styles.smallContainer2}>
  <Text style={styles.smalltext}>456<Text style={styles.verysmallText}>kcal</Text></Text>
 
</View>

</View>

<View style={styles.slopeDiv}>
<View style={styles.smallContainer1}>
<MaterialCommunityIcons name="slope-uphill" size={24} color="white" />
    <Text style={styles.textInsideContainer}>SLOPE</Text>

  </View>
  <View style={styles.smallContainer2}>
  <Text style={styles.smalltext}>29°</Text>
 
</View>
</View>

</View>
<TimeComponent ski="00:25:08" ascent="11:25:08" rest="00:25:08" />
<View style={{height : 10}}></View>


<InformationsComponent iconName='map-marker-distance' title='DISTANCE' name1='UPHILL' name2='DOWNHILL' name3='TOTAL' uphill='1,8' downhill='3' total='5km'/>
<View style={{height : 10}}></View>




<InformationsComponent iconName='elevation-rise' title='ALTITUDE' name1='MIN' name2='MAX'  uphill='1,8m' downhill='3m' />


<View style={{height : 10,}}></View>
<InformationsComponent iconName='speedometer' title='SPEED' name1='MIN' name2='MAX' name3='AVG'  uphill='1,8 km/h' downhill='3 km/h' total='5 km/h'/>
<View style={{height : 40,}}></View>
</ScrollView>
<View style={{height : 10,}}></View>


<ShareButton/>

    </View>
  )
}


const styles = StyleSheet.create({

 firstBlock :{
  flexDirection:'row',
  justifyContent:'space-between',
  padding : 30,
  height:'26%',

 },
 caloriesDiv :{
  width:'45%',
  height:'100%',
  backgroundColor:'#eb5c26',
  borderRadius: 5,
 
 },
 slopeDiv: {
  width:'45%',
  height:'100%',
  backgroundColor:'#666666',
  borderRadius: 5,

 },
 container : {
   flex : 1,
    backgroundColor:'white',
 }
 ,
 smallContainer1:{
  flexDirection:'row',
  justifyContent:'space-around',
  paddingHorizontal:20,
  paddingVertical:13 ,

 },
 smallContainer2 :{
   alignItems:'center'
 }
 , 
 textInsideContainer:{
  color: '#ffffff',
  fontSize: 14,
  fontWeight: '400',
  fontStyle: 'normal',
  fontFamily:'Museo',
  padding : 5,
  marginLeft : 10,
 },
 smalltext:{
  color: '#ffffff',
  fontSize: 19,
  fontWeight: '400',
  fontStyle: 'normal',
  paddingBottom:20
 },
 verysmallText : {
   fontSize:14,
 }

  

})