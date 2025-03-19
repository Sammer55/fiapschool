import { Image } from 'react-native';
import logo from '../../../assets/images/logo.png';

interface LogoProps {
  height?: number;
  width?: number;
}

const Logo = ({ height, width }: LogoProps) => {
  return <Image source={logo} style={{ width, height }} />;
};

export default Logo;
