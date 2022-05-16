import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
import { StyleSheet } from "react-native"

function ContactIcon(props , color) {
  return (
    <Svg style={style.container} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 18.68" {...props}>
      <G id="Calque_2" data-name="Calque 2">
        <Path
          d="M3.68 15a.71.71 0 010-1l2-2a.72.72 0 011 1l-2 2a.72.72 0 01-1 0zm14.62 0l-2-2a.72.72 0 111-1l2 2a.7.7 0 010 1 .71.71 0 01-1 0zm3.87-10.81l-8.64 7.92a2.89 2.89 0 01-4.07 0L4.4 7 2.69 5.33A.71.71 0 002.16 5a.72.72 0 00-.72.72v10.09a1.44 1.44 0 001.43 1.44h17.25a1.45 1.45 0 001.44-1.44V7.19a.72.72 0 111.43 0v8.62a2.86 2.86 0 01-2.87 2.87H2.87A2.87 2.87 0 010 15.81V5.75a2.16 2.16 0 012.16-2.16 2.11 2.11 0 011.43.62l6.89 6.89a1.44 1.44 0 002 0l8.64-7.92a1.43 1.43 0 00.42-1c0-.8-.65-.72-1.44-.72H5A.72.72 0 015 0h15.12c1.32 0 2.43.39 2.77 1.44a2.89 2.89 0 01-.74 2.75zm-20-2.75A.72.72 0 012.16 0a.71.71 0 01.71.72.71.71 0 01-.71.72z"
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

export default ContactIcon