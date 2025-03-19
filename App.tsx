import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import RootNavigation from './src/routes';
import { MMKV } from 'react-native-mmkv';
import { StudentProvider } from './src/context/studentContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const storage = new MMKV();

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StudentProvider>
          <RootNavigation />
        </StudentProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
