import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function TimerIcon(props) {
  return (
    <Svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1024 1024"
      xmlSpace="preserve"
      enableBackground="new 0 0 1024 1024"
      {...props}
    >
      <Circle cx={498} cy={470} r={75} fill="#ea500e" />
      <Circle cx={498} cy={470} r={25} fill="#fff" />
    </Svg>
  )
}

export default TimerIcon