import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import Test from './src/screens/Test';
import { theme } from './src/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Test />
    </ThemeProvider>
  );
}

export default App;
