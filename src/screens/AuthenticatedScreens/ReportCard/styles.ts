import { FlatListProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  padding: 64px 24px 0 24px;
  width: 100%;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: 40px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 32px;
  font-size: 20px;
`;

export const StyledFlatList = styled.FlatList.attrs<FlatListProps<any>>({
  contentContainerStyle: {
    gap: 16,
    paddingVertical: 16,
  },
  showsVerticalScrollIndicator: false,
})<FlatListProps<any>>``;
