import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: 20px;
  text-align: center;
`;

export const Image = styled.Image``;
