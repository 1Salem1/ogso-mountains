
import React from 'react'
import { Image, StyleSheet, Text, View, ImageBackground  , TouchableOpacity} from 'react-native';
import { Button } from 'react-native-web';
import SvgComponent from '../../components/SvgComponents/ButtonStep';
import { StatusBar } from 'expo-status-bar';




export default function Step1({ navigation }) {
  return (
    <View style={styles.container} >
      <ImageBackground source={require('../../assets/Backgrounds/onboarding-page1.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.welcomeStep1letsStartyourExpedition}><Text data-layer="6f425f1a-3de9-48af-bb33-ec89d59a323a" 
        style={{ "marginTop": -1, "color": "rgba(255, 255, 255, 1)", "fontSize": 35, "fontWeight": "400", "fontStyle": "normal", "fontFamily": "Esoris", "textAlign": "center", "lineHeight": 38.5 }}>
          <Text style={styles.TextOpacity}>{`EXPLORE`}</Text>
          {`\n MARS WITH US`} !</Text></View>
        <View style={styles.containerDot}><Text style={styles.dot} >    {'\u2B24'}   <Text style={{color : 'white'}}>{'\u2B24'}</Text>   {'\u2B24'}</Text></View>
        <TouchableOpacity   onPress={()=> navigation.navigate('step3')}  style={{alignItems:'center',justifyContent:'center' , height : 1000} }>
        
            < SvgComponent    style={{top : 280}} />
         
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({


  dot : {
    fontSize : 9,
    color: "rgba(255, 255, 255, 0.5)",
  },
  containerDot:{
    justifyContent: 'center',
    alignItems: 'center',
    bottom : 20,
    top : 420,
    
  }
  ,
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%'
  },
  text: {
    marginTop: -1,
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    fontStyle: "normal",
    fontFamily: "Esoris",
    textAlign: "center",
    lineHeight: 38.5
  },
  welcomeStep1letsStartyourExpedition: {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontStyle": "normal",
    "fontFamily": "Esoris",
    "textAlign": "center",
    "top": 110,
    'left' : 24
  },
  TextOpacity : {
    color: 'rgba(255,255,255,0.4)',
    textAlign:'center'
  }

});