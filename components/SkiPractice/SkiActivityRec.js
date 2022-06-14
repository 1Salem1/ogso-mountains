import { View, Text , StatusBar ,StyleSheet  , FlatList} from 'react-native'
import React, { useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Rec from './Rec'
import firebase from 'firebase';
import { SafeAreaView } from 'react-native-safe-area-context'
export default function SkiActivityRec(props) {

  const [data,setData] = React.useState()
  const fetchDate = () => {
    var tab = []
    const user = firebase.auth().currentUser;
    var firebaseRef =firebase.database().ref('skiactivity')
    firebaseRef.once("value" ,function(snapshot){
      var data = snapshot.val()
     // console.log("FROM DATA", data)
      for(let i in data){
        if (data[i].email.toLowerCase() == user.email.toLowerCase()){
               tab.push(data[i])
            
        } 
       // console.log("from data", tab)
        
      }
    })
    return tab
  }


  useEffect(()=>{
fetchDate()
  },[])



  console.log(props.tab)
  return (

    <View style={{flex: 1 , justifyContent:'center' , alignItems:'center' }}>
 <ScrollView
      vertical={true}
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
         <View>
         {props.tab !=null ? props.tab?.map(x => {
        return    <Rec  data={x}/>}
      ) : <Text></Text>
      
      
      }
        
          
            
         </View>




            <View style={{height : 100}}>

            </View>
  </ScrollView>
    </View>
 
  )
}
const styles = StyleSheet.create({
    contentContainer: {
      marginTop: 0,
      paddingVertical: 20,
      flex : 1
    },
    welcome: {
      flex: 1,
      margin: 20,
      backgroundColor: 'orange',
      margin: 10,
      textAlign: 'center',
      fontSize: 20,
      paddingTop: 70,
    }
  });