import { IButtonProps } from 'native-base';
import { ResponsiveValue } from 'native-base/lib/typescript/components/types';
import { ButtonIconPosition } from '../constants/button.types';
import React from 'react';

export interface ButtonProps extends IButtonProps {
  title?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  size?: ResponsiveValue<string & {}>;
  renderIcon?: () => JSX.Element;
  variant?: string;
  colorsScheme?: string;
  iconPosition?: ButtonIconPosition.Left | ButtonIconPosition.Right;
  children?: React.ReactNode;
}
