import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

const ChevronIcon = () => (
  <Svg width={14} height={14} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#29F4D5"
        d="M13.814 10.632a.636.636 0 0 1-.9 0L7 4.718l-5.914 5.914a.636.636 0 0 1-.9-.9L6.55 3.368a.636.636 0 0 1 .9 0l6.364 6.364a.636.636 0 0 1 0 .9Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 14h14V0H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ChevronIcon;
