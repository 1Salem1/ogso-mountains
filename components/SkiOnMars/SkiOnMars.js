import { View, Text , StyleSheet, Button ,TouchableOpacity , Image , ScrollView , Dimensions} from 'react-native'
import React , {useState , useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import firebase from 'firebase';
import GetLocation from 'react-native-get-location'
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { AntDesign } from '@expo/vector-icons';
import LocationEnabler from "react-native-location-enabler"
import { Entypo } from '@expo/vector-icons'; 
import countries from '../SkiPractice/LocationsMaps.js';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import SkiTab from '../SkiPractice/SkiPractiseTab.js';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 
import style from '../SkiPractice/MapStyle/map.js';
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import MarkerSvg from '../SvgComponents/MarkerSvg.js';
var axios = require('axios');
const haversine = require('haversine')




export default function Location({navigation }) {


    const window = Dimensions.get('window');
    const { width, height }  = window
    
    

    var MapStyle = style
    const saved =[]
   

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
    const [lat, setLat] = React.useState(0)
    const [lon, setlon] = React.useState(0)

    
    
    useEffect(()=>{
    CheckLocation()
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
           setLat(location.latitude)
           setlon(location.longitude)
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

    if (lat) {
		return(
    <View style={styles.container}>
	<MapView      
    
    
                    
                
				    showsMyLocationButton
		onPress={(e)=>{
			setLat(e.nativeEvent.coordinate.latitude)
			setlon(e.nativeEvent.coordinate.longitude)
		}}
				
				
					customMapStyle={MapStyle}
					style={styles.map}
					initialRegion={{
						latitude: lat,
						longitude: lon,
						latitudeDelta: 0.2,
						longitudeDelta: 0.2
					}}
					provider="google"
				>

					<Marker
						coordinate={{ latitude: lat, longitude: lon }}
						pinColor="black"
						draggable={false}
				
					
					>
						<MarkerSvg />
					</Marker>

				</MapView>
               <View style={{ justifyContent:'center',  alignItems:'center' ,backgroundColor:'white' , height : 450 , width:"100%" , position:'absolute' , bottom : 90 , 
              zIndex: 999, 
              shadowColor: '#000',
              borderRadius: 10,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 2,  
              elevation: 35

              }}>
              {/*     <View style={{position:'absolute' , flexDirection:'row' , elevation:99999 , bottom : 454}}>
                  <Ionicons name="location-sharp" size={24} color="#e8500e" />
                  <Text style={styles.titleinsidemap} > {City}{Country}</Text>
                  <View style={{flexDirection:'row' , left :170}}>
                  <FontAwesome5 name="thermometer-quarter" size={24} color="#e8500e" />
                  <Text style={styles.titleinsidemap}>{weather}°c</Text>
                  </View>
                  </View> */}
                  <View style={{flexDirection:'row' , bottom :160 }}>
                
                  <Text>TAP TO RECORD</Text>   
                  </View>
                  <Text style={{bottom :140 }}>00:00:00</Text>
       
                  <View style={{
                      justifyContent:'center',  alignItems:'center',top:30
                  }}>
                      
                  <Text ellipsizeMode="clip"  style={{flexDirection:'column' , color : '#6666'}}numberOfLines={1} >
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    </Text>

    <Text ellipsizeMode="clip"  style={{flexDirection:'column' , bottom : 22,  transform: [{ rotate: '90deg'}] , color : '#6666'}}numberOfLines={1}>
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    </Text>
                  </View>


               </View>
             
             
			
    </View>
  )}
  else {
    return (
        <Text></Text>
    )
  }
                    
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems:'center',
        backgroundColor:'white',
        
    }
    ,
    map: {
        top : 0,
		width: Dimensions.get('window').width,
		height: 330,
		shadowColor: 'rgba(235, 92, 38, 0.18)',
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 35,
		elevation:1
	  },
      titleinsidemap:{
        color: '#eb5c26',
        fontFamily: 'Museo',
        fontSize: 14,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'left',
        lineHeight: 22,
      }
})