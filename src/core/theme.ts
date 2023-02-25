import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: '#2ecc71',
    'primary-dark': '#27ae60',
    secondary: '#3498db',
    danger: '#e74c3c',
    'danger-dark': '#c0392b',
  },
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
  },
  components: {
    Container: {
      baseStyle: {
        maxWidth: '1200px',
      },
    },
    Spinner: {
      baseStyle: {
        borderWidth: '4px',
      },
      defaultProps: {
        size: 'xl',
      },
    },
  },
});
