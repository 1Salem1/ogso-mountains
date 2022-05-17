import { StyleSheet, Text, View  , ScrollView , SafeAreaView} from 'react-native'
import React from 'react'
import WebView from 'react-native-webview' 
import { StatusBar } from 'expo-status-bar'

export default function SmartOgsoSelect() {
  return (
    

     <SafeAreaView style={{flex: 1}}>
         <StatusBar />
      <ScrollView
        style={{ width: '100%' , height : 1000 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <WebView style={{bottom:62}} source={{uri:'https://clone-7a4f4.web.app' }} originWhitelist={['*']} />
      </ScrollView>
    </SafeAreaView>
   

)
}

const styles = StyleSheet.create({ 
container: {
 flex: 1,
 backgroundColor: '#fff',

},
})