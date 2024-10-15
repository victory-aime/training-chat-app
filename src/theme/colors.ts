/**
 * This file contains the application's variables.
 *
 * Define color, hex color, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */
const colors: { [color: string]: { [opacity: number]: string } } = {
  primary: {
    50: '#5081f2',
    100: '#3269e8',
    200: '#2055d3',
    300: '#204aab',
    400: '#1a3c8a',
    500: '#002db3',
    600: '#1a2d5b',
    700: '#172545',
    800: '#131c32',
    900: '#0e131f',
  },

  secondary: {
    50: '#ffefb9',
    100: '#ffe591',
    200: '#ffdc69',
    300: '#fdd243',
    400: '#fdc91e',
    500: '#f5bf0c',
    600: '#d9aa10',
    700: '#bd9615',
    800: '#a28218',
    900: '#896f1a',
  },

  lightGray: {
    50: '#F3F4F4',
    100: '#E7E9E9',
    200: '#DADDDF',
    300: '#CED2D4',
    400: '#C2C7CA',
    500: '#babbbc',
    600: '#b3aeab',
    700: '#aea19a',
    800: '#a99386',
    900: '#a68572',
  },
  light: {
    50: '#F3F5F7',
  },
  danger: {
    50: '#ffd2da',
    100: '#ffaab8',
    200: '#fc8699',
    300: '#f6647c',
    400: '#f43f5e',
    500: '#ec2f4e',
    600: '#e22141',
    700: '#c9223e',
    800: '#af253c',
    900: '#962739',
  },
  success: {
    50: '#dffeec',
    100: '#b9f5d0',
    200: '#8fedb2',
    300: '#65e594',
    400: '#3bdd77',
    500: '#22c45d',
    600: '#169848',
    700: '#0c6d33',
    800: '#01421c',
    900: '#001803',
  },
  warning: {
    50: '#ffeedc',
    100: '#ffd1af',
    200: '#feb381',
    300: '#fc9650',
    400: '#f9791f',
    500: '#e05f06',
    600: '#af4a02',
    700: '#7d3400',
    800: '#4d1f00',
    900: '#1f0800',
  },
  // Add more color categories as needed
};

/**
 * Get the color with the specified opacity.
 * The color in the theme.
 * The opacity value (0 to 100).
 * @returns The RGBA color string with the specified opacity.
 */

const hexToRGB = (color: string, alpha?: number, op?: number) => {
  const hex = getColor(color, op);
  const r = parseInt(hex?.slice(1, 3), 16);
  const g = parseInt(hex?.slice(3, 5), 16);
  const b = parseInt(hex?.slice(5, 7), 16);

  return `rgba(${r},${g},${b}${alpha ? `, ${alpha}` : ''})`;
};

const getColor = (color = 'primary', opacity = 500) => colors[color][opacity];

const getColorWithOpacity = (hexColor: string, opacity: number): string => {
  opacity = Math.max(0, Math.min(1, opacity));
  hexColor = hexColor?.replace('#', '');
  const r = parseInt(hexColor?.slice(0, 2), 16);
  const g = parseInt(hexColor?.slice(2, 4), 16);
  const b = parseInt(hexColor?.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export { colors, hexToRGB, getColor, getColorWithOpacity };
