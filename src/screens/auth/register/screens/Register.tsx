import { ScrollView, View } from 'react-native';
import React, { useRef } from 'react';
import { BaseText, TextVariant } from '_components/baseText/baseText';
import { Formik, FormikContextType } from 'formik';
import FormTextInput from '_components/formInput/formInput.tsx';
import BaseButton from '_components/button/baseButton';
import { ButtonSizes } from '_components/button/constants/button.types';
import BaseContainer from '_components/baseContainer/baseContainer';
import { ColorType } from '_theme/variables';
import { AuthRouteParams } from '_screens/auth/navigation/auth.routes';
import { TypedNavigation } from '_utils/typed.navigation.utils';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Banner from '_screens/auth/components/Banner.tsx';
import { styles } from '_screens/auth/styles/styles.ts';

const Register = () => {
  const formikRef = useRef<FormikContextType<any>>(null);
  const navigation = TypedNavigation<AuthRouteParams>();
  return (
    <View style={[styles.container, { backgroundColor: ColorType.grayScale }]}>
      <Banner />
      <BaseContainer>
        <View style={styles.header}>
          <BaseText variant={TextVariant.L}>
            Create an account to this application
          </BaseText>
          <BaseText>description create account</BaseText>
        </View>
        <ScrollView
          contentContainerStyle={[styles.form]}
          showsVerticalScrollIndicator={false}>
          <Formik
            initialValues={{
              name: '',
              firstName: '',
              email: '',
              phone: '',
              password: '',
            }}
            onSubmit={() => {}}
            innerRef={formikRef}>
            {({ values, handleSubmit }) => {
              return (
                <>
                  <FormTextInput
                    required
                    name={'name'}
                    placeholder={'name'}
                    value={values.name}
                    InputLeftElement={<></>}
                  />
                  <FormTextInput
                    required
                    name={'firstName'}
                    placeholder={'firstName'}
                    value={values.firstName}
                    InputLeftElement={<></>}
                  />
                  <FormTextInput
                    required
                    name={'email'}
                    value={values.email}
                    placeholder={'email'}
                  />
                  <FormTextInput
                    required
                    name={'phone'}
                    value={values.phone}
                    placeholder={'phone'}
                  />
                  <FormTextInput
                    required
                    type={'password'}
                    name={'password'}
                    value={values.password}
                    placeholder={'password'}
                  />
                  <BaseButton
                    onPress={() => handleSubmit()}
                    title={'COMMON.SIGN_UP'}
                    size={ButtonSizes.Large}
                  />
                  <View style={styles.signUpContainer}>
                    <TouchableWithoutFeedback
                      onPress={() => navigation.goBack()}>
                      <BaseText>
                        Vous avez deja un compte?{' '}
                        <BaseText color={'primary.500'}>SignIn</BaseText>
                      </BaseText>
                    </TouchableWithoutFeedback>
                  </View>
                </>
              );
            }}
          </Formik>
          <View style={{ height: 100 }} />
        </ScrollView>
      </BaseContainer>
    </View>
  );
};
export default Register;
