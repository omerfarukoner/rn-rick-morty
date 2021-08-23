import { StyleSheet } from 'react-native';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const COLORS = {
  white: '#FFF',
  offWhite: '#DFDFDF',
  paleBlack: 'rgba(0,0,0,0.7)',
  gray: '#C4C4C4',
  darkGray: '#808080',
  blue: '#0057FF',
  dark: '#222',
  black: '#000',
  green: 'green',
  orange: 'orange',
  koromike: '#ffba5e',
};
export const SIZES = {
  // Global Sizes
  default: 24,
  base: 18,
  subBase: 16,

  radius: 10,

  // Font Sizes
  h1: 24,
  h2: 16,

  body1: 16,
  body2: 24,

  // App Dimensions
  width,
  height,
};

export const FONTS = {
  h1: {
    fontFamily: 'Roboto',

    fontSize: SIZES.h1,
    lineHeight: 28,
  },
  body1: {
    fontFamily: 'Roboto',
    fontSize: SIZES.body1,
  },
  body2: {
    fontFamily: 'Roboto',
    fontSize: SIZES.body2,
  },
};

export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorText: {
    alignSelf: 'center',
    textAlign: 'center',
    ...FONTS.body1,
    marginTop: SIZES.subBase,
  },
  shaddow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
