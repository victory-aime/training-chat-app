import React, {memo} from 'react';
import {StyleProp, TextProps, TextStyle} from 'react-native';
import {Text, useTheme} from 'native-base';

export enum TextVariant {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  L = 'L',
  XL = 'XL',
  M = 'M',
  S = 'S',
  XS = 'XS',
}

export enum TextWeight {
  Regular = 'Regular',
  Medium = 'Medium',
  SemiBold = 'SemiBold',
  Bold = 'Bold',
  ExtraBold = 'ExtraBold',
  Black = 'Black',
  Light = 'Light',
}

export type PropsType = {
  variant?: TextVariant;
  weight?: TextWeight;
  style?: StyleProp<TextStyle>;
  color?: string;
  ref?: ((instance: unknown) => void | null) | React.RefObject<unknown> | null;
} & TextProps;

const getTextStyle = (
  variant: TextVariant,
  weight: TextWeight,
  fonts: any,
  fontSizes: any,
  lineHeights: any,
): TextStyle => {
  const fontSizeMap = {
    [TextVariant.H1]: fontSizes.gigantic,
    [TextVariant.H2]: fontSizes.huge,
    [TextVariant.H3]: fontSizes.extraLarge,
    [TextVariant.L]: fontSizes.large,
    [TextVariant.XL]: fontSizes.extraLarge,
    [TextVariant.M]: fontSizes.mediumLarge,
    [TextVariant.S]: fontSizes.small,
    [TextVariant.XS]: fontSizes.extraSmall,
  };

  const lineHeightMap = {
    [TextVariant.H1]: lineHeights.huge,
    [TextVariant.H2]: lineHeights.extraLarge,
    [TextVariant.H3]: lineHeights.large,
    [TextVariant.L]: lineHeights.medium,
    [TextVariant.XL]: lineHeights.medium,
    [TextVariant.M]: lineHeights.mediumSmall,
    [TextVariant.S]: lineHeights.small,
    [TextVariant.XS]: lineHeights.extraSmall,
  };

  const fontFamilyMap = {
    [TextWeight.Regular]: fonts.primary,
    [TextWeight.Medium]: fonts.primaryMedium,
    [TextWeight.SemiBold]: fonts.primarySemiBold,
    [TextWeight.Bold]: fonts.primaryBold,
    [TextWeight.ExtraBold]: fonts.primaryExtraBold,
    [TextWeight.Black]: fonts.primaryBlack,
    [TextWeight.Light]: fonts.primaryLight,
  };

  const fontWeightMap = {
    [TextWeight.Regular]: '400' as TextStyle['fontWeight'],
    [TextWeight.Medium]: '500' as TextStyle['fontWeight'],
    [TextWeight.SemiBold]: '600' as TextStyle['fontWeight'],
    [TextWeight.Bold]: '700' as TextStyle['fontWeight'],
    [TextWeight.ExtraBold]: '800' as TextStyle['fontWeight'],
    [TextWeight.Black]: '900' as TextStyle['fontWeight'],
    [TextWeight.Light]: '300' as TextStyle['fontWeight'],
  };

  return {
    fontSize: fontSizeMap[variant],
    lineHeight: lineHeightMap[variant],
    fontWeight: fontWeightMap[weight],
    fontFamily: fontFamilyMap[weight],
  };
};

export const BaseText = ({
  children,
  variant = TextVariant.L,
  weight = TextWeight.Regular,
  style,
  color,
  ref,
  ...textProps
}: PropsType) => {
  const theme = useTheme();
  const textStyle = getTextStyle(
    variant,
    weight,
    theme.fonts,
    theme.fontSizes,
    theme.lineHeights,
  );

  return (
    <Text {...textProps} style={[textStyle, style]} color={color} ref={ref}>
      {children}
    </Text>
  );
};

export default memo(BaseText);
