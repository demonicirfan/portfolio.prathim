import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';
import Layout from '../components/Layout';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    pratim: {
      yellow: '#FBF9F6',
      100: '#FFFFFF',
      200: '#DEACF5',
      300: '#9854CB',
      400: '#6437A0',
      500: '#28104E',
      600: '#130726',
    },
  },
  fonts: {
    body: 'Manrope, sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        background: '#ffffff',
        color: 'black',
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider
        options={{
          initialColorMode: 'light',
          useSystemColorMode: false,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
