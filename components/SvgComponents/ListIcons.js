import * as React from "react"
import Svg, { G, Text } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function ListIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21.8" {...props}>
    <G id="Calque_2" data-name="Calque 2">
      <Text
        transform="translate(0 19.13)"
        id="Calque_1-2"
        data-name="Calque 1"
        fontSize="9px"
        fill="#eb5c26"
        fontFamily='FontAwesome5Free-Solid,"Font Awesome 5 Free"'
      >
        {"\uF03A"}
      </Text>
    </G>
  </Svg>
  )
}

export default ListIcon
