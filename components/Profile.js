import React, { Component } from 'react';
import firebase from 'firebase';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import ProfileTab from './Profile/ProfileTab';










export default class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Name : 'Dear Martian',
      Email: null,
      imageUrl : require('../assets/Avatar/avatar6.png')
    }


  }


  componentDidMount() {
    function fetchDate(){
      var firebaseRef =firebase.database().ref('users')
      firebaseRef.once("value" ,function(snapshot){
        var data = snapshot.val()
        for(let i in data){
          if (data[i].email.toLowerCase() == user.email.toLowerCase()){
              setFirstName(data[i].first_name)
              setLastName(data[i].last_name)
              setEmail(data[i].email)
              setId(data[i].id_user)
              break
          } 
        }
      })
    }
}






  render() {
    return (
      <View style={styles.container}>
        <View>
      
           <View style={{top : 130}} >
           <View style={styles.bgCopy}>
           <Image style={styles.avatar} source={this.state.imageUrl}/>
         
           </View>
           <Text style={styles.welcomeBack}>Welcome back</Text>
           <Text style={styles.flenBen}>{this.state.Name}</Text>
           </View>

        </View>
         
          <ProfileTab   />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
  
  },
  bgCopy: {
    shadowColor: 'rgba(91, 77, 188, 0.18)',
    shadowOffset: { width: 12, height: 0 },
    shadowRadius: 32,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    bottom : 50
  },
  container :{
    backgroundColor: '#ffffff',
    flex: 1,
    backgroundColor: "#fff",
    alignContent :'center',
    alignItems: "center",
    justifyContent: "center",
  
  }
  ,
  welcomeBack : {
    top : -60,
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 36,
  },
  flenBen : {
    top  : -50,
    height: 37,
    color: '#eb5c26',
    fontFamily: 'Museo',
    fontSize: 30,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 36,
    marginBottom : 110
  }
});
                    