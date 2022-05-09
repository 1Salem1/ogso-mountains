import { View, Text , StyleSheet, Button ,TouchableOpacity ,TouchableHighlight, SafeAreaView} from 'react-native'
import React , {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import GetLocation from 'react-native-get-location'
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
var axios = require('axios');
const haversine = require('haversine')




export default function Location() {



  const [isStopwatchStart, setIsStopwatchStart] = React.useState(false);
  const [resetStopwatch, setResetStopwatch] = React.useState(false);




const saved=[]
      
var interval 


    const [Locations, setLocations] = React.useState([]);
    const [altitude, setaltitude] = React.useState(0);
    const [distance, setdistance] = React.useState(0);
    const [stop, setstop] = React.useState(false);
    const [speed, setspeed] = React.useState(0);
    const [slope , setslope] =  React.useState(0);
    






    const  Location = async () =>{
        await GetLocation.getCurrentPosition({
        
        })
        .then(location => {
           // console.log(location);
           var config = {
            method: 'get',
            url:  `https://maps.googleapis.com/maps/api/elevation/json?locations=${location.latitude},${location.longitude}&key=AIzaSyCUsIk48NWmjgHDfp_xu255cIdUnGOpu54`,
            headers: { }
          };
       
            axios(config)
            .then(function (response) {
             // console.log(JSON.stringify(response.data))
        
              setaltitude(response.data.results[0].elevation)
              if(saved.length >3){
                let start = {
                  latitude: saved[length].latitude,
                  longitude: saved[length].longitude
                }
                
                let end = {
                  latitude: saved[length-1].latitude,
                  longitude:saved[length-1].longitude
                  
                }
             
               setdistance(haversine(start, end , {threshold: 1, unit: 'meter'}))
            
               setspeed((distance /altitude)/0.0008333333 )
               
             }
            })
            .catch(function (error) {
            //  console.log(error);
            });
           
            setLocations([...Locations,location]) 
            saved.push(location)
           // console.log(saved)
         
            setslope(altitude/distance)
        })
        .catch(error => {
            const { code, message } = error;
           // console.warn(code, message);
        })
    }
     

const StartTrack = () => {
  setstop(!stop)
  if(stop){
   clearInterval(interval)
  }
   else  {
     interval = setInterval(() => {
       Location()
       }, 1000);
     
       
      }
}



  


    var myloop = [];
        myloop.push(
              <View style={{flexDirection:'column'}}>
               <Text  style={{marginRight:10}}>longitude {Locations[0]?.longitude.toFixed(3)}</Text>
               <Text style={{marginRight:10}}>latitude {Locations[0]?.latitude.toFixed(3)} </Text>
               <Text style={{marginRight:10}}>altitude {parseFloat(altitude).toFixed(3)} m</Text>
               <Text style={{marginRight:10}}>distance {parseFloat(distance).toFixed(8)} m</Text>
               <Text style={{marginRight:10}}>speed {parseFloat(speed).toFixed(2)} km/h</Text>
               <Text style={{marginRight:10}}>Slope {parseFloat(slope).toFixed(2)} °</Text>
            
  
              </View>
           
            
        )
    
  return (
    
    <View style={styles.container}>
        <StatusBar style='dark'/>
  {myloop}
          <Stopwatch
            laps
            msecs
            start={isStopwatchStart}
            //To start
            reset={resetStopwatch}
            //To reset
            options={options}
            //options for the styling
        
          />
          <TouchableHighlight
            onPress={() => {
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false);
            }}>
            <Text onPress={StartTrack} style={styles.buttonText}>
              {!isStopwatchStart ? 'START' : 'STOP'}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setIsStopwatchStart(false);
              setResetStopwatch(true);
            }}>
            <Text style={styles.buttonText}>RESET</Text>
          </TouchableHighlight>

    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    marginTop: 10,
  },
});

const options = {
  container: {
    padding: 5,
    borderRadius: 5,
    width: 200,
  },
  text: {
    color: 'black',
    marginLeft: 7,
  },
};
