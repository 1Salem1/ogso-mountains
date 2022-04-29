import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage'

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

async function getFCMToken(){
    let fcmtoken = await AsyncStorage.getItem('fcmtoken').then(((x)=>{
        console.log(fcmtoken)
    }))
  
    if (!fcmtoken){
       try {
       await messaging().getToken().then((x)=>{
           console.log(x)
       })
     
        if (fcmtoken){

         await  AsyncStorage.setItem("fcmtoken", JSON.stringify(fcmtoken))

        } else {

        }
       
       }
       catch(error){
            console.log(error,'error in fcmtoken')
    }
    }

}
 

 const NotificationListner = () =>{

    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
        navigation.navigate(remoteMessage.data.type);
        })

        messaging()
        .getInitialNotification()
        .then(remoteMessage => {
          if (remoteMessage) {
            console.log(
              'Notification caused app to open from quit state:',
              remoteMessage.notification,
            );
            setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
          }})



          messaging().onMessage(async remoteMessage => {
              console.log("notification on froground state........", remoteMessage)
          })
}

export {NotificationListner , requestUserPermission , getFCMToken}