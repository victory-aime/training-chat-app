import React, {useState} from 'react';
import {FormControl, Input, View, WarningOutlineIcon} from 'native-base';
import {FormikContextType, useFormikContext} from 'formik';
import {useTranslation} from 'react-i18next';
import {IInputProps} from 'native-base';
import {TouchableOpacity, Keyboard} from 'react-native';
import {BaseText, TextVariant, TextWeight} from '../baseText/baseText';
import {ColorType} from '../../theme/variables';
import {EyeIcon, EyeOff, LockIcon} from '../../assets/svg';

export interface TextInputProps extends IInputProps {
  id: string;
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
}

const FormTextInput = ({
  id,
  label,
  type = 'text',
  placeholder,
  localErrorMsg = '',
  InputRightElement,
  InputLeftElement,
  customRadius,
  withMultiline = false,
  height,
  onChangeText,
  ...inputProps
}: TextInputProps) => {
  const {t} = useTranslation();
  const formContext: FormikContextType<
    Record<string, string | string[] | object[]>
  > = useFormikContext();
  const {touched, error} = formContext.getFieldMeta(id);
  const isError = !!(touched && error);
  const fieldError = isError ? error : '';
  const fieldProps: Partial<TextInputProps> = {
    status: localErrorMsg !== '' || fieldError ? 'danger' : 'basic',
  };

  const isPassword = type === 'password';
  const [secureTextEntry, setSecureTextEntry] = useState(isPassword);

  return (
    <FormControl isInvalid={isError}>
      {label && (
        <View mb={'10px'}>
          <BaseText variant={TextVariant.M} weight={TextWeight.Regular}>
            {label}
          </BaseText>
        </View>
      )}
      <View>
        <Input
          {...inputProps}
          {...fieldProps}
          onBlur={() => formContext.setFieldTouched(id, true)}
          onEndEditing={() => {
            formContext.setFieldTouched(id, true);
            Keyboard.dismiss();
          }}
          onChangeText={val => {
            formContext.setFieldValue(id, val);
            onChangeText?.(val);
          }}
          placeholder={placeholder}
          borderRadius={customRadius ?? '12px'}
          size={'lg'}
          color={'light.900'}
          variant={'outline'}
          keyboardAppearance={'dark'}
          multiline={withMultiline}
          _focus={{
            borderColor: 'coolGray.300',
            backgroundColor: 'transparent',
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
                      <EyeOff
                        width={22}
                        height={22}
                        fill={ColorType.grayScale}
                      />
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
                <>
                  {InputLeftElement && <View pl={3}>{InputLeftElement}</View>}
                </>
              )}
            </>
          }
          secureTextEntry={secureTextEntry}
          bg={'white'}
          isDisabled={inputProps.isDisabled}
          height={height ?? '60px'}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>

      {isError && (
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {t(fieldError)}
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};

export default FormTextInput;
