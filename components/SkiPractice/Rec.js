import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
export default function Rec(props) {

    const navigation = useNavigation(); 

    return (

        <View >
                    
            <TouchableOpacity style={{
 
                width: '100%',
                marginTop: 30,
                borderRadius: 5,
                borderColor: '#cccccc',
                borderStyle: 'solid',
                borderWidth: 1,
                backgroundColor: '#ffffff',
            }}
            
            activity='1' onPress={() => { navigation.navigate('SkiRecS') }}
            >

                <View style={{ marginTop: 20, flexDirection: 'row', marginLeft: 10 }}>
                    <Entypo name="location-pin" size={24} color="#e8500e" />
                    <View style={{}}>
                        <Text style={{
                            color: '#000000',
                            fontFamily: 'Museo',
                            fontSize: 14,
                            fontWeight: '400',
                            top: 3,

                        }} >{props.data.City}<Text style={{ fontFamily: '' }}></Text>{props.data.country}</Text>

                    </View>
                    <FontAwesome5 name="info-circle" style={{ left: 140 }} size={24} color="#e8500e" />
                
                </View >
                <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                    <AntDesign name="calendar" size={24} color="#666666" /><Text style={styles.dateT}> {props.data.date}</Text>
                </View>

                <View style={{
                    flex: 2, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', bottom: 10
                }}>
                    <View >
                        <Text style={styles.title}>CALORIES</Text>
                        <Text style={{
                            bottom: 10,
                            color: '#707070',
                            fontFamily: 'Museo Sans 100',
                            fontSize: 12,
                            fontWeight: '400',
                            fontStyle: 'normal',
                            textAlign: 'left',
                            left: 30
                        }}>{props.data.calories}kcal</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>DISTANCE</Text>
                        <Text style={{
                            bottom: 10,
                            color: '#707070',
                            fontFamily: 'Museo Sans 100',
                            fontSize: 12,
                            fontWeight: '400',
                            fontStyle: 'normal',
                            textAlign: 'left',
                            left: 30
                        }}>{props.data.distance}km</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>AVG. SPEED</Text>
                        <Text style={{
                            bottom: 10,
                            color: '#707070',
                            fontFamily: 'Museo Sans 100',
                            fontSize: 12,
                            fontWeight: '400',
                            fontStyle: 'normal',
                            textAlign: 'left',
                            left: 30
                        }}>20km/h</Text>
                    </View>

                </View>


            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        padding: 15,
        color: '#666666',
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'normal',

    },
    dateT: {
        marginTop: 10,
        color: '#707070',
        fontFamily: 'Museo Sans 300',
        fontSize: 14,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'left',
        bottom: 7,
    }
})