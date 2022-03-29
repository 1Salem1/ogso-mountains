import { View, Text, StyleSheet, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Mailer from 'react-native-mail';
import Communications from "react-native-communications";
export default function Contact({ navigation }) {

    const [Name, onChangeName] = React.useState(null);
    const [Email, onChangeEmail] = React.useState(null);
    const [Subject, onChangesubject] = React.useState(null);
    const [Message, onChangeMessage] = React.useState(null);






   const  handleEmail = () => {
        Mailer.mail({
          subject: 'ogso mountain essentiels applications',
          recipients: ['salem.d@ogso.eu'],
          ccRecipients: ['supportCC@example.com'],
          bccRecipients: ['supportBCC@example.com'],
          body: '<b>A Bold Body</b>',
          isHTML: true,
          attachment: {
            path: '',  // The absolute path of the file from which to read data.
            type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
            name: '',   // Optional: Custom filename for attachment
          }
        }, (error, event) => {
          Alert.alert(
            error,
            event,
            [
              {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
              {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
            ],
            { cancelable: true }
          )
        });
    }



    return (
        <View style={styles.container}>

            <View style={{ marginTop: 70 }}>
                <AntDesign onPress={() => navigation.navigate('Home')} style={{ right: 100, bottom: 10 }} name="left" size={24} color="black" />
                <Text style={styles.title}>Contact us </Text>

            </View>
            <ScrollView 
             Vertical
             height ='100%'
             showsHorizontalScrollIndicator={false}
             contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{     justifyContent: 'center',  alignItems: 'center', }}>
                <Image  style={{bottom : 20 , marginTop : 20}} source={require('../assets/images/Mascot.png')} />
                </View>
          
            <Text style={styles.inOur}>
                In our FAQs section you’ll likely find the answer to most questions. Everything from technical to shipping to OGSO history, philosophy and mission.
              
            </Text>
            <Text style={[styles.inOur , {bottom : 45}]}>
                If you can’t find the answer to your question in our FAQs , please send us a message.

            </Text>
          
                <SafeAreaView style={{bottom : 80}}>


                    <View style={styles.input}>
                        <TextInput
                            style={styles.TextStyle}
                            onChangeText={onChangeName}
                            placeholder="Your Name"
                            placeholderTextColor='black'
                            value={Name}
                        />
                        <Text style={{ top: 10, justifyContent: 'center', right: 13, color: "#e8500e" }}>*</Text>
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.TextStyle}
                            onChangeText={onChangeEmail}
                            value={Email}
                            placeholderTextColor='black'
                            placeholder="Your Email"
                        />
                        <Text style={{ top: 10, justifyContent: 'center', right: 13, color: "#e8500e" }}>*</Text>
                    </View>
                    <View style={styles.input}>

                        <TextInput
                            style={styles.TextStyle}
                            onChangeText={onChangesubject}
                            value={Subject}
                            placeholder="Subject"
                            placeholderTextColor='black'

                        />
                        <Text style={{ top: 10, justifyContent: 'center', right: 35, color: "#e8500e" }}>*</Text>
                    </View>

                    <View style={[styles.input, { height: 300 }]}>
                        <TextInput
                            style={[styles.TextStyle, { bottom: 120 }]}
                            onChangeText={onChangeMessage}
                            value={Message}
                            placeholder="Your Message"
                            placeholderTextColor='black'
                        />
                        <Text style={{ top: 15, justifyContent: 'center', left: 6, color: "#e8500e" }}>*</Text>
                    </View>
                    <View >
                        <TouchableOpacity
                            style={styles.loginScreenButton}
                            onPress={handleEmail}
                            underlayColor='#fff'>
                            <Text style={styles.loginText}>Send</Text>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
            </ScrollView>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignContent: 'center',
        alignItems: "center",
        justifyContent: 'center',

    },
    title: {
        bottom: 40,
        color: '#000000',
        fontFamily: 'Museo',
        fontSize: 25,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'center',
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
    input: {
        width: 335,
        height: 45,
        borderRadius: 5,
        borderColor: '#cccccc',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        marginBottom: 30,
        flex: 1,
        flexDirection: 'row',
    },
    TextStyle: {
        color: '#eb5c26',
        fontFamily: 'Museo',
        fontSize: 13,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'left',
        left: 30,
        width: 120,
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
    }
})