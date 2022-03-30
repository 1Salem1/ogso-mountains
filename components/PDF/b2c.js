import * as React from 'react'
import { Dimensions, View , StyleSheet } from 'react-native'
import PDFReader from 'rn-pdf-reader-js'
import { StatusBar } from 'expo-status-bar';
export default class App extends React.Component {
  render() {
    return (

        <View style={styles.container}>
               <StatusBar style="auto" />
             <PDFReader style={{width: Dimensions.get('window').width , height:Dimensions.get('window').height}}
        source={{
          uri: 'https://ogso-mountain-essentials.com/wp-content/uploads/2021/12/OGSO-B2C-CATALOG-21-22-V15_compressed.pdf',
        }}
      />
        </View>
 
    )
  }
}

const styles =StyleSheet.create({
container :
    {
        paddingTop: 30,
        flex: 1,
    }
   
})