import React from 'react';

import { HelmetProvider } from 'react-helmet-async';
import AppProvider from './contexts';

import Routes from './routes';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <AppProvider>
    <HelmetProvider>
      <Routes />
      <GlobalStyles />
    </HelmetProvider>
  </AppProvider>
);

export default App;
