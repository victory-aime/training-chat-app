import { TouchableOpacity, View } from 'react-native';
import React, { useRef } from 'react';
import {
  BaseText,
  TextVariant,
  TextWeight,
} from '_components/baseText/baseText';
import { Formik, FormikContextType } from 'formik';
import FormTextInput from '_components/formInput/formInput';
import BaseButton from '_components/button/baseButton';
import { ButtonSizes } from '_components/button/constants/button.types';
import BaseContainer from '_components/baseContainer/baseContainer';
import { ColorType } from '_theme/variables';
import {
  AuthRouteParams,
  AuthRoutes,
} from '_screens/auth/navigation/auth.routes';
import { TypedNavigation } from '_utils/typed.navigation.utils';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { styles } from '../../styles/styles';
import Banner from '_screens/auth/components/Banner.tsx';
import { useTranslation } from 'react-i18next';
const Login = () => {
  const { t } = useTranslation();
  const formikRef = useRef<FormikContextType<any>>(null);
  const navigation = TypedNavigation<AuthRouteParams>();
  return (
    <View style={[styles.container, { backgroundColor: ColorType.grayScale }]}>
      <Banner />
      <BaseContainer>
        <View style={styles.header}>
          <BaseText variant={TextVariant.H3}>
            {t('FORMS.AUTH.SIGN_IN.TITLE')}
          </BaseText>
          <BaseText>{t('FORMS.AUTH.SIGN_IN.DESCRIPTION')}</BaseText>
        </View>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={() => {}}
          innerRef={formikRef}>
          {({ values, handleSubmit }) => {
            return (
              <View style={styles.form}>
                <FormTextInput
                  required
                  name={'email'}
                  placeholder={'FORMS.AUTH.LABELS.EMAIL'}
                  value={values.email}
                  InputLeftElement={<></>}
                />
                <FormTextInput
                  required
                  type={'password'}
                  name={'FORMS.AUTH.LABELS.PASSWORD'}
                  value={values.password}
                  placeholder={'password'}
                />
                <TouchableOpacity
                  style={styles.forgotPassword}
                  onPress={() => {
                    navigation.navigate(AuthRoutes.FORGOT_PASSWORD);
                  }}>
                  <BaseText
                    style={{ textTransform: 'uppercase' }}
                    variant={TextVariant.M}
                    weight={TextWeight.Bold}
                    color={'primary.500'}>
                    {t('FORMS.AUTH.LABELS.FORGOT_PASSWORD')}
                  </BaseText>
                </TouchableOpacity>
                <BaseButton
                  onPress={() => handleSubmit()}
                  title={'COMMON.LOGIN'}
                  size={ButtonSizes.Large}
                />

                <TouchableWithoutFeedback
                  style={styles.signUpContainer}
                  onPress={() => navigation.navigate(AuthRoutes.SIGN_UP)}>
                  <BaseText>
                    {t('FORMS.AUTH.LABELS.NO_ACCOUNT')}{' '}
                    <BaseText color={'primary.500'}>
                      {t('FORMS.AUTH.LABELS.BTN_SIGN_UP')}
                    </BaseText>
                  </BaseText>
                </TouchableWithoutFeedback>
              </View>
            );
          }}
        </Formik>
      </BaseContainer>
    </View>
  );
};

export default Login;
