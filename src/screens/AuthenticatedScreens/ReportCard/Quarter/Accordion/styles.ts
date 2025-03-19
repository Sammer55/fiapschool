import styled from 'styled-components/native';

export const Container = styled.View`
  gap: 10px;
`;

export const Content = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.medium};
  text-transform: uppercase;
  font-size: 12px;
`;

export const Informations = styled.View`
  gap: 4px;
`;

export const TextInformations = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: 12px;
`;
