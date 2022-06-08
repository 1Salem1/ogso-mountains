import { View, Text , StatusBar ,StyleSheet  , FlatList} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Rec from './Rec'
import { SafeAreaView } from 'react-native-safe-area-context'
export default function SkiActivityRec(props , navigation) {
  return (

    <View style={{flex: 1 , justifyContent:'center' , alignItems:'center' }}>
 <ScrollView
      vertical={true}
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
         <View>
       
            <Rec  />
         </View>




            <View style={{height : 100}}>

            </View>
  </ScrollView>
    </View>
 
  )
}
const styles = StyleSheet.create({
    contentContainer: {
      marginTop: 0,
      paddingVertical: 20,
      flex : 1
    },
    welcome: {
      flex: 1,
      margin: 20,
      backgroundColor: 'orange',
      margin: 10,
      textAlign: 'center',
      fontSize: 20,
      paddingTop: 70,
    }
  });