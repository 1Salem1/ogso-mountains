import * as React from "react"
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import GetLocation from 'react-native-get-location'
import { Button } from "react-native-elements"
import { StatusBar } from "expo-status-bar"
import MarkerSvg from "../SvgComponents/MarkerSvg"
import style from "./MapStyle/map"


export default function App({ navigation }) {
	const [lat, setLat] = React.useState(0)
	const [lon, setlon] = React.useState(0)
   

	var MapStyle = style
		







	React.useEffect(() => {
		Location()
	}, [])

	const Location = async () => {
		await GetLocation.getCurrentPosition({

		})
			.then(location => {
				setLat(location.latitude)
				setlon(location.longitude)
			})


	}

	if (lat) {
		return (
			<View style={styles.container}>

				<StatusBar style='dark' />
				<MapView
				    showsMyLocationButton
		onPress={(e)=>{
			setLat(e.nativeEvent.coordinate.latitude)
			setlon(e.nativeEvent.coordinate.longitude)
		}}
				
					loadingEnabled
					zoomEnabled
					zoomControlEnabled
					customMapStyle={MapStyle}
					style={styles.map}
					initialRegion={{
						latitude: lat,
						longitude: lon,
						latitudeDelta: 0.0243,
						longitudeDelta: 0.0234
					}}
					provider="google"
				>

					<Marker
						coordinate={{ latitude: lat, longitude: lon }}
						pinColor="black"
						draggable={true}
						onDragStart={(e) => {
						}}
						onDragEnd={(e) => {
							setLat(e.nativeEvent.coordinate.latitude)
							setlon(e.nativeEvent.coordinate.longitude)
						}}
					>
						<MarkerSvg />
					</Marker>

				</MapView>
				<View style={{alignItems:'flex-end'}}>
				<TouchableOpacity onPress={() => {
							navigation.navigate('skip', {
								lat: lat,
								lon: lon,
							})
						}} style={{
							width: 159,
							height: 50,
							borderRadius: 5,
							top: 25,
							left : 110,
							justifyContent: 'center',
							backgroundColor: '#eb5c26',
						}}>
							<Text style={{
								color: '#ffffff',
								fontFamily: 'Museo',
								fontSize: 14,
								fontWeight: '400',
								fontStyle: 'normal',
								textAlign: 'center',

								lineHeight: 31.7,
							}}>Confirm</Text>

						</TouchableOpacity>

				</View>
			
			</View>
		)
	}
	else {
		return (
			<Text></Text>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	map: {
		width: Dimensions.get('window').width,
		height: 665,
		shadowColor: 'rgba(235, 92, 38, 0.18)',
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 35,
		elevation:30
	  },
 
})