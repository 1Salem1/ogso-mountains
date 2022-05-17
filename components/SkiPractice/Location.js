import { View, Text , StyleSheet, Button ,TouchableOpacity ,TouchableHighlight, SafeAreaView , Image , ScrollView} from 'react-native'
import React , {useState , useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import firebase from 'firebase';
import GetLocation from 'react-native-get-location'
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import countries from './LocationsMaps.js'
var axios = require('axios');
const haversine = require('haversine')




export default function Location({navigation}) {









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
    const [weather , setWeather] =  React.useState(0);
    const [snow , setsnow] =  React.useState('No Snow at the momment');
    const [Country , setCountry] =  React.useState(null)
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
    console.log(JSON.stringify(response.data))
    const country = countries.filter(function (i,n){
      return i.abbreviation==response.data.sys.country;
  })[0];
  console.log(country.country)
    //console.log(response.data.city.country)
    setCity(response.data.name)
    setCountry(country.country)

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
              console.log(JSON.stringify(response.data))
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



  


/*     var myloop = [];
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
     */
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
    lineHeight: 22,}}>  <Entypo name="location-pin" size={17} color="#666666" /> {City}, {Country}</Text> 
    </View>
  
    <View>

     
    </View>

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