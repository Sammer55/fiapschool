import { TouchableOpacityProps } from 'react-native';
import { Container, Loading, Text } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  isLoading?: boolean;
}

const Button = ({ children, isLoading, ...rest }: ButtonProps) => {
  return (
    <Container {...rest} disabled={rest.disabled || isLoading}>
      {isLoading ? (
        <Loading />
      ) : (
        <Text disabled={rest.disabled}>{children}</Text>
      )}
    </Container>
  );
};

export default Button;
