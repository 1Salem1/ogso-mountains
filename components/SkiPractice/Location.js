import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import GetLocation from 'react-native-get-location'
var axios = require('axios');





export default function Location() {


      
    var config = {
        method: 'get',
        url: 'https://maps.googleapis.com/maps/api/elevation/json?locations=39.7391536%2C-104.9847034&key=YOUR_API_KEY',
        headers: { }
      };



      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });





















    const [Locations, setLocations] = React.useState([]);




    const  Location = async () =>{
        await GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 3000,
        })
        .then(location => {
            console.log(location);
            setLocations([...Locations,location]) 
     
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        })
    }

    React.useEffect(()=>{
       
       





      

        const interval = setInterval(() => {
              Location()
          }, 10000);
          return () => clearInterval(interval); 
    } , [Locations, setLocations])
  


    var myloop = [];
        myloop.push(
              <View style={{flexDirection:'row'}}>
               <Text style={{marginRight:10}}>{Locations[0]?.longitude}</Text>
               <Text style={{marginRight:10}}>{Locations[0]?.latitude}</Text>
               <Text style={{marginRight:10}}>{Locations[0]?.altitude}</Text>
              </View>
           
            
        )
    







  return (
    <View style={styles.container}>
        <StatusBar style='dark'/>
  {myloop}
    
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
  });