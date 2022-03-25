import { View, Text  , StyleSheet} from 'react-native'
import React from 'react'

export default function faq() {
  const [filterData , setFilterData] = React.useState([])
  const [masterData , setMasterData] = React.useState([])

  return (
    <View style={styles.container}>
      <Text>faq</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignContent :'center',
    alignItems :'center',
    justifyContent:'center'
  }
})