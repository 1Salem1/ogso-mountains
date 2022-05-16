import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

import { StyleSheet } from "react-native"
function HomeIcon(props , color) {
  return (
    <Svg style={style.container} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23.01" {...props}>
      <G id="Calque_2" data-name="Calque 2">
        <Path
          d="M22.28 11.51a.72.72 0 01-.72-.72c0-.18-1.2-1.09-1.48-1.37l-.78-.78a2.89 2.89 0 01-.63-1.8V3.61a.72.72 0 00-.67-.72h-1.47a.72.72 0 00-.72.72v.24a.54.54 0 01-.54.54.51.51 0 01-.37-.15l-2.38-2.38a1.44 1.44 0 00-2 0L1.85 10.5a1.43 1.43 0 00-.42 1A1.43 1.43 0 002.88 13c.68 0 1.44 1 1.44 2.16v5a1.43 1.43 0 001.43 1.43h2.16a.72.72 0 00.72-.72v-4.69a1.79 1.79 0 011.79-1.79h2.16a1.8 1.8 0 011.8 1.79v4.67a.72.72 0 00.72.72h2.15a1.43 1.43 0 001.44-1.43v-5a.72.72 0 111.44 0v5A2.88 2.88 0 0117.25 23H15.1a2.15 2.15 0 01-2.16-2.16v-4.3a.72.72 0 00-.72-.72h-1.44a.72.72 0 00-.71.72v4.31A2.16 2.16 0 017.91 23H5.75a2.88 2.88 0 01-2.87-2.87v-5a.91.91 0 00-.72-.81A2.87 2.87 0 010 11.51v.16a2.87 2.87 0 01.83-2.19L9.47.84a2.87 2.87 0 014.06 0l1.27 1.27a1.78 1.78 0 011.37-.66h2.16a1.81 1.81 0 011.8 1.8v3.59a1.43 1.43 0 00.4 1l1.64 1.64c.57.56.83.84.83 1.31a.72.72 0 01-.72.72zM20.84 13a.72.72 0 11-.71.72.72.72 0 01.71-.72z"
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
  
export default HomeIcon