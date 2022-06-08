import React, { useState } from "react";
import { Button, Text, View , TextInput , StyleSheet ,TouchableOpacity , KeyboardAvoidingView} from "react-native";
import Modal from "react-native-modal";
import { StatusBar } from "expo-status-bar";
import { text } from "react-native-communications";
function ModalCalories() {
  const [isModalVisible, setModalVisible] = useState(true);
  const [text1, onChangeText1] = React.useState("Your Height in cm");
  const [text2, onChangeText2] = React.useState("Your Weight in Kg");
  const [number, onChangeNumber] = React.useState(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
  

   <Text></Text>
    
  );
}


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      padding: 10,
      backgroundColor:'white',
      borderRadius:20,
    },
  });

export default ModalCalories;