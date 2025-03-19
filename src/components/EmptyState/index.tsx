import { Container, Image, Text } from './styles';
import empty from '../../../assets/images/empty.png';

interface EmptyStateProps {
  children: string;
}

const EmptyState = ({ children }: EmptyStateProps) => {
  return (
    <Container>
      <Image source={empty} />

      <Text>{children}</Text>
    </Container>
  );
};

export default EmptyState;
