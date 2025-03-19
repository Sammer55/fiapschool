import styled from 'styled-components/native';

export const Container = styled.View`
  gap: 8px;
`;

export const Time = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: 12px;
`;

export const Subjects = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.semibold};
  font-size: 16px;
  padding-left: 14px;
`;
