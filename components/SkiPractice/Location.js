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
    const [stop, setstop] = React.useState(true);
    const [speed, setspeed] = React.useState(0);
    const [slope , setslope] =  React.useState(0);





React.useEffect(()=>{



})




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
     

const StartTrack = () => {






  
 
     interval = setInterval(() => {
       Location()
       }, 1000);
     
       //clearInterval(interval) 
      



}



  


    var myloop = [];
        myloop.push(
              <View style={{flexDirection:'column'}}>
               <Text  style={{marginRight:10}}>longitude {Locations[0]?.longitude.toFixed(3)}</Text>
               <Text style={{marginRight:10}}>latitude {Locations[0]?.latitude.toFixed(3)} </Text>
               <Text style={{marginRight:10}}>altitude {parseFloat(altitude).toFixed(3)} m</Text>
               <Text style={{marginRight:10}}>distance {parseFloat(distance).toFixed(3)*1000} m</Text>
               <Text style={{marginRight:10}}></Text>
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
