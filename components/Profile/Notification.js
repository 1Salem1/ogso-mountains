import { Switch, View, Text , StyleSheet , TextInput ,TouchableOpacity, Image} from 'react-native'
import React , {useState , useEffect} from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import firebase from 'firebase';
export default function Notification() {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const user = firebase.auth().currentUser;
 // console.log(user)





    
  const onLogout = () => {
    firebase.auth().signOut().then((x) => {
    //  console.log(x)
      }).catch((error) => {
      // console.log(error)
      });
}
  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>Notification</Text>
          <View style={{marginLeft :150}}>
            <View>
          <Text style={{ width: 146,
    height: 15,
   marginBottom:5,
    color: '#666666',
    fontFamily: 'Museo',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    right : 90,
    
    lineHeight: 14,}}>Notification settings</Text>
    </View>
    <View style={{flexDirection :'row'}}>
        <Text style={{
 
  
    color: '#666666',
    fontFamily: 'Museo',
    fontSize: 12,
    fontWeight: '400',
    right : 90,
    
    fontStyle: 'normal',
 
    lineHeight: 14,}}
        
        >Allow The MARTIAN to send notifications</Text>
          <Switch style={{right : 50 ,bottom : 5}}
        trackColor={{ false: "#767577", true: "#eb5c26" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        
        
        </View>

          </View>

          <Text style={{
    height: 15,
    color: '#666666',
    fontFamily: 'Museo',
    fontSize: 12,
    right : 90,
    marginTop:15,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
   marginBottom:20,
    lineHeight: 14,}}>RECENT NOTIFICATIONS</Text>

<View 
     style={styles.notifications}>
      <View style={{padding:10}} >
      <Image style={{height : 50 , width : 50}}source={require('../../assets/icons/Notification.png')} />
        </View>
        <View style={{
          padding : 20
        }}>
        <Text style={{
           
          
              color: '#000000',
              fontFamily: 'Museo',
              fontSize: 14,
              fontWeight: '400',
              fontStyle: 'normal',
              textAlign: 'left',
             
              lineHeight: 14,
        }}>New Products are coming</Text>
       <Text style={{
          
     
           color: '#a1a1a1',
           fontFamily: 'Museo',
           fontSize: 13,
           fontWeight: '400',
           fontStyle: 'normal',
           textAlign: 'left',
           lineHeight: 14,
       }}>checkout our website</Text>
        </View>
     
     </View>
     <View 
     style={styles.notifications}>
      <View style={{padding:10}} >
      <Image style={{height : 50 , width : 50}}source={require('../../assets/icons/Notification.png')} />
        </View>
        <View style={{
          padding : 20
        }}>
        <Text style={{
           
          
              color: '#000000',
              fontFamily: 'Museo',
              fontSize: 14,
              fontWeight: '400',
              fontStyle: 'normal',
              textAlign: 'left',
             
              lineHeight: 14,
        }}>New Products are coming</Text>
       <Text style={{
          
     
           color: '#a1a1a1',
           fontFamily: 'Museo',
           fontSize: 13,
           fontWeight: '400',
           fontStyle: 'normal',
           textAlign: 'left',
           lineHeight: 14,
       }}>checkout our website</Text>
        </View>
     
     </View>















      <View style={{ marginTop : 30, flexDirection: 'row' }}>
        <TouchableOpacity  
        
        
        style={{
            width: 159,
            height: 50,
            right : 30,
            borderRadius: 5,
            alignItems:'center',
            flexDirection: 'row',
            justifyContent:'center'
        }} ><FontAwesome5 name="door-open" size={24} color="black"  />
          <Text style={{  width: 58,
    height: 21,
    color: '#666666',
    fontFamily: 'Poppins - Regular',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    marginLeft : 5,
    textAlign: 'left',
    letterSpacing: -0.14,
    lineHeight: 20,}}>
        Sign Out</Text>
        </TouchableOpacity >
        <TouchableOpacity 
        style={{
          width: 159,
          height: 50,
          borderRadius: 5,
          backgroundColor: '#eb5c26',
          alignItems:'center',
          justifyContent:'center'
        }} >
          
          <Text style={{
            color: '#ffffff',
            fontFamily: 'Museo',
            fontSize: 14,
            fontWeight: '400',
            fontStyle: 'normal',
            textAlign: 'center',
            lineHeight: 31.7,
          
          }}>Save Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  foulen: {

    color: '#000000',
    fontFamily: 'Museo',
    fontSize: 13,
    fontWeight :'100',
    marginLeft : 10,
   
   
  
  },
  container: {
    marginTop: 16,


    alignItems: 'center',
    paddingBottom: 5,
    shadowColor: 'rgba(91, 77, 188, 0.18)',
    shadowOffset: { width: 12, height: 0 },
    shadowRadius: 32,
    borderRadius: 25,
    height: 380,

  },
  title: {
    color: '#000000',
    fontFamily: 'Museo',
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 36,
    right: 110,
    marginBottom: 10
  },
  TextInputContainer: {
    width: 335,
    height: 45,
    borderRadius: 5,
    borderColor: '#cccccc',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    margin: 15,
    justifyContent:'center'
  },
  child: {
    backgroundColor: '#00000000'
  },
  notifications :{
    borderRadius: 10,
    borderColor: '#ffd6c7',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 335,
    flexDirection:'row',
    marginBottom:15
  }

})