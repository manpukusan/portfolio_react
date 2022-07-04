import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.100',
        color: 'gray.600',
      },
    },
  },
  components: {
    Button: { baseStyle: { _focus: { boxShadow: 'none' } } },
  },
});

export default theme;
