import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter } from 'react-router-dom';
import { Router } from './router/Router';
import theme from './theme/theme';

const App = () => {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <HashRouter basename="/portfolio_react">
          <Router />
        </HashRouter>
      </ChakraProvider>
    </div>
  );
};

export default App;
