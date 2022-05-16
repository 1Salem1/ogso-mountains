import { View, Text , StyleSheet, Button, Image , TouchableOpacity ,  ActivityIndicator } from 'react-native'
import React from 'react'
import firebase from 'firebase'
import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'
import SearchBar from './bar/SearchBar'
import List from './bar/List'
import { AntDesign } from '@expo/vector-icons'; 
export default function Home({navigation}) {
  
  const [Name , setName] = useState('Dear Martian')
  const [imageUrl , setImageUrl]= useState(null) 
  const [display , setDisplay ] = useState(false)
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();


  function capitalizeFirstLetter(string) {

    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  const getData = async () => {
    const apiResponse = await fetch(
      "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
    );
    const data = await apiResponse.json();
    setFakeData(data);
  };



  useEffect(() => {
   getData()
  }, []);


  const fetchDate = () => {
    const user = firebase.auth().currentUser;
    var firebaseRef =firebase.database().ref('users')
    firebaseRef.once("value" ,function(snapshot){
      var data = snapshot.val()
      for(let i in data){
        if (data[i].email.toLowerCase() == user.email.toLowerCase()){
         setImageUrl(data[i].profile_picture)
          setName(capitalizeFirstLetter(data[i].first_name) + ' ' + capitalizeFirstLetter(data[i].last_name))
          setDisplay(true)
          return true 
        } 
      }
    })
  }


useEffect(()=>{
fetchDate()

})




if(display){
  return (
    <View style={styles.container }  >
      <View style={styles.topContainer}>
      <View style={styles.smallContainer}>
          <StatusBar style='dark'/>
      <Text style={styles.hiFoulen}><Text style={styles.Foulen}>Hi </Text>{Name}</Text>
        <Text style={styles.Textc}>Let’s go for a new Adventure</Text>
        
        <View>

        </View>
        
      </View>
      <TouchableOpacity style={{ left : 150}} onPress={() => {navigation.navigate('profile') }}   >
      <Image 
         style={styles.avatar}   source={{
          uri: `${imageUrl}`
        }}
      />
      </TouchableOpacity>

   
      </View>

      <View style={styles.containerB}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {searchPhrase=='' ? (
        <ActivityIndicator size="large" />
      ) : (
        
          <List
            searchPhrase={searchPhrase}
            data={fakeData}
            setClicked={setClicked}
          />
        
      )}
<View >
<View style={styles.firstBottom1}>
<View style={{flexDirection:'row' , justifyContent:'center' }}>
  <Text style={{ 
    marginTop:22,
    marginRight:10,
    height: 177,
    color: '#eb5c26',
    fontFamily: 'Museo',
    fontSize: 21,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 21,}}>Ski On Mars {"\n"}Tracker{"\n"}{"\n"}{"\n"}<AntDesign style={{}} name="right" size={24} color="#e8500e" /> </Text>
  
  <Image style={{marginTop:25}}  source={require('../assets/Backgrounds/ski-on-mars-tracker.png')}/>
</View>
</View>
<View style={styles.firstBottom2}>
<View style={{flexDirection:'row' , justifyContent:'center' }}>
  <Text style={{ 
    marginTop:22,
    marginRight:10,
    height: 177,
    color: '#9d76b1',
    fontFamily: 'Museo',
    fontSize: 21,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 21,}}>Smart{"\n"}Product{"\n"}Selector{"\n"}{"\n"}<AntDesign style={{}} name="right" size={24} color="#9d76b1" /> </Text>
  
  <Image style={{marginTop:25}}  source={require('../assets/Backgrounds/smart-product-selector.png')}/>
</View>
</View>
<View style={styles.firstBottom3}>
<View style={{flexDirection:'row' , justifyContent:'center' }}>
  <Text style={{ 
    marginTop:22,
    marginRight:10,
    height: 177,
    color: '#363e8d',
    fontFamily: 'Museo',
    fontSize: 21,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 21,}}>Product{"\n"}Catalog{"\n"}{"\n"}{"\n"}<AntDesign style={{}} name="right" size={24} color="#363e8d" /> </Text>
  
  <Image style={{marginTop:25}}  source={require('../assets/Backgrounds/product-catalog.png')}/>
</View>
</View>

</View>
      </View>
     
   
    </View>
  )
}
else {
    return( <AppLoading/> )
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    
    },
    hiFoulen : {
      color: '#eb5c26',
      fontFamily: 'Museo',
      fontSize: 18,
      fontStyle: 'normal',
      textAlign: 'left',
      lineHeight: 36,

    },
    Foulen : {
      color: 'black',
      fontFamily: 'Museo',
      fontSize: 18,
      fontWeight: '400',
      fontStyle: 'normal',
      textAlign: 'left',
      lineHeight: 36,

    },
    smallContainer : {
      top : 57,
      left : 19,
    },
    
    Textc : {
        bottom : 10,
        color: '#666666',
        fontSize: 13,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'left',
        lineHeight: 36,
    
    },
     
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    alignSelf:'center',
    top : 50,
  
  },
  topContainer : {

    flexDirection : 'row'
  },
  firstBottom1: {
    width: 370,
    height: 150,
    backgroundColor: '#fff4f2',
    marginBottom : 20,
    borderRadius :20
  },
  firstBottom2: {
    width: 370,
    height: 150,
    backgroundColor: '#ffebf6',
    marginBottom : 20,
    borderRadius :20
  },
  
  firstBottom3: {
    width: 370,
    height: 150,
    backgroundColor: '#e3ecfd',
    marginBottom : 20,
    borderRadius :20
  }
  ,
  containerB : {
    marginTop : 60,
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    
  }
  });


  