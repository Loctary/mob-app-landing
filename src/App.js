import React from 'react';
// components
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
// styled components
import { Wrapper } from './styles';

function App() {
  return (
    <Wrapper className="App">
      <Navigation />
      <Header />
    </Wrapper>
  );
}

export default App;
