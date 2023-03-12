import './App.css';
import RoutesPage from './Routes/RoutesPage';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
  const theme = createTheme({});
  return (
    <ThemeProvider theme={theme}>
      <RoutesPage />
    </ThemeProvider>
  );
}

export default App;
