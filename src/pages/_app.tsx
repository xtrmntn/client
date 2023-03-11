import { AppProps } from 'next/app';
import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { IconContext } from 'react-icons';
import { theme } from '@/core/theme';
import { ProductsProvider } from '@/context/products';
import Loader from '@/components/common/Loader';
import { toastErrorMessage } from '@/utils/error';
import '@/assets/styles/index.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: toastErrorMessage,
    },
    mutations: {
      onError: toastErrorMessage,
    },
  },
});

const iconProps = { size: '20px' };

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <IconContext.Provider value={iconProps}>
        <ProductsProvider>
          <Loader />
          <Component {...pageProps} />
        </ProductsProvider>
      </IconContext.Provider>
    </ChakraProvider>
  </QueryClientProvider>
);

export default App;
