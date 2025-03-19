import { FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import { ClassProps } from '.';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  padding: 64px 24px 0 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 32px;
  font-size: 20px;
`;

export const StyledFlatList = styled.FlatList.attrs<FlatListProps<ClassProps>>({
  contentContainerStyle: {
    gap: 16,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
})<FlatListProps<ClassProps>>``;
