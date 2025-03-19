import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
interface ReportCardIconProps {
  color: string;
}

const ReportCardIcon = ({ color }: ReportCardIconProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M10 1a1 1 0 0 0-.707.293l-6 6A1 1 0 0 0 3 8v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8Zm1 2h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9h5a1 1 0 0 0 1-1V3ZM9 7H6.414L9 4.414V7Zm7.768 5.64a1 1 0 1 0-1.536-1.28l-4.3 5.159-2.225-2.226a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.475-.067l5-6Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default ReportCardIcon;
