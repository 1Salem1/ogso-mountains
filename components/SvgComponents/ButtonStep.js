import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"
import { AntDesign } from '@expo/vector-icons'; 
function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={121}
      height={49}
      viewBox="0 0 121 49"
      {...props}
    >
      <G data-name="button started" transform="translate(-.406 -.352)">
      <AntDesign style={{textAlign : 'center' , marginTop : 8}} name="arrowright" size={32} color="black" />
        <Rect
          data-name="bg opaccity"
          width={90}
          height={49}
          rx={20}
          transform="translate(19.406 .352)"
          fill="#fff"
          opacity={0.502}
        />
        <Rect
          data-name="bg opaccity copy 2"
          width={90}
          height={49}
          rx={20}
          transform="translate(31.406 .352)"
          fill="#fff"
          opacity={0.2}
        />
        <Rect
          data-name="bg opaccity copy"
          width={89}
          height={49}
          rx={20}
          transform="translate(.406 .352)"
          fill="#fff"
          opacity={0.502}
        />
        <Rect
          data-name="bg button"
          width={89}
          height={49}
          rx={20}
          transform="translate(10.406 .352)"
          fill="#fff"
        />
        <Path
          d="M15.913 13.329l4.487-4.72H0v-1.99h20.726L16.163 1.3 17.674 0l5.674 6.619h.537v1.244l.01.008-.01.01v.729h-.692l-5.667 5.966z"
          transform="translate(42.796 17.267)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent