import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import RootNavigation from './src/routes';
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <RootNavigation />
    </ThemeProvider>
  );
}

export default App;
