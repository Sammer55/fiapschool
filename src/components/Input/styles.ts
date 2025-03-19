import styled, { css } from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

const sharedTextInputStyles = css<TextInputProps>`
  border-bottom-width: 1px;
  padding-bottom: 8px;
  text-align: center;
  font-size: 32px;

  ${({ theme, isHighlighted }) => css`
    border-bottom-color: ${isHighlighted
      ? theme.colors.text
      : theme.colors.borderDark};
    color: ${theme.colors.text};
    font-family: ${theme.fontFamily.regular};
  `}
`;

interface TextInputProps {
  isHighlighted: boolean;
}

export const InputWrapper = styled.View`
  gap: 25px;
`;

export const Label = styled.Text`
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  text-transform: uppercase;
`;

export const MaskedTextInput = styled(TextInputMask)<TextInputProps>`
  ${sharedTextInputStyles}
`;

export const TextInput = styled.TextInput<TextInputProps>`
  ${sharedTextInputStyles}
`;
