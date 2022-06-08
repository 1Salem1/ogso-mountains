import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import firebase from "firebase";
import * as AppAuth from 'expo-app-auth';
import * as Facebook from 'expo-facebook';
import uuid from 'react-native-uuid';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { AntDesign } from '@expo/vector-icons'; 

import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import {
  StyleSheet,
  Text,
  useWindowDimensions ,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,

} from "react-native";
 


export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [password2, setPassword2] = useState("");

  // state to catch form login 
  const [FirstNameT, setFirstNameT] = useState(null);
  const [LastNameT, setLastNameT] = useState(null);
  const [emailT, setemailT] = useState(null);



const verifLastName = () =>{
  if (FirstName.length > 1){
    setFirstNameT(true)
  }
  else {
   setFirstNameT(false)
  }
}



const verifFirstName = () =>{
  if (LastName.length > 1){
    setLastNameT(true)
  }
  else {
   setLastNameT(false)
  }
}



const verifEmail= () =>{
  let reg = new RegExp('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/');

  if (reg.test(email)){
    setemailT(true)
  }
  else {
   setemailT(false)
  }
}



const verifPassword = () =>{
  let reg = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
  if (reg.test(password) && password.length >8){
    setPassword(true)
  }
  else {
   setPassword(false)
  }
}
























  GoogleSignin.configure({
    // scopes: ['https://www.googleapis.com/auth/drive.readonly'], 
     webClientId: '1047529689642-62qj96fckel3rc8e2014svlul8k9cl4u.apps.googleusercontent.com', 
     offlineAccess: true, 
     forceConsentPrompt: true, 
    
   });


  var database = firebase.database();




  const HandleSignUP = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((success) => {
      firebase.auth().currentUser.sendEmailVerification()
      .then(() => {
        // Email verification sent!
      });
    //   console.log(success) 
      const id = uuid.v4()
       
       database.ref('users/' + id).set({
             id_user:  id,
             first_name: FirstName,
             last_name: LastName,
             email: email,
             profile_picture: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFhUZGBgaGBkYHBwYGRocGRgYGBoZGhweGBgcIS4lHB4rIRkYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQkISQ0NDE0NDQ0NDQ0NDQ0NDQxMTE0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0Mf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EAEoQAAIBAgMEBQgHBQUGBwAAAAECAAMRBCExBRJBUQZhcYGRIjJScqGxwdETFEJiouHwFSOCkrIHM2Pi8RZzs8LS8iQlQ1Ojw9P/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAjEQEBAAICAgMAAgMAAAAAAAAAAQIRAyESMQRBUWGBEyIy/9oADAMBAAIRAxEAPwD5LERNIREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREyqkkAC5OgHGBidOD2fUq3KpdRkWJCqDyLMQt+q95upUlp+cA7+j9hfW9I9WnbOmsjuA1Vwi6DeysOSIPdLoaTs2mvn4hL8qSNU8S26vgTH0eGH/AL7HnvU0B7F3Xt4meWr0V0VnPNjuL4DPxmP2mR5tOmv8Nz43jUGxRheKV+6tT/8AxnSmEwD2/f4iifv0kqp/Mjqw/lM4v2s/op/JMrtJT59FD6vkn4x0JMdDqzgthalHFgZkUWtVA+9RcK47ryv1qTIxV1ZHU2ZWBVlPIqcxJSg1BmDI70nBupJtY81cHI94l6o7aoYimtDatEuFG6uLp3NRBwL5bwHX5QPESWUfLolp6WdDamDArU3FfCvYpWSxFm80Pa4B5EZHqOUq0BERAREQEREBERAREQEREBERAREQEREABfISTw+HKncTNz5zcFHog8OszVs2mc34jyV9Y8e75zqxWJ+iTcTzmzLce3q6pqT7HmtWSh5KWepxY6J2Dn+uqRdWozneYknmZ5mbSWjET2FmVSTSba7RadtLD3kxgtlhuEzll4rO1ands/ab0iLG6+ieA+6eHulsboeHW66ysbU2NUo6i685jDnxt1L23ePKTf0ufRzbe4rGmFqUKlxWw7+Y4bzt0HJH69Dx4EV/pj0dSgVxGGJbC1idwm+9ScZtSqXzBGdr6gcbXMJs3HNRcMMxoy+kPnyl/wBk7Uosr0awJw2IUK54o32Kqjgym3cONgJ31LNz2w+axOzbGzXw1epQfzqbFSRow1Vh1MpVh1GccyEREBERAREQEREBERAREQEREBMRLNszZCKm/UW7W3iG81BwuNL9ssmy1pw1PcQEjzVueriZB1qhdix4nw5CWXpDiN2kFH2yB/CMz8B3yry5ddJGZsorfu+OUxSPlDK9s7fPvtOlEFrrxAvlxAz9/tkxx8stLesdtYSbFSe1txm1E5Ziemcbhcm/DU5aNj0xcSuYYcspZNlVMxzmc+CWLjm+gbJwhIHk+MjekOxl0IG6wy6rWB+PjJnYGM3l3Scxp2TpxQRi6MAfJLLzBOZtlzF79c+R8r48xnlj1Xv+Lyay77n3HwHpDsk0HOXknSNjYqwZDoAXHdqPj4y/dJNnCpTYWzE+XMpRiNCDY+6dfic/nj37h8rh/wAeXXqrB0p/eUMDiD5z0HoNzLYVygYniSjU/AStywbRqA7OwynVcVigvq/R4Zm/EwlfnqeYiIgIiICIiAiIgIiICIiAiIgd2xaIesgIuBdiOwZe20uePqI2HNIBlJYO7AjywuarYjJbgE87DTjV+jCXqOeSW/mI/wCmWLb21/3a0UAG8fLZRa6rayi3Pj2dZnXGTxS+1a2/V3jTHJAe9v8AtkTOzajXcdSAeBacZb9ds5ZXtY2UWsQbXtrfS3w7ZIgDhIym5B4cs+RknhUug6rjI3m+K6plPLHT0Ey5xTHXOhKd9JlqXMT1TNxvHXlMtR3iS2CrEaSNVCOsa58ptRrDeGViL95A+IjLOaJx1eNj7TCFWv8AaAIJtkb+J6vlJ7EbRvuNcXBsePG2gYdR0nzetiitMk3uGTq43z9LTTv4SRo7WLIwJ80giwNtAbnI/CfN57crY9fFj46q0bUZd42J8obxBFrFiSR2T5T0nwu5WNtDnLe20bsczrxlc6VuG3Wng+NLhzX8r28+suGfsc+2SBhcIo4nEP3s1NPdTHhIOTW2l/8AD4T1aw8Kg+chZ9V80iIkCIiAiIgIiICIiAiIgIiIE30YF2qD7q+8z051Q6o2XWAbe7OY6L+c/qr72m7atK1VTwfd8bhflOk/5T7RW00zU8wR4f6zhk1tLDHcP3Tvd2h99+6Qs55TtYCSuz8Uvmmy8iMge2RRmVMjeGXjdrUtO+c6FS46/bIHZ21N24a5Fsrai3CXfZmyfp1Do28CLggEnvHCY5OecU3ldPpcPHhyy2f2iEFyFbxI+Ug6uJulY5ZVABnoN7IZa+b75c9qYI0VZjbyVLC+ViBfPvnzXeNt3gbHvAIH9Rkw5pyzyxvTHy+KcPjP1P7YxACIvEne1J3cuHDj+rzQMb5Nr6kG9hwUcdRnOPaWL32W2ioqi2l90b1u/LunLvnib9stm+/15eTKTK69JlMZ1zn2jWLgL1gDtM4BUm6gbtfgoLd+i+0iZx455Ss5Z/66SO2agbC4Yj7NTEp4fV3/AOcSDkziFBwKnimLcDsqUKd/+Eshp3cSIiQIgTamGY8LdsuhqidiYMcTfsm9aSjQfrtlmNNo3dPKJLRL4m3K2EXgSPbNbYM8CD7Jd8X0TddFJ9Q3/Cc5DV9kOptx5MCpl1jRXWw7jh4ZzURbXKTj4V11U92Y9k0mTxTaJiSTUVP2R7vdNZwi9fjJ4VdpToxTIV24EhR/CCT/AFTPSCrYp90b3tH/AEyUwVAU0VPRGZ69SfG8rmNZqrMQbXPHloPhN2ax0z9pZ7EX1GvaOPslexeF3H3eGqn0lOnfwkvRqbvk8ABl1RXpK67hNuKn0TyPVJZsV5hMTdiaTI26wsfYRzB4iabzlWozJro30krYKpv0zcXG8jea6rfI+MhIOhmcsccpqzcaxysvT7P/AGo1l+rNUS1qm4oyvfe8ru8kHOfGZf8ApOr1sKhbFU2CBHCikynNQubbzDLetkJQJ5fh4Y4Yal33Xp+V5bkylmpNbYi8zMT2PK9LJ/BbOATywbsQSL200B8T3mc+zMBukM+R1VeXW3XyEt/RzY5xNXdNwijfcjXdGe6D6TWsOWZ4TpjjqbrNqt9IUFOlQoIDdi+JYa+fu06Y/kpluyoJBLhnPC3bLp0/Xdx9VQAAq0lAGgAopYAchK5Ex32bca4M8T4TauFUdfbOlEJ0BPYCZvTAufs27SBNeMVyogGgAmZIJstuLAdlz8p10dmJyLdunsgQqqTkBc9U6aeAduFu35Sw0ME2iqB1AfATvo7FdtQR2+T7848hVv2WfTHgYly/2fb7v8x+USeQsU81KasLMAR1gH3z1E5iOrbGot9ndP3Tb2SMxPRhW0IPrDPxzlkiXdFJrdE2GiX7G/OcT7CNNgzKwseOhI7pf61ZUG87BRzP6zlO2rthqr/u1uoyDNkvWQON/lN421KidsV91N0atl3cfl3ziTZrgA3XS5Gc7nwTuwZmG8NN0aWN8hlOh8DiLX33PrK1pbvZEA/nA909hxpxmzE4VlFmHYeE4HBvnrIrufddd1xccDxHYZHYjZLDNDvr4MO0cf1lOmgSddJvBtpJZL7FedSDYgg8iLH2zKjnLVQpu4OSsBbJhfWam2enGmncSvuEz4G0HXxjFQtyBp3TkvLJ+zKfoD+d5uTChfNRFPO1z42iYNZZ5ZXeV2r+GwDvoth6TZD8+6SmGwqU8x5b+kdB6ona2Hc6teSOyNhCq+677i2JJAu2Vshy1mpjpjbi2Vs2piam4g62Y+ai82+A4z69sDAU8NSbXcRG3mOrsRYknnbwykbsilSp7lGillZ1BJ1JJALE8TJ/pIAEWiBZCOHHhr+tZm1Xyzb5XF4h8QabLvlfJuTYKqqMwBwW85qezgNEUdtpdl2fTH2B3kn3mbVwyDRFH8Il8hT6eBZshn6oJnbR2G51FvWIHsGcs4EzJ5UQ1HYKjzm8B8T8p3U9nU1+zf1jf2aTriNjCIBkAB2C0zESBERA1lyPsHusfjPJxAGoYdoM3TMo0DFJ6XvmvFY9EQsSDyAOZPKdLIDqAe0SobaxILvwRLj+Xzj4+4S4zdSubaOOLkvUOWgHAdQEg8XtNvNQWJyGV28OfVOTGY3fa/hyA+cxh8O5zsR7Ce8ze/w0+g9HqC4aj+9f94533ud4r6K5X0HtJmzF9IEAITx+QHxlEXCNzA75xvSekwQNZWuV5A8V6pNG0hjn+iG8gLJfylc6A8R85HYxQybyHK28p424g9eveJmq1UaneHj7JyJUIBUaE3HVfURSNdPFMvI9s3ptDmvgZqOHJzAmo4Z/RMz2qf2PtKmCwZt29rb2QuL8dOMuGAAKXABzOevtnzD6s/omZFB+R8ZqWpp9X3eqeZ8pOGf0TMfVG9H3S+X8Gn1Ou43WzGh49UiKG3aNEsSS7WsAmfHO7HIaCUyjhLZ7ov3ZSQw+CJAa2RJF+Fxa4HM5jxjdqp9OlOILh03aQUhgQA5FuZYW9kuvRnpW+ORvrFFdxDZaiHddm4+QbjTU3Avwyy+YMu+wpqTug3dhr/r+uEuuCb6NQKfkqFAFtLfGPHaXLS7/AFCi+aVt3qqC34tPfNNfZNZM9zeHNPK9gz9ko2PxVXEuMKreSw3qzADyafo3HFtPylr2djXoKqU23UUABdUAGQAHDumLjolCLZHIxLJg8dSxI3aigPy59atr3e+cmO2E650zvj0T5w7OBmVQ0QREBETTVxKLqwvy1PgIG6JxftJOTeA+cSjtiIkCU3pXhEpqxLg/SEkJnva3JuD5o/KWTa200w6F3zOirxZuQ6uZnzXHYt6zl3N2PgBwCjgBNY7SteG3FNyv5fOSYN85G4envNbhx7JJzaE04rDh0KnuPIjQzYb8IQ3ECtkspKkkEGxzP6tNuDTebdte4I0v1zs2zQ0ceq3YdD45d4mvYf8AfoObbviCJBIbHS1OxFiGIIOotO+058Gb7/8AvH9hnTNz0Vi0WmYlGLRaZiBmlSLEAf6TPS2puUsMi5XWrnx89ffJPBYfcFz5x16hykX0xF/qvq1f61ky9EvaN2VYKRx17f8ASdlfEsi5FiclVQTmx0AEiVYjQ27JP9D8AatY1GuVp5LfPy2HwXP+ISb1DS19Eth7gCvm7nfqNzPog8hp3k8ZZcTsrLyMxyOvceM2bNQIjORwPgPmfdI9MTVUlg+ZJJVhvJc52HEDhkZjsYp3Q2ZN9b5qcmXrRtVMtmzKwdAyvvqdCRZssiGtkSOfv1kNUrB6IcgXIH8LXswB6jeY6M19x3pHzXu6dTDJh4WPcZnLuLGzpHgQoNZdB54A/FYe3x5yo1dpj7K36z8hPp7KCLEXByIOhB5z5H002S2GrAKxNNwWQejYjeQ87XFjyIkx76WtWJ2oftP3L+XxkdU2gfsi3WflOEm2uU5auPQaHePVp4zpMYm0l9cf0vYPlEh/2n9z2/lEukfU4kAuNfg5PeDPX15x9s+A+U56aVfpbiS+JcXyQKg8AW9pPhIWe8TWLuznVmLHvN5nDJdh4+E6Rl24anur1nMzdaJIUUstvGBHGYUfOdWKpqNBYn9aTngeKtMMpU6EWkBTbcYhhmMsuYlilex1TediOdvDKKsTGziXRrA3Z2IAzNzwHXO5FIAByIyN+YnN0b0T1x7x1j3zvxPntfXePv7T7zNRGuIgC+mcoTswGHud46DTrP5TVRwrMRcEDiSJLIoAAGglS1mQXTDXC+pV/rk7ILpjrhfUqf8AEMzkk9oIDkL9Q1PZPp/R/Z/0NFE42u3W5zb25dgny+hjPo6iPa+46scr3CkEgdc+xIQQCMwQCDzB0Mza0k8Hi1K7j5C1geBB58pHuhUlTqDaeZJ7KcG4IG8M78SNNeqY9L7cm6yoQVIBcEX7Df3A+M0q5VldfOVgw7Rw7CLjvk9Xph1Knj7+ErtRwpIOoNiOsRLtL0vNGoGUMujAEdhlI/tXok4NKqWvTqLc6+Q90Nv4tydFHaT/AEe4psoJzGpBztfgL3nTicL9Z2fiKAzb6Nwt/SA30/EB4TOtXa72+DvUZtST2zzMKbi8zOqERECwzziazKjeUdLanjl8ZEDGP6XsHynjE4t2QgnLLgOBB4QE6MCPKPZ8RI/DYjeyOo9sk8CPOPZ8YHZMo5GhtMRA9O5Y3M8zAmYGnFVdxGbkMu05CVes9pYdrf3feJD7LofSVhfRTvHsXT22kv4sTNFzQRAylri58q1m4jQ/oTYu2EH/AKJPbU+STg2lW+kfcB8hDmRxb8tPGc31RebeMu79Gk8m30GmHH89/ek2DpP/AIP4/wDJK79UXm3jH1VebeMbyTxix/7Uf4P4/wDJH+1H+D+P/JK59VXm3jAwo5t4xvI8Ys9HpEznyaH48h+CdtHCjGuquu6tOm4BBJsWJIN8vtEHT7MiMNsVFUXZ76mzDXwnZsyucHVD7zGi9kfeN9w/ZfsBPgT1S3ejUVWrTKMyMLMrFWHJlNj7RPqHQzHfSYVAT5VO9M/w23fwlZUunOA3K4qL5tUX6t9bA+I3T4yR6A+ZV9df6ZlauzVlH5T3hMUQ6Wy8oA9hNj75xT0jWIPIg+BjTO1wlX2ktqr+tfxz+MtEru2VtVPWFPst8Jme1yc+GOvdJvo9WtUK8GX2rn7ryCw5z7p6baa0KlLizOigdTMFJPIWJls2R8t6R4H6DFV6XBKrgeoTvJ+FlkdLX/acltpVutaR/wDjQfCVCrVC9vKWXobInH9abkPbEbiuyeamhnqeX0PZKiOJscucmtmY5N2zGxv3ePCQr6ntnulMytLWpBzGYmZWqVVl81iOz5Ttp7UYecAesZGa2mksugnqcNPaaHW69o+U6UxCNowPfn4Qjm2uf3Z7R8Zw4C9OlcefUPk/dRct72nxE7trpvIF0u6i/IZ3PhecjG5vawsAB6KjID9dcfax5RAosIZwId7TnJhW/wCkHOPpBzmiJdjf9IOc7tlBS28xyXTI5t+XykUq3NhqZMUae6oH6vEZTC4hCbA5989ugYEEXBFiJESRw1feFjqPb1zQ21KZrYZ8M2b0R9JRPF0TIr6ygle9TPXQA+RV9ZPc0KxVldTZlO8p6+vqIuD1Ezs6K4cI+ICiyFqbqOSsHO7/AAm6/wAMxZqrfSxTBmmvjKaee6L2sAfCRtfpLh10ZnP3VPvawhl9IotdVPMA+IkJt8WdT933E/ORdHpUzUk3EC+Qubm505DIe2U/pdtGpUdA7sw3SbaLmfRGXCSY2drbvpO4jpBRQ2Vg752C5rfrbTwzkAMUzVVqObtvq3gQbDkJDYPzx3+6d5M6SI6f7XcV/wCZOq28mnSDdTFS39JXxlFJvrJzpvi/psfiXBuDU3R2Iqp/ySCnD6bIiIEnPL6HsiJ0ZRzame6PGZiYae4iJQmGiJUSFPzB6w9zRESxGmtr3TXEQ0REQN2D89e/3GS0RLEpN2D84d/uiJUSU9DzKvq0/wD7IiKKuNTPURAt2zP7qn6okP0i/vF9Qe9oiW+mZ7cGC8/uM7zESxaqu0f76r/van9bTniJwbIiJB//2Q==',
             location: 'no Location for this provider',
             provider: 'By Signing in',
             
           })
         
  }
    )}
  


 




    const HandleLoginWithFacebook = async () => {
      try {
        await Facebook.initializeAsync({
          appId: '2813714962259392',
        });
        const { type, token, expirationDate, permissions, declinedPermissions } =
          await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile']
          });
        if (type === 'success') {
          await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);  // Set persistent auth state
          const credential = firebase.auth.FacebookAuthProvider.credential(token);
          const facebookProfileData = await firebase.auth().signInWithCredential(credential);  // Sign in with Facebook credential
  
          // Do something with Facebook profile data
          // OR you have subscribed to auth state change, authStateChange handler will process the profile data
          let email_user = facebookProfileData.additionalUserInfo.profile.email
          let first_name = facebookProfileData.additionalUserInfo.profile.first_name
          let last_name = facebookProfileData.additionalUserInfo.profile.last_name
          let location = facebookProfileData.additionalUserInfo.profile.location.name
          let imageUrl = facebookProfileData.additionalUserInfo.profile.picture.data.url
          let newUser = facebookProfileData.additionalUserInfo.isNewUser
          let id = uuid.v4()
          let provider = 'facebook'
  
          const dbRef = firebase.database().ref();
         
  
           if (newUser) {
          database.ref('users/' + id ).set({
            id_user: id,
            first_name: first_name,
            last_name: last_name,
            email: email_user,
            profile_picture: imageUrl,
            location: location,
            provider: provider
          })
        } 
      }
      } catch ({ message }) {
      //  console.log(`Facebook Login Error: ${message}`);
      }
  
    }

  const HandleLoginWithGoogle = async () => {
   
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        const Token = await GoogleSignin.getTokens()
        const user = firebase.auth.GoogleAuthProvider.credential(Token.idToken)
     
        const GoogleProfileData = await firebase.auth().signInWithCredential(user)
       // console.log(GoogleProfileData)
          let email_user = GoogleProfileData.additionalUserInfo.profile.email
          let first_name =GoogleProfileData.additionalUserInfo.profile.family_name
          let last_name = GoogleProfileData.additionalUserInfo.profile.given_name
          let location = 'No Location for this Provider'
          let imageUrl = GoogleProfileData.additionalUserInfo.profile.picture
          let newUser = GoogleProfileData.additionalUserInfo.isNewUser
          let id = uuid.v4()
          let provider = 'Google'
  
          const dbRef = firebase.database().ref();
       
            if (false) {
  
              return 0
            } else if (newUser) {
              database.ref('users/' + id ).set({
                id_user: id,
                first_name: first_name,
                last_name: last_name,
                email: email_user,
                profile_picture: imageUrl,
                location: location,
                provider: provider
              })
            }

      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
       //  console.log(error)
        } else if (error.code === statusCodes.IN_PROGRESS) {
         // console.log(error)
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
         // console.log(error)
        } else {
        //  console.log(error)
        }
      }
  
    
    
    }
      


    const { height, width } = useWindowDimensions();
 
    console.log(height)
    console.log(width)
 
  return (
    <View 
  
    
    style={styles.container}>



     <ImageBackground source={require('../assets/Backgrounds/Sign-Up.png')} resizeMode="cover" style={styles.image}>
       <View style={{ flexDirection: "row",  marginTop: height / 14   } }>
         <TouchableOpacity style={{ left : 20 , width : 30}} >
         <AntDesign 
     onPress={navigation.goBack} name="left" size={24} color="black" />
         </TouchableOpacity>
     
     <Text   onPress={()=> navigation.navigate('Login')}   style={{left :310 ,fontWeight :'bold' , marginRight : 20}}>Sign In</Text>
       </View>
  

      <View>
      <Text style={{ top :80, "marginTop": 0, "color": 'black', "fontSize": 35, "fontWeight": "400", "fontStyle": "normal", "fontFamily": "Esoris", "textAlign": "center", "lineHeight": 38.5 }}>{`SIGN UP`}</Text>
        <View style={{ flexDirection: "row",  position:'relative' , top : 130  , justifyContent :'center' , paddingBottom : 50 }} >
         <View  style={{width : width/3+20  , backgroundColor :'' }}>
         <FontAwesome5Icon.Button  style={{padding : 15}}name="google"
               backgroundColor={'#3367D6'}
            title="With Google" onPress={HandleLoginWithGoogle} >With Google</FontAwesome5Icon.Button>

         </View>
         <View style={styles.space} /> 
        <View style={{width : width/3+20 }}>
        <FontAwesome5Icon.Button  name='facebook' style={{padding : 15}}
                backgroundColor={'#4267B2'}
           onPress={HandleLoginWithFacebook} >With Facebook</FontAwesome5Icon.Button>

        </View>
         
        </View>
      </View>
    
        
      <StatusBar  style='dark' />
      
      <View style={[styles.container,{bottom:110} ] }>
      <Text style={{top :130,marginBottom :30 , color : 'grey' , fontWeight :'bold'}}>Or With Email</Text>
      
      <View style={[styles.inputView, FirstNameT? styles.inputViewGreen : styles.inputView]}>
     
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          onChange={verifLastName}
          placeholderTextColor="#003f5c"
          onChangeText={(FirstName) => setFirstName(FirstName)}
        />
      </View>
      <View style={[styles.inputView, LastNameT? styles.inputViewGreen : styles.inputView]}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          onChange={verifFirstName}
          placeholderTextColor="#003f5c"
          onChangeText={(LastName) => setLastName(LastName)}
        />
      </View>
 
      <View style={[styles.inputView, emailT? styles.inputViewGreen : styles.inputView]}>
        <TextInput
          style={styles.TextInput}
          placeholder="Your  Email"
          onChange={verifEmail}
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
 
      <View style={[styles.inputView, password? styles.inputViewGreen : styles.inputView]}>
        <TextInput
          
          style={styles.TextInput}
          placeholder="Password"
          onChange={verifPassword}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          
        />
         
      </View>
  
      <TouchableOpacity style={styles.loginBtn} onPress={HandleSignUP}>
        <Text style={styles.loginText }>Sign Up</Text>
      </TouchableOpacity>
      <View style={{textAlign :'center' , top : 45} }>
      <Text style={[styles.TextForgot ]}>By Singing Up , you agree to {"\n"}our <Text onPress={()=> navigation.navigate('Login')} style={styles.SignUptext}>Privacy Policy</Text></Text>

      </View>
       
        
      </View>
     
 
     
 
        </ImageBackground>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  inputView: {
    backgroundColor: "white",
    width: "70%",
    height: 45,
    marginBottom: 20,
    top : 140,
    flexDirection :'row',
    width: 290,
  },
  inputViewError: {
    borderStyle :'dashed',
    borderColor : 'red',
    backgroundColor: "white",
    width: "70%",
    height: 45,
    borderBottomWidth : 1.0,
    borderTopWidth: 1.0,
    borderLeftWidth :1.0,
    borderRightWidth:1.0,
    marginBottom: 20,
    top : 140,
    flexDirection :'row',
    width: 290,
  },
  inputViewGreen: {
    borderStyle :'solid',
    borderColor : 'green',
    backgroundColor: "white",
    width: "70%",
    height: 45,
    borderBottomWidth : 1.5,
    borderTopWidth: 1.5,
    borderLeftWidth :1.5,
    borderRightWidth:1.5,
    
    marginBottom: 20,
    top : 140,
    flexDirection :'row',
    width: 290,
  },
  inputView: {
    marginBottom : 20,
    backgroundColor:'white',
    borderColor:'grey',
    width: "70%",
    height: 45,
    borderBottomWidth : 2,
    borderBottomColor: "#e8500e",
    borderRadius: 5,
    top : 140,
    flexDirection :'row',
    width: 290,
  },
 
  TextInput: {
    width: 290,
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    right : 17,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  space: {
    width: 20, 
    height: 20,
  },
 
  loginBtn: {
    width: 280,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    top : 160,
    backgroundColor: "#e8500e",
    color : 'white'
  },
  TextForgot :  {
      marginTop : 10,
      textAlign :'center',
      color : 'white'
      , fontWeight :'bold',
      top : 130

  },
  SignUptext: {
     color : 'white',
     textAlign : 'center'
  },
  loginText :  {
    color : 'white',
    fontWeight :'bold'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%'
  },
});


