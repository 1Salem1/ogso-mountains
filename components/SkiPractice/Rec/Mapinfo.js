import { View, Text  , StyleSheet , Dimensions} from 'react-native'
import React from 'react'
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import style from '../MapStyle/map'
import MarkerSvg from '../../SvgComponents/MarkerSvg'
import ShareButton from './ShareButton.js'
export default function Mapinfo() {

  const MapStyle = style

  return (
    <View style={styles.container}>
     	<MapView
				    showsMyLocationButton

				
					loadingEnabled
					zoomEnabled
					zoomControlEnabled
					customMapStyle={MapStyle}
					style={styles.map}
			
					provider="google"
				>

	
				</MapView>
        <View style={{height : 40}}></View>

    </View>
  )
}

const styles = StyleSheet.create({

  container : {
    flex : 1, 
  },
  boldTitle :{
      color: '#000000',
      fontFamily: 'Museo',
      fontSize: 18,
      fontWeight: '400',
      fontStyle: 'normal',
      textAlign: 'left',
      lineHeight: 36,
  },
  smallTitle :{
    color: '#000000',
    fontSize: 18,
    fontWeight: '300',
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 36,
  },
  map: {
    marginTop:20,
		width: Dimensions.get('window').width,
		height: 425,
		shadowColor: 'rgba(235, 92, 38, 0.18)',
		shadowOffset: { width: 0, height: 0 },
	  },

  
  })