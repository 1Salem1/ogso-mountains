import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function Iconx(props) {
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
    <Circle cx={62.4} cy={61.4} r={57.6} fill="#fff" />
    <Path
      d="M70.4 61.4l18.9-18.9c2.2-2.2 2.2-5.8 0-8.1-2.2-2.2-5.8-2.2-8.1 0L62.4 53.3 43.5 34.5c-2.2-2.2-5.8-2.2-8.1 0s-2.2 5.8 0 8.1l18.9 18.9-18.9 18.7c-2.2 2.2-2.2 5.8 0 8.1 1.1 1.1 2.6 1.7 4 1.7 1.5 0 2.9-.6 4-1.7l18.9-18.9 18.9 18.9c1.1 1.1 2.6 1.7 4 1.7 1.5 0 2.9-.6 4-1.7 2.2-2.2 2.2-5.8 0-8.1L70.4 61.4z"
      fill="#ea500e"
    />
  </Svg>
  )
}

export default Iconx