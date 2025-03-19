import styled from 'styled-components/native';

interface TitleProps {
  isFirstName?: boolean;
}

interface ContentProps {
  topInsets: number;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View<ContentProps>`
  padding: 16px;
  padding-top: ${({ topInsets }) => topInsets + 8}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsContainer = styled.View`
  gap: 24px;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity.attrs({
  hitSlop: 12,
})`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: 12px;
  text-transform: uppercase;
`;

export const UserInformation = styled.View`
  padding: 16px 16px 0 16px;
  align-items: center;
  justify-content: center;
  gap: 36px;
`;

export const Title = styled.Text<TitleProps>`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme, isFirstName }) =>
    isFirstName ? theme.fontFamily.bold : theme.fontFamily.regular};
  text-transform: ${({ isFirstName }) => (isFirstName ? 'uppercase' : 'none')};
  font-size: 24px;
`;

export const StudentContainer = styled.View`
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const StudentName = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.medium};
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
`;

export const StudentInformations = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: 16px;
  text-align: center;
`;
