import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 18px;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.subtitle : theme.colors.background};

  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: 20px;
  text-transform: uppercase;
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.background,
}))``;
