import styled from 'styled-components/native';

export const Container = styled.View``;

export const Content = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.foregroundLight};
  border-radius: 8px;
  padding: 35px 12px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: 16px;
`;

export const Disciplines = styled.View`
  gap: 20px;
  padding: 16px 12px;
`;
