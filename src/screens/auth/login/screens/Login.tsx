import { TouchableOpacity, View } from 'react-native';
import React, { useRef } from 'react';
import {
  BaseText,
  TextVariant,
  TextWeight,
} from '_components/baseText/baseText';
import { Formik, FormikContextType } from 'formik';
import FormTextInput from '_components/formInput/formInput.tsx';
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
const Login = () => {
  const formikRef = useRef<FormikContextType<any>>(null);
  const navigation = TypedNavigation<AuthRouteParams>();
  return (
    <View style={[styles.container, { backgroundColor: ColorType.grayScale }]}>
      <Banner />
      <BaseContainer>
        <View style={styles.header}>
          <BaseText variant={TextVariant.H3}>
            Welcome to your application
          </BaseText>
          <BaseText>Welcome to your application</BaseText>
        </View>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={() => {}}
          innerRef={formikRef}>
          {({ values, errors, handleSubmit }) => {
            return (
              <View style={styles.form}>
                <FormTextInput
                  required
                  name={'email'}
                  placeholder={'email'}
                  value={values.email}
                  InputLeftElement={<></>}
                />
                <FormTextInput
                  required
                  type={'password'}
                  name={'password'}
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
                    Forgot password?
                  </BaseText>
                </TouchableOpacity>
                <BaseButton title={'COMMON.LOG_IN'} size={ButtonSizes.Large} />
                <View style={styles.signUpContainer}>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate(AuthRoutes.SIGN_UP)}>
                    <BaseText>
                      Vous n'avez pas de compte?{' '}
                      <BaseText color={'primary.500'}>SignUp</BaseText>
                    </BaseText>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            );
          }}
        </Formik>
      </BaseContainer>
    </View>
  );
};

export default Login;
