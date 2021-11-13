import React from 'react';

import Header from './components/Header';
import Home from './pages/Home';

import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Home />
    </>
  );
}

export default App;
