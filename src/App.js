import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import Landing from './pages/Landing'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
