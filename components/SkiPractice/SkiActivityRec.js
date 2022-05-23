import { View, Text , StatusBar ,StyleSheet  , FlatList} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Rec from './Rec'
import { SafeAreaView } from 'react-native-safe-area-context'
export default function SkiActivityRec() {
  return (

    <View style={{flex: 1}}>
 <ScrollView
      vertical={true}
        style={{ flexGrow:0 }}
        showsVerticalScrollIndicator={false}>
         <View>
         <Rec/>
            <Rec/>
            <Rec/>
            <Rec/>

            <Rec/>
            <Rec/>
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