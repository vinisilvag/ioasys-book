import React from 'react';

import AppProvider from './contexts';

import Routes from './routes';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <AppProvider>
    <Routes />
    <GlobalStyles />
  </AppProvider>
);

export default App;
