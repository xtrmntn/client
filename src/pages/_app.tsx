import { AppProps } from 'next/app';
import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/core/theme';
import { ProductsProvider } from '@/context/products';
import Loader from '@/components/common/Loader';
import '@/assets/styles/index.scss';

const queryClient = new QueryClient();

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <ProductsProvider>
        <Loader />
        <Component {...pageProps} />
      </ProductsProvider>
    </ChakraProvider>
  </QueryClientProvider>
);

export default App;
