import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Wrapper>
    <GlobalStyle />
  </ThemeProvider>
);

export default MyApp;
