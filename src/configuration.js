// Modules
import Themes from './themes';

// Colors
const Colors = {
  bgMain: '#282929',
  bgHeaderFooter: '#484848',
  bgCard: '#3e3f40',
  body: '#ffffff',
  borderGray: '#565a5c',
  inputGray: '#5e5e5e',
  mediumGrey: '#767676',
  lightGrey: '#9b9b9b',
  primary: '#0A1F44',
  secondary: '#ffffff',
  txtHeader: '#615a79',
  txtButton: '#ffffff',
  bgButton: '#0A1F44',
  progress: '#474747',
  progressbar: '#e3e4e9',
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
