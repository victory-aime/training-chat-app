import {extendTheme} from 'native-base';
import {colors} from './colors';

const customTheme = extendTheme({
  colors,
  fonts: {},
  fontSizes: {},
  lineHeights: {},
  components: {
    Button: {
      defaultProps: {
        _text: {
          color: 'white',
        },
      },
      variants: {
        solid: {
          backgroundColor: 'primary.500',
        },
      },
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
});

export default customTheme;
