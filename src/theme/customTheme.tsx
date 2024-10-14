import {extendTheme} from 'native-base';
import {colors} from './colors';
import FontSizeType from '_theme/fontSize.ts';
import LineHeightType from '_theme/lineHeight.ts';
import FontFamilyType from '_theme/fontFamily.ts';

const customTheme = extendTheme({
  colors,
  primary: FontFamilyType.primary,
  primaryMedium: FontFamilyType.primaryMedium,
  primarySemiBold: FontFamilyType.primarySemiBold,
  primaryBold: FontFamilyType.primaryBold,
  primaryExtraBold: FontFamilyType.primaryExtraBold,
  primaryBlack: FontFamilyType.primaryBlack,
  primaryLight: FontFamilyType.primaryLight,
  fontSizes: FontSizeType,
  lineHeights: LineHeightType,
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
