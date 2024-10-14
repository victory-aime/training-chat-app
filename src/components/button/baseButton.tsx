import React, { FC } from 'react';
import { Button, Spinner } from 'native-base';
import { ColorType } from '_theme/variables';
import {
  ButtonIconPosition,
  ButtonSizes,
  ButtonVariants,
} from './constants/button.types';
import { ButtonProps } from './interface/button';
import { BaseText, TextVariant } from '_components/baseText/baseText.tsx';
import { useTranslation } from 'react-i18next';

const BaseButton: FC<ButtonProps> = ({
  title,
  isLoading = false,
  isDisabled = false,
  size = ButtonSizes.Small,
  variant = ButtonVariants.SOLID,
  iconPosition = ButtonIconPosition.Left,
  renderIcon,
  children,
  ...rest
}) => {
  const { t } = useTranslation();
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
      borderRadius={'7px'}
      padding={'5px'}
      leftIcon={iconPosition === ButtonIconPosition.Left ? icon : <></>}
      rightIcon={iconPosition === ButtonIconPosition.Right ? icon : <></>}
      _pressed={{ backgroundColor: 'transparent' }}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {title ? (
            <BaseText
              color={
                variant === ButtonVariants.SOLID ? 'white' : 'secondary.500'
              }
              variant={TextVariant.M}>
              {t(title)}
            </BaseText>
          ) : (
            children
          )}
        </>
      )}
    </Button>
  );
};
export default BaseButton;
