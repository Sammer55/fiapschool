import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

const LogoutIcon = () => (
  <Svg width={10} height={10} fill="none">
    <G fill="#fff" clipPath="url(#a)">
      <Path d="M4.688 9.375H.625V.625h4.063a.313.313 0 0 0 0-.625H.311A.313.313 0 0 0 0 .313v9.375C0 9.86.14 10 .312 10h4.375a.313.313 0 0 0 0-.625Z" />
      <Path d="M9.91 4.782 7.752 2.595a.31.31 0 0 0-.442 0 .317.317 0 0 0 0 .446l1.625 1.648H2.501a.314.314 0 0 0-.313.316c0 .174.14.316.313.316h6.435L7.311 6.969a.317.317 0 0 0 0 .446.31.31 0 0 0 .442 0L9.91 5.228a.32.32 0 0 0 0-.446Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h10v10H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default LogoutIcon;
