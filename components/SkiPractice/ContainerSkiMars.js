import { View, Text , StyleSheet , TouchableOpacity , Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function ContainerSkiMars() {

  
  const navigation = useNavigation();


  return (
    <View style={styles.firstBottom1}>
    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center' }} onPress={() => { navigation.navigate('SkiOnMars') }} >
      <Text style={{

        marginTop: 22,
        width: 170,
        height: 177,
        color: '#eb5c26',
        fontFamily: 'Museo',
        fontSize: 21,
        fontWeight: '400',
        fontStyle: 'normal',

        lineHeight: 21,
      }}>Ski On Mars{"\n"}Tracker{"\n"}{"\n"}{"\n"}<AntDesign style={{}} name="right" size={24} color="#e8500e" /> </Text>

      <Image style={{ left: 10, marginTop: 25 }} source={require('../../assets/Backgrounds/ski-on-mars-tracker.png')} />
    </TouchableOpacity>
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
     justifyContent:'center'
    },
  
   
   
    firstBottom1: {
      shadowColor: 'rgba(0,0,0, .4)', // IOS
      shadowOffset: { height: 1, width: 1 }, // IOS
      shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      elevation: 5, // Android
      width: 370,
      height: 150,
      backgroundColor: '#fff4f2',
      borderRadius: 20,
      top : '22%'
    },
    containerB: {
      shadowColor: 'rgba(0,0,0, .4)', // IOS
      shadowOffset: { height: 1, width: 1 }, // IOS
      shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      elevation: 20, // Android
      marginTop: 60,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
  
    }
  });
  
  
  