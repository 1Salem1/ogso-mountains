import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function ListIcon(props) {
  return (
    <Svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 124 124"
    xmlSpace="preserve"
    enableBackground="new 0 0 124 124"
    {...props}
  >
    <Circle cx={62.4} cy={62.5} r={57.6} fill="#fff" />
    <Path
      d="M21.7 36.3c0-4.3 3.5-7.9 7.9-7.9s7.9 3.5 7.9 7.9c0 4.3-3.5 7.9-7.9 7.9s-7.9-3.6-7.9-7.9zM97.8 31c2.9 0 5.3 2.4 5.3 5.3s-2.3 5.3-5.3 5.3H50.6c-2.9 0-5.3-2.3-5.3-5.3 0-2.9 2.3-5.3 5.3-5.3h47.2zm0 26.3c2.9 0 5.3 2.3 5.3 5.3 0 2.9-2.3 5.3-5.3 5.3H50.6c-2.9 0-5.3-2.3-5.3-5.3 0-2.9 2.3-5.3 5.3-5.3h47.2zm0 26.3c2.9 0 5.3 2.3 5.3 5.3s-2.3 5.3-5.3 5.3H50.6c-2.9 0-5.3-2.3-5.3-5.3s2.3-5.3 5.3-5.3h47.2zm-76.1 5.2c0-4.3 3.5-7.9 7.9-7.9s7.9 3.5 7.9 7.9c0 4.3-3.5 7.9-7.9 7.9s-7.9-3.6-7.9-7.9zm15.7-26.3c0 4.3-3.5 7.9-7.9 7.9s-7.9-3.5-7.9-7.9c0-4.3 3.5-7.9 7.9-7.9s7.9 3.6 7.9 7.9z"
      fill="#ea500e"
    />
  </Svg>
  )
}

export default ListIcon
