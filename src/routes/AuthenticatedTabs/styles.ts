import styled from 'styled-components/native';

interface TabBarLabelProps {
  isFocused?: boolean;
}

export const TabBarLabel = styled.Text<TabBarLabelProps>`
  font-size: 10px;
  margin-top: 4px;
  text-transform: uppercase;
  color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.primary : theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.semibold};
`;
