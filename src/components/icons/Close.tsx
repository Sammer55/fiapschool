import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CloseIcon = () => (
  <Svg width={24} height={24} fill="none">
    <Path
      fill="#29F4D5"
      d="M20.746 3.329a1 1 0 0 0-1.415 0l-7.294 7.294-7.294-7.294a1 1 0 1 0-1.414 1.414l7.294 7.294-7.294 7.294a1 1 0 0 0 1.414 1.415l7.294-7.295 7.294 7.295a1 1 0 0 0 1.415-1.415l-7.295-7.294 7.295-7.294a1 1 0 0 0 0-1.414Z"
    />
  </Svg>
);

export default CloseIcon;
