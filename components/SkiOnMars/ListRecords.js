import { View, Text , StatusBar ,StyleSheet  , FlatList} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Rec from '../SkiPractice/Rec'
import { SafeAreaView } from 'react-native-safe-area-context'
import SkiActivityRec from '../SkiPractice/SkiActivityRec'
export default function ListRecords(props) {
  return (

<View style={styles.container} >
      <Text style={styles.title}>ActivityHistory</Text>
      <SkiActivityRec/>
      <View style={{height : 150}}></View>
    </View>
 
  )
}

const styles = StyleSheet.create({
  
    container: {
      marginTop: 16,
  
  
      alignItems: 'center',
      paddingBottom: 5,
      shadowColor: 'rgba(91, 77, 188, 0.18)',
      shadowOffset: { width: 12, height: 0 },
      shadowRadius: 32,
      borderRadius: 25,
      height: 11980,
  
    },
    title: {
      color: '#000000',
      fontFamily: 'Museo',
      fontSize: 18,
      fontWeight: '400',
      fontStyle: 'normal',
      textAlign: 'left',
      lineHeight: 36,
      right: 100,
      top : 20,
    },
    
  
  })