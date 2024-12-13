// Modules
import Themes from './themes';

// Colors
const Colors = {
  body: '#ffffff',
  primary: '#0A1F44',
  secondary: '#ffffff',
  txtButton: '#ffffff',
  bgButton: '#0A1F44',
};

export default {
  theme: {
    ...Colors,
    ...Themes,
  },
  fallback: {
    bgColor: ['#282929'],
  },
};
