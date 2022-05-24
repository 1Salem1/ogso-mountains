import { View, Text , StyleSheet, Button ,TouchableOpacity , Image , ScrollView} from 'react-native'
import React , {useState , useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import firebase from 'firebase';
import GetLocation from 'react-native-get-location'
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { AntDesign } from '@expo/vector-icons';
import LocationEnabler from "react-native-location-enabler"
import { Entypo } from '@expo/vector-icons'; 
import countries from './LocationsMaps.js'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import SkiTab from './SkiPractiseTab.js'
import { LocationContext } from '../../Context/LocationContext.js';
import SkiActivityRec from './SkiActivityRec.js';

var axios = require('axios');
const haversine = require('haversine')




export default function Location({ route, navigation }) {




  const {
    PRIORITIES: { HIGH_ACCURACY },
    addListener,
    checkSettings,
    requestResolutionSettings
  } = LocationEnabler


  const config = {
    priority: HIGH_ACCURACY, // default BALANCED_POWER_ACCURACY
    alwaysShow: true, // default false
    needBle: false, // default false
  };


  const CheckLocation = () => {
   const listener = addListener(({ locationEnabled }) =>
  console.log(`Location are ${ locationEnabled ? 'enabled' : 'disabled' }`)
  )
  checkSettings(config)
  requestResolutionSettings(config);
  listener.remove();
  }









  const [isStopwatchStart, setIsStopwatchStart] = React.useState(false);
  const [resetStopwatch, setResetStopwatch] = React.useState(false);
  const {value , setValue} = React.useContext(LocationContext)



var saved= []
      
var interval 

    
    const [Locations, setLocations] = React.useState([]);
    const [altitude, setaltitude] = React.useState(0);
    const [distance, setdistance] = React.useState(0);
    const [stop, setstop] = React.useState(true);
    const [speed, setspeed] = React.useState(0);
    const [slope , setslope] =  React.useState(0);
    const [weather , setWeather] =  React.useState(0);
    const [snow , setsnow] =  React.useState(0.00);
    const [Country , setCountry] =  React.useState("We couldn't know your current location ")
    const [City , setCity] =  React.useState(null)
    const [imageUrl , setImageUrl]= useState(null) 

     

    const fetchDate = () => {
        const user = firebase.auth().currentUser;
        var firebaseRef =firebase.database().ref('users')
        firebaseRef.once("value" ,function(snapshot){
          var data = snapshot.val()
          for(let i in data){
            if (data[i].email.toLowerCase() == user.email.toLowerCase()){
             setImageUrl(data[i].profile_picture)
              return true 
            } 
          }
        })
      }
    
    
    useEffect(()=>{
    CheckLocation()
    fetchDate()
    Location()

    },[])



   
    












const Weather= async (Location) =>{

  var configT = {
    method: 'get',
   // url : `https://api.openweathermap.org/data/2.5/forecast?lat=${Location.latitude}&lon=${Location.longitude}&appid=d4a0974ba2f6727042c75c565bca82a6`,
   url : `https://api.openweathermap.org/data/2.5/weather?lat=${Location.latitude}&lon=${Location.longitude}&appid=c5624cf89e15030b85908936f72a6d65&units=metric`
  };

 axios(configT)
  .then(function (response) {
   // console.log(JSON.stringify(response.data))
    const country = countries.filter(function (i,n){
      return i.abbreviation==response.data.sys.country;
  })[0];
if (response.data.name){
  setCity(response.data.name+' , ')
}
   // console.log(response.data.snow['1h'])
  
    setWeather(response.data.main.temp)
    if (country){
      setCountry(country.country)
    }
    if (response.data.snow){
      setsnow(response.data.snow['1h'])
    }
    else {
      setsnow(0.00)
    }

    if(!country.country && response.data.name ){
      setCountry('We dont know this location')
      setCity(null)
    }
  
   
}) .catch((error) => {
  console.log(error)
})

}



    const  Location = async () =>{
        await GetLocation.getCurrentPosition({
        
        })
        .then(location   => {

          Weather(location)
           // console.log(location);
           var config = {
            method: 'get',
            url:  `https://maps.googleapis.com/maps/api/elevation/json?locations=${location.latitude},${location.longitude}&key=AIzaSyCUsIk48NWmjgHDfp_xu255cIdUnGOpu54`,
            headers: { }
          };
            
            axios(config)
            .then(function (response) {
            //  console.log(JSON.stringify(response.data))
             saved.push(response)
              setaltitude(response.data.results[0].elevation)
           
                let start = {
                  latitude: saved[0].data.results[0].location.lat,
                  longitude: saved[0].data.results[0].location.lng
                }
                
                let end = {
                  latitude: saved[saved.length-1].data.results[0].location.lat,
                  longitude: saved[saved.length-1].data.results[0].location.lng
                }
             
                 var x = parseFloat(haversine(start, end )).toFixed(3)/3
    
                setdistance(x)
               setspeed()
               
            
            })
            .catch(function (error) {
                console.log(error)
            });
           
            setLocations([...Locations,location]) 
         //   setslope(distance/altitude)
        })
        .catch(error => {
            const { code, message } = error;
           // console.warn(code, message);
        }).catch((e)=>{
          console.log(e)
        })
      
        











    }

  return (
    
    <View style={styles.container}>
    <View style={{flexDirection:'row' , top : 20}}>
    <AntDesign onPress={() => {navigation.navigate('Home') }} style={{  right: 150,    top : 30, }} name="left" size={24} color="black" />
   <TouchableOpacity style={{ left : 150,}} onPress={() => {navigation.navigate('profile') }}  >
   <Image   style={styles.avatar}   source={{ uri: `${imageUrl}`
}}
/>
   </TouchableOpacity>

    </View>
       <StatusBar  style='dark' />
    <View style={{ marginTop: 70 }}>
       
        <Text style={styles.title}>Ski On Mars Tracker</Text> 
        <Text style={{
    height: 22,
    color: '#000000',
    fontFamily: 'Museo',
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    right : 35,
    lineHeight: 18,}}>OVERALL SKI CONDITIONS</Text>
      <Text style={{
    color: '#666666',
    fontFamily: 'Museo Sans 300',
    fontSize: 14,
    marginTop : 5,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    right : 35,
    lineHeight: 22,}}>  <Entypo name="location-pin" size={17} color="#666666" /> {City}{Country}</Text> 
    </View>
  
    <View style={{flexDirection:'row' , marginTop:30 }}>
    <FontAwesome5 name="thermometer-quarter" size={29} color="#e8500e" />
       <Text style={{   color: '#707070',
    fontFamily: 'Museo Sans 300',
    fontSize: 22,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 22,
    marginRight: 70 ,
    
    }}>   {weather}°C</Text>
      <View style={{
        flexDirection:'row' 
      }}>
        <FontAwesome name="snowflake-o" size={29} color="#e8500e" />
       <Text style={{
          color: '#707070',
         fontFamily: 'Museo Sans 300',
         fontSize: 22,
         fontWeight: '400',
         fontStyle: 'normal',
         textAlign: 'left',
         lineHeight: 22,
       }}
       >   {parseFloat(snow).toFixed(2)} cm</Text>
     
      </View>
       
    </View>
    <Text style={{left :120,
     color: '#707070',
     fontFamily: 'Museo',
     bottom : 5,
     fontSize: 12,
    }} >   Last 3 hours Snowfall</Text>
    <TouchableOpacity onPress={() => { navigation.navigate('map') }} style={{width: 220,
    height: 57,
    right : 60,
    borderRadius: 5,
    marginTop:20,
    borderColor: '#cccccc',
    borderStyle: 'solid',
    borderWidth: 1,
    
    justifyContent:'center',
    backgroundColor: '#ffffff',}}>
      <View style={{flexDirection:'row'}} >
      <MaterialIcons style={{marginLeft:7}} name="my-location" size={24} color="#666" /> 
      <Text style={{
       
         color: '#666666',
         fontFamily: 'Museo',
         fontSize: 14,
         textAlign:'center',
         fontWeight: '400',
         fontStyle: 'normal',
         textAlign: 'center',
       
         lineHeight: 22,
      }}>  Select another place</Text>
      </View>
   
    </TouchableOpacity>


<SkiTab />




</View>
)
}


const styles = StyleSheet.create({
notifications :{
borderRadius: 10,
borderColor: '#ffd6c7',
borderStyle: 'solid',
borderWidth: 1,
width: 335,
flexDirection:'row',
marginBottom:15
},
container: {
backgroundColor: '#ffffff',
flex: 1,
alignContent: 'center',
alignItems: "center",
},
title: {
bottom: 20,
marginBottom:20,
color: '#000000',
fontFamily: 'Museo',
fontSize: 28,
fontWeight: '400',
fontStyle: 'normal',
textAlign: 'left',
right : 35,
lineHeight: 36,
},
inOur: {
width: 320,
height: 137,
color: '#666666',
fontSize: 14,
fontWeight: '400',
fontStyle: 'normal',
textAlign: 'center',
bottom: 10,
lineHeight: 23,
},

TextStyle: {
color: 'black',
fontFamily: 'Museo',
fontSize: 13,
fontWeight: '400',
fontStyle: 'normal',
textAlign: 'left',
left: 30,
width: 320,
},
loginScreenButton: {
width: 159,
height: 50,
borderRadius: 5,
backgroundColor: '#eb5c26',
left: 170,
position :'absolute'
},
loginText: {
color: '#fff',
textAlign: 'center',
alignItems:'center',
justifyContent :'center',
fontWeight :'bold',
top : 12
},
avatar: {
width: 50,
height: 50,
borderRadius: 63,
borderWidth: 4,
borderColor: "white",
alignSelf:'center',
top : 20,

}
})