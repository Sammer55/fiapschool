import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 54px;
`;

export const LogoContainer = styled.View`
  margin-bottom: 80px;
`;

export const Form = styled.View`
  gap: 40px;
`;

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.medium};
  text-align: center;
  font-size: 16px;
  margin-top: -8px;
`;
