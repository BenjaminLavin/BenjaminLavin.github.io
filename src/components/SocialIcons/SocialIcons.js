import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;

  return (
    <div className="social-icons animate-icons">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/BenjaminLavin" style={ { color: colorPrimary } }><i class="fab fa-github"></i></a>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/benjamindlavin" style={ { color: colorPrimary } }><i class="fab fa-twitter"></i></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/benjaminlavin/" style={ { color: colorPrimary } }><i class="fab fa-linkedin"></i></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/benjamindlavin/" style={ { color: colorPrimary } }><i class="fab fa-instagram"></i></a>
    </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;
