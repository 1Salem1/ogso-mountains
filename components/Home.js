import { View, Text , StyleSheet, Button} from 'react-native'
import React from 'react'
import firebase from 'firebase'




export default function Home() {
  
    const onLogout = () => {
        firebase.auth().signOut().then((x) => {
          console.log(x)
          }).catch((error) => {
           console.log(error)
          });
    }




  return (
    <View style={styles.container }  >
      <Text>Home</Text>
      <Button title='Logout'
        onPress= {() => onLogout()}
      />
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