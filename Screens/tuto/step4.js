import { View, Text  , StyleSheet , ImageBackground } from 'react-native'
import { Button } from 'react-native-elements';
import React from 'react'
import { StatusBar  } from 'expo-status-bar';

export default function Step4({ navigation }) {
  return (
      
    <View style={styles.container}>
       <ImageBackground source={require('../../assets/Backgrounds/Splace.png')} resizeMode="cover" style={styles.image}>
        <Text style={styles.containerText} >{`LET'S ENJOY`}</Text>
      <Text style={styles.containerText}>{`YOUR`}</Text>
      <Text style={styles.containerText}>{`EXPEDITION!`}</Text>
      <StatusBar style="auto" />



    <View style={styles.ButtonContainer}>
    <Button  onPress={()=> navigation.navigate('Login')}
                title="Sign In"
                buttonStyle={{
                  backgroundColor: '#e8500e',
                  borderRadius: 3,
                  height : 55,
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                  
                }}
              />
              
      <Button onPress={()=> navigation.navigate('signup')}
                title="Sign Up"
                buttonStyle={{
                  backgroundColor: 'black',
                  borderRadius: 3,
                  height : 55,
                }}
                containerStyle={{
                  width: 200,
                
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
    </View>
      
     
    </ImageBackground>
      
    </View>
    
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerText : {
        fontFamily: "Esoris",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: "400",
        top : -140,
        fontSize : 32,
        lineHeight: 28.5,
        textAlign : 'center' 
        
    },
    ButtonContainer : {
        bottom : 70,
        alignItems : 'center'
    },  
    
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%'
      },
    
   
  });