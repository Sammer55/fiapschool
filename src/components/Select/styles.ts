import styled from 'styled-components/native';

const SELECT_HEIGHT = 45;

export const Container = styled.View`
  position: relative;
`;

export const Content = styled.TouchableOpacity`
  height: ${SELECT_HEIGHT}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.foreground};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: 16px;
`;

export const ChevronContainer = styled.View``;

export const SelectArea = styled.ScrollView.attrs({
  contentContainerStyle: {
    gap: 16,
    padding: 16,
  },
})`
  flex-direction: column;
  width: 100%;
  max-height: 272px;
  position: absolute;
  top: ${SELECT_HEIGHT + 7}px;
  z-index: 999;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.foreground};
`;
