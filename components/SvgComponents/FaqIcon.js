import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

import { StyleSheet } from "react-native"

function FaqIcon(props , color) {
    
  return (
    <Svg style={style.container} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.56 23" {...props}>
      <G id="Calque_2" data-name="Calque 2">
        <Path
          d="M10.78 14.38a.72.72 0 11-.72.71.71.71 0 01.72-.71zm0-8.63a2.16 2.16 0 00-2.16 2.16.72.72 0 01-1.43 0 3.6 3.6 0 115 3.31 1.09 1.09 0 00-.67 1 .49.49 0 010 .13.74.74 0 01-.71.59.72.72 0 01-.72-.72A2.53 2.53 0 0111.6 9.9a2.16 2.16 0 00-.83-4.15zm7.91 12.94h-5a2.13 2.13 0 00-1.29.43l-4.55 3.4a2.12 2.12 0 01-1.38.48 2.16 2.16 0 01-2.16-2.16v-1.43a.72.72 0 00-.72-.72h-.71A2.88 2.88 0 010 15.81V2.88A2.88 2.88 0 012.88 0h12.21a.72.72 0 010 1.44H3.23a1.79 1.79 0 00-1.79 1.79v12.22a1.8 1.8 0 001.79 1.8H4a1.81 1.81 0 011.8 1.8v1.79a.72.72 0 00.72.72.67.67 0 00.41-.13L11.45 18a3.57 3.57 0 012.2-.75h4.67a1.8 1.8 0 001.79-1.8V3.59a.72.72 0 011.44 0v12.22a2.88 2.88 0 01-2.87 2.88zM18 1.44a.72.72 0 11.72-.72.72.72 0 01-.72.72z"
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
  

export default FaqIcon