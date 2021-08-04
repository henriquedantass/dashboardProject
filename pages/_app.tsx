import { AppProps } from 'next/app';
import { ChakraProvider} from '@chakra-ui/react';
import {theme} from '../styles/theme';
import {SideBarDrawerProvider} from '../src/contexts/SideBarDrawerContext'
import { makeServer } from '../src/services/mirage';
import { QueryClientProvider, QueryClient } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const client =  new QueryClient;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider  theme={theme}>
        <SideBarDrawerProvider>
          <Component {...pageProps} />
        </SideBarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools/>
    </QueryClientProvider>

    
  ) 
}

export default MyApp
