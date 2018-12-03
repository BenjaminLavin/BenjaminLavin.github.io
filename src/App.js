import React, { Component } from 'react';
import LandingPage from '@pages/LandingPage';
import PortfolioPage from '@pages/PortfolioPage';
import ScrollTop from '@components/ScrollTop';
import ThemeSwitcher from '@components/ThemeSwitcher';

class App extends Component {

  render() {
    return (
      <div className="dev-landing-page">
        <ThemeSwitcher>
          <LandingPage />
          <PortfolioPage />
          <ScrollTop />
        </ThemeSwitcher>
      </div>
    );
  }
}

export default App;
