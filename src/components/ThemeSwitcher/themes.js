const themes = [
  {
    name: 'blue',
    firstTime: true,
    colorPrimary: '#FAFAFA',
    colorAlternate: '#303F9F',
    colorHighlight: '#daedf7',
    textPrimary: '#202121',
    navAlpha: 'rgba(19, 25, 62, 0)'
  }
];

export const getThemes = () => {
  return themes.map((theme) => {
    return {
      name: theme.name,
      firstTime: theme.firstTime,
      colorPrimary: theme.colorPrimary,
      colorAlternate: theme.colorAlternate,
      colorHighlight: theme.colorHighlight,
      bgPrimary: theme.colorAlternate,
      bgAlternate: theme.colorPrimary,
      bgLanding: theme.colorPrimary,
      textPrimary: theme.textPrimary,
      textAlternate: theme.colorAlternate,
      textLanding: theme.colorPrimary,
      parallaxStars: theme.colorPrimary,
      navAlpha: theme.navAlpha
    };
  });
};
