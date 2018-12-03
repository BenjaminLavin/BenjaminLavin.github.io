import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '@components/SocialIcons';
import Nav from '@components/Nav';
import ScrollToNext from '@components/ScrollToNext';

import './style.scss';

const LandingPage = (props, context) => {
  const { theme: { bgPrimary, colorPrimary } } = context;

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <Nav />
      <main style={{ color: colorPrimary }}>
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm Ben!</div>
          <div className="tagline">
            Developer | Entrepreneur | Hacker | Creator
          </div>
          <SocialIcons />
        </div>
      </main>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;
