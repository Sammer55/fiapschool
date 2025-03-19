import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  padding: 16px;
  flex: 1;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;

export const CloseText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  text-transform: uppercase;
  font-size: 16px;
`;

export const WrapperStudents = styled.View`
  flex: 1;
  gap: 64px;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: 24px;
  text-align: center;
`;

export const StudentsList = styled.View`
  gap: 16px;
`;

export const Student = styled.TouchableOpacity<{ isSelected?: boolean }>`
  border-radius: 8px;
  border: 1px solid
    ${({ theme, isSelected }) =>
      isSelected ? theme.colors.primary : theme.colors.foreground};
  background-color: ${({ theme }) => theme.colors.foreground};
  padding: 16px;
  gap: 18px;
  width: 100%;
`;

export const StudentName = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: 16px;
  text-transform: uppercase;
`;

export const StudentInformations = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: 16px;
`;
