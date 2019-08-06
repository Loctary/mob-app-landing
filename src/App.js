import React from 'react';
// components
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import ClientLogos from './components/ClientLogos/ClientLogos';
import Highlights from './components/Highlights/Highlights';
import Discover from './components/Discover/Discover';
import Features from './components/Features/Features';
// styled components
import { Wrapper } from './styles';

class App extends React.Component {
  state = { isScrolling: false };

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  scrollHandler = () => {
    const { isScrolling } = this.state;
    if (document.documentElement.scrollTop > 10) this.setState({ isScrolling: true });
    else if (isScrolling) this.setState({ isScrolling: false });
  };

  render() {
    const { isScrolling } = this.state;
    return (
      <Wrapper className="App">
        <Navigation isScrolling={isScrolling} />
        <Header />
        <ClientLogos />
        <Highlights />
        <Discover />
        <Features />
        <div style={{ height: 1000, background: 'green' }} />
      </Wrapper>
    );
  }
}

export default App;
