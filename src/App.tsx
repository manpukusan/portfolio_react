import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import theme from './theme/theme';

const App = () => {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <BrowserRouter basename="/portfolio_react">
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
};

export default App;
