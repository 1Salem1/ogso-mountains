import * as React from "react"
import { StyleSheet } from "react-native"
import Svg, { G, Path } from "react-native-svg"

function NotificationIcon(props , color) {
  return (
    <Svg style={style.container} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 23.47" {...props}>
      <G id="Calque_2" data-name="Calque 2">
        <Path
          d="M19.8 19.07H2.2a2.2 2.2 0 010-4.4.74.74 0 00.73-.74v-4.4a8.05 8.05 0 012.37-5.7.69.69 0 01.52-.22.74.74 0 01.51 1.26A6.58 6.58 0 004.4 9.53v4.77a1.83 1.83 0 01-1.83 1.83H2.2a.74.74 0 000 1.47h17.6a.74.74 0 000-1.47h-.37a1.83 1.83 0 01-1.83-1.83V9.53A6.59 6.59 0 0011.87 3a1.84 1.84 0 01-1.6-1.82V.73a.73.73 0 011.46 0V1a.55.55 0 00.46.54.2.2 0 00-.11 0 8.06 8.06 0 017 8v4.4a.74.74 0 00.73.74 2.2 2.2 0 010 4.4zM8.07 3.67a.74.74 0 11.73-.74.74.74 0 01-.73.74zm1.46 16.86a.74.74 0 01.74.74.73.73 0 001.46 0 .74.74 0 111.47 0 2.2 2.2 0 01-4.39.14.61.61 0 010-.14.74.74 0 01.73-.74z"
          id="Layer_1"
          data-name="Layer 1"
          fill={props.color}
          fillRule="evenodd"
        />
      </G>
    </Svg>
  )
}

const style = StyleSheet.create({
  container : {
    height : 28 , 
    width : 28
  }
})

export default NotificationIcon