import React, {FC} from 'react';
import {Button, Spinner} from 'native-base';
import {CustomButtomProps} from './interface/customButton';
import {ButtonSizes, ButtonVariants} from './constants/customButtonTypes';
import {ColorType} from '../../theme/variables.ts';

const BaseButton: FC<CustomButtomProps> = ({
  isLoading = false,
  isDisabled = false,
  size = ButtonSizes.Small,
  variant = ButtonVariants.SOLID,
  renderIcon,
  children,
  ...rest
}) => {
  const icon = renderIcon ? renderIcon() : <></>;
  const borderColor =
    variant === ButtonVariants.OUTLINE
      ? ColorType.secondary
      : ColorType.primary;

  return (
    <Button
      {...rest}
      isDisabled={isDisabled}
      isLoading={isLoading}
      variant={variant}
      height={size}
      borderColor={borderColor}
      borderRadius={12}
      _pressed={{backgroundColor: 'transparent'}}>
      {isLoading ? <Spinner /> : children}
    </Button>
  );
};
export default BaseButton;
