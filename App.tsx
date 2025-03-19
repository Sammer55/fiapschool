import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import RootNavigation from './src/routes';
import { MMKV } from 'react-native-mmkv';
import { StudentProvider } from './src/context/studentContext';

export const storage = new MMKV();

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <StudentProvider>
        <RootNavigation />
      </StudentProvider>
    </ThemeProvider>
  );
}

export default App;
