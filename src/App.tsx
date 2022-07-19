import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Router } from './router/Router';
import theme from './theme/theme';

const App = () => {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <HashRouter basename="/">
          <Router />
        </HashRouter>
      </ChakraProvider>
    </div>
  );
};

export default App;
