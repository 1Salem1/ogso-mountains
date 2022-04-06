import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native'; 
import { WebView } from 'react-native-webview'; 
const deviceHeight = Dimensions.get('window').height; 
const deviceWidth = Dimensions.get('window').width;

export default function b2c () {
 return ( <View style={{flex:1}}> 
 <WebView style={styles.webview} source={{uri: 'https://online.flippingbook.com/view/467555189/',}} 
 javaScriptEnabled={true} 
 domStorageEnabled={true} 
 startInLoadingState={false} 
 scalesPageToFit={true} /> </View> ); } 
 
 const styles = StyleSheet.create({
   webview:{
     flex: 1, backgroundColor: 'yellow',
     width: deviceWidth,
     height: deviceHeight } 
    });