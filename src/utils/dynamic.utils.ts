import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };
export const scaleHeight = (
  originalWidth: number,
  originalHeight: number,
  newWidth: number,
) => {
  return (originalHeight * newWidth) / originalWidth;
};

export const INNER_PADDING = 20;
export const BOTTOM_TAB_HEIGHT = scaleHeight(339, 65, scale(339));
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGTH = Dimensions.get('window').height;
export const BOTTOM_TAB_WIDTH = SCREEN_WIDTH - 30;
