import React, { useState } from 'react';
import {
  FormControl,
  Input,
  Text,
  View,
  WarningOutlineIcon,
} from 'native-base';
import { FormikContextType, useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';
import { IInputProps } from 'native-base';
import { TouchableOpacity, Keyboard } from 'react-native';
import { BaseText, TextVariant, TextWeight } from '../baseText/baseText';
import { ColorType } from '_theme/variables';
import { EyeIcon, EyeOff, LockIcon } from '_assets/svg';

export interface TextInputProps extends IInputProps {
  name: string;
  label?: string;
  localErrorMsg?: string;
  onChangeText?: (value: string) => void;
  InputRightElement?: JSX.Element;
  InputLeftElement?: JSX.Element;
  type?: 'text' | 'password';
  status?: string;
  customRadius?: number;
  withMultiline?: boolean;
  height?: string | number;
  required?: boolean;
}

const FormTextInput = ({
  name,
  label,
  type = 'text',
  placeholder,
  localErrorMsg = '',
  InputRightElement,
  InputLeftElement,
  withMultiline = false,
  height = '60px',
  onChangeText,
  required = false,
  ...rest
}: TextInputProps) => {
  const { t } = useTranslation();
  const formContext: FormikContextType<
    Record<string, string | string[] | object[]>
  > = useFormikContext();
  const { touched, error } = formContext.getFieldMeta(name);
  const isError = !!(touched && error);
  const fieldError = isError ? error : '';
  const fieldProps: Partial<TextInputProps> = {
    status: localErrorMsg !== '' || fieldError ? 'danger' : 'basic',
  };

  const isPassword = type === 'password';
  const [secureTextEntry, setSecureTextEntry] = useState(isPassword);

  return (
    <FormControl id={name} isInvalid={isError}>
      {label && (
        <View mb={'10px'}>
          <BaseText variant={TextVariant.M} weight={TextWeight.Regular}>
            {label}
            {required && <Text color={'red.500'}> * </Text>}
          </BaseText>
        </View>
      )}

      <Input
        {...rest}
        {...fieldProps}
        onBlur={() => formContext.setFieldTouched(name, true)}
        onEndEditing={() => {
          formContext.setFieldTouched(name, true);
          Keyboard.dismiss();
        }}
        onChangeText={val => {
          formContext.setFieldValue(name, val);
          onChangeText?.(val);
        }}
        placeholder={placeholder}
        backgroundColor={'light.50'}
        borderRadius={'7px'}
        size={'lg'}
        color={'light.900'}
        variant={'filled'}
        keyboardAppearance={'dark'}
        multiline={withMultiline}
        _focus={{
          borderColor: 'none',
        }}
        _ios={{
          padding: 3,
        }}
        InputRightElement={
          <>
            {!InputRightElement && isPassword ? (
              <View pr={5}>
                <TouchableOpacity
                  onPress={() => setSecureTextEntry(!secureTextEntry)}>
                  {secureTextEntry ? (
                    <EyeOff width={22} height={22} fill={ColorType.grayScale} />
                  ) : (
                    <EyeIcon
                      width={22}
                      height={22}
                      fill={ColorType.grayScale}
                    />
                  )}
                </TouchableOpacity>
              </View>
            ) : (
              <>
                {InputRightElement && <View pr={5}>{InputRightElement}</View>}
              </>
            )}
          </>
        }
        InputLeftElement={
          <>
            {!InputLeftElement && isPassword ? (
              <View pl={3}>
                <LockIcon width={22} height={22} />
              </View>
            ) : (
              <>{InputLeftElement && <View pl={3}>{InputLeftElement}</View>}</>
            )}
          </>
        }
        secureTextEntry={secureTextEntry}
        bg={'white'}
        isDisabled={rest.isDisabled}
        height={height}
        autoCorrect={false}
        autoCapitalize="none"
      />

      {isError && (
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {t(fieldError)}
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};

export default FormTextInput;
