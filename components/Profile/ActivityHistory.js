import { View, Text , StyleSheet } from 'react-native'
import React from 'react'

export default function ActivityHistory() {
  return (
    <View style={styles.container} >
      <Text style={styles.title}>ActivityHistory</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  
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
    right: 100,
    marginBottom: 10
  },
  

})
