import Pages from "./containers/Pages";
import { BrowserRouter } from 'react-router-dom';
import theme from './theme/theme';
import {ThemeProvider } from '@mui/material';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}


export default App;
