import * as React from "react"
import Svg, { Defs, G, Circle, Path, Text, TSpan } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function MarkerSvg(props) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={190}
    height={171.627}
    viewBox="0 0 190 171.627"
    {...props}
  >
    <Defs></Defs>
    <G data-name="shape location">
      <G data-name="location 3" transform="translate(-134 -367)">
        <Circle
          cx={15}
          cy={15}
          r={15}
          transform="translate(194 455)"
          fill="#ffd6c7"
        />
        <Circle
          data-name="shape"
          cx={6}
          cy={6}
          r={6}
          transform="translate(203 464)"
          fill="#eb5c26"
        />
      </G>
      <G data-name="popup image location">
        <G
          transform="translate(-134 -367) translate(-13 14) translate(147 353)"
          filter="url(#a)"
        >
          <Path
            data-name="bg"
            d="M221.459 447.85a3899.02 3899.02 0 01-2.08-10.85H212a5 5 0 01-5-5v-30a5 5 0 015-5h60a5 5 0 015 5v30a5 5 0 01-5 5h-37.319a1.193 1.193 0 01-.264.374c-.5.484-10.541 10.147-11.4 10.971a.956.956 0 01-.664.281.921.921 0 01-.894-.776z"
            transform="translate(-147 -353)"
            fill="#eb5c26"
          />
        </G>
        <Text
          data-name="I'm here"
          transform="translate(-134 -367) translate(-13 14) translate(237.5 415)"
          fill="#fff"
          fontSize={14}
          fontFamily="MuseoSans-500, 'Museo Sans \\\\35 00'"
          fontWeight={500}
        >
          <TSpan x={0} y={0}>
            {"I,m"}
          </TSpan>
          <TSpan x={0} y={14}>
            {"here"}
          </TSpan>
        </Text>
        <Path
          data-name="Trac\xE9 2099"
          d="M-1299.364 1121.227a.719.719 0 01.719.719.719.719 0 01-.719.718 2.874 2.874 0 01-2.874-2.874 2.874 2.874 0 012.874-2.874 2.874 2.874 0 012.874 2.874.72.72 0 01-.718.719.72.72 0 01-.719-.719 1.436 1.436 0 00-1.437-1.437 1.437 1.437 0 00-1.437 1.437 1.437 1.437 0 001.437 1.437zm7.029 3.54q-2.359 3.731-4.672 7.482-2.352 3.817-4.7 0-2.255-3.66-4.556-7.3a8.619 8.619 0 01-1.718-5.139v-.025a.719.719 0 01.719-.719.719.719 0 01.718.719h.01a7.207 7.207 0 00.608 2.9l.05.11a7.332 7.332 0 00.666 1.147q1.927 3.059 3.822 6.133c.677 1.1 1.353 2.642 2.03 2.642s1.353-1.541 2.03-2.642q1.89-3.075 3.82-6.131a7.19 7.19 0 00.669-1.154l.048-.1a7.184 7.184 0 00-1.485-7.986 7.188 7.188 0 00-10.164 0 .721.721 0 01-.509.21.718.718 0 01-.718-.719.717.717 0 01.211-.508l-.007-.006a8.629 8.629 0 0112.2 0 8.622 8.622 0 01.933 11.083zm-14.574-6.774a.719.719 0 01-.719-.718.719.719 0 01.719-.719.72.72 0 01.719.719.72.72 0 01-.719.718z"
          transform="translate(-134 -367) translate(-13 14) translate(1522.987 -705.157)"
          fill="#fff"
          fillRule="evenodd"
        />
      </G>
    </G>
  </Svg>
  )
}

export default MarkerSvg