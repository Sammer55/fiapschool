import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs(() => ({
  behavior: Platform.OS === 'ios' ? 'padding' : 'padding',
}))`
  flex: 1;
`;

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    flex: 1,
  },
})`
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
