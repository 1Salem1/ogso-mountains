import { View, Text , StyleSheet, Button ,TouchableOpacity , Image , ScrollView ,TouchableHighlight, Dimensions} from 'react-native'
import React , {useState , useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import firebase from 'firebase';
import GetLocation from 'react-native-get-location'
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { AntDesign } from '@expo/vector-icons';
import LocationEnabler from "react-native-location-enabler"
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
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
import TimerIcon from '../SvgComponents/TimerIcon.js';
import Iconx from '../SvgComponents/xIcon.js';
import IconV from '../SvgComponents/vIcons.js';
import { setAdvertiserTrackingEnabledAsync } from 'expo-facebook';
import ListIcon from '../SvgComponents/ListIcons.js';
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



  const Tracking = () =>{


  }







  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
    const [Locations, setLocations] = React.useState([]);
    const [altitude, setaltitude] = React.useState("--");
    const [distance, setdistance] = React.useState("--");
    const [stop, setstop] = React.useState(true);
    const [speed, setspeed] = React.useState(0);
    const [slope , setslope] =  React.useState('--');
    const [weather , setWeather] =  React.useState(0);
    const [snow , setsnow] =  React.useState(0.00);
    const [Country , setCountry] =  React.useState("We couldn't know your current location ")
    const [City , setCity] =  React.useState(null)
    const [lat, setLat] = React.useState(0)
    const [lon, setlon] = React.useState(0)
    const [calories, setcalories] = React.useState(0)

    
    
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

    if (weather) {
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
                 <View style={{position:'absolute' , flexDirection:'row' , elevation:99999 , bottom : 454}}>
                 
                  <View style={{flexDirection:'row' , right : 90}}>
                  <Ionicons name="location-sharp" size={24} color="#e8500e" />
                      <Text style={styles.titleinsidemap1} >{City}{Country}</Text></View>
                 
                  <View style={{flexDirection:'row' , left :70}}>
                  <FontAwesome5 name="thermometer-quarter" size={24} color="#e8500e" />
                  <Text style={styles.titleinsidemap}>{weather}°c</Text>
                  </View>
                  </View> 
                
                  <View style={{flexDirection:'column' , bottom : 50}}>
                      
                  <View style={{flexDirection:'row'  , alignItems:'center'}}>
                  <FontAwesome  style={{marginRight:10}} name="circle" size={24}  color={isStopwatchStart ? 'red' : 'black'}  />
                  <Text style={styles.title}>TAP TO RECORD</Text>  
                 
                  </View>
                  <Stopwatch  options={options} laps  start={isStopwatchStart}  reset={resetStopwatch} />
                  </View>
                
                 
              
       
                  <View style={{
                      justifyContent:'center',  alignItems:'center',top:80
                  }}>



                      
                  <Text ellipsizeMode="clip"  style={{flexDirection:'column' , color : '#6666'}}numberOfLines={1} >
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    </Text>

    <Text ellipsizeMode="clip"  style={{flexDirection:'column' , bottom : 22,  transform: [{ rotate: '90deg'}] , color : '#6666'}}numberOfLines={1}>
      - - - - - - - - - - - - - - - - - - - - - 
    </Text>
                  </View>

                  <View>

<View style={{top : 85}}>

<View  style={{top :0 , right : 100 , position:'relative'}} >
        <View style={{flexDirection:'row'}}>
        <FontAwesome5 style={{marginRight:10}} name="mountain" size={24} color="#eb5c26" />
        <Text style={styles.calories}>ALTITUDE</Text>
        </View>
   
        <View  style={{flexDirection:'row' , marginLeft:30}}>
            <Text style={styles.kcal}>{altitude.toFixed(2)}</Text>
            <Text style={styles.kcal}>m</Text>
        </View>
    </View>

    <View  style={{bottom :150 , right : 100 , position:'relative'}} >
        <View style={{flexDirection:'row'}}>
        <FontAwesome5 style={{marginRight:10}} name="fire" size={24} color="#eb5c26" />
        <Text style={styles.calories}>CALORIES</Text>
        </View>
   
        <View  style={{flexDirection:'row' , marginLeft:30}}>
            <Text style={styles.kcal}>{calories}</Text>
            <Text style={styles.kcal}>kcal</Text>
        </View>
    </View>
    <View  style={{bottom :150 , left : 100 , position:'absolute'}} >
        <View style={{flexDirection:'row'}}>
        <MaterialCommunityIcons style={{marginRight:10}} name="map-marker-distance" size={24} color="#eb5c26" />
        <Text style={styles.calories}>DISTANCE</Text>
        </View>
   
        <View  style={{flexDirection:'row' , marginLeft:30}}>
            <Text style={styles.kcal}>{distance}</Text>
            <Text style={styles.kcal}>km</Text>
        </View>
    </View>
    <View  style={{top :0 , left : 100 , position:'absolute'}} >
        <View style={{flexDirection:'row'}}>
        <FontAwesome5 style={{marginRight:10}} name="ruler-combined" size={24} color="#eb5c26" />
        <Text style={styles.calories}>SLOPE</Text>
        </View>
   
        <View  style={{flexDirection:'row' , marginLeft:30}}>
            <Text style={styles.kcal}>{slope}</Text>
            <Text style={styles.kcal}>°</Text>
        </View>
       
       
  
    </View>

    
 


         






</View>


        

</View>
{isStopwatchStart ==true ?(
    <View style={{ bottom:20,flexDirection:'row', width:300,height : 50 ,justifyContent:'space-between'}}>
    <Iconx style={{top :120, right : 10 ,height : 90,width:70}}/> 
     <IconV style={{top :120, right : 5,height : 90,width:70}}/>       
     </View>) 
     : (
        <View style={{ bottom:20,flexDirection:'row', width:300,height : 50 ,justifyContent:'space-between'}}>
        <ListIcon  style={{top :120, left : 195,height : 90,width:70}} />    
     </View>
     )
     
    
}
</View>
             
<TouchableOpacity style={{elevation:300,top :150,height : 600, width:600 , alignContent:'center' , textAlign:'center' , alignItems:'center'
}} onPress={() => {
    setIsStopwatchStart(!isStopwatchStart);
    setResetStopwatch(false);
    Tracking()
  }} >
           <TimerIcon />  
          
          </TouchableOpacity>   
         
        
                        
			
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
        left : 10
      },
      title : {
        color: '#666666',
        fontFamily: 'Museo',
        fontSize: 15,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'left',
      }
      ,
    Time : {
        color: '#666666',
        fontSize: 28,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign:'center',
      },
      titleinsidemap1:{
        color: '#eb5c26',
        fontFamily: 'Museo',
        fontSize: 14,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'left',
        lineHeight: 22,
        marginLeft:5
      },
      calories : {
        color: '#666666',
        fontFamily: 'Museo',
        fontSize: 17,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'left',
      },
      kcal: {
        color: '#666666',
        fontFamily: 'Museo Sans 300',
        fontSize: 17,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'left',
        lineHeight: 22,
      }

})

const options = {
    
    text: {
        color: '#666666',
        fontSize: 28,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign:'center',
    },
  };