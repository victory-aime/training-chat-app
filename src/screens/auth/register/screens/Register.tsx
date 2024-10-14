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
import { useTranslation } from 'react-i18next';

const Register = () => {
  const { t } = useTranslation();
  const formikRef = useRef<FormikContextType<any>>(null);
  const navigation = TypedNavigation<AuthRouteParams>();
  return (
    <View style={[styles.container, { backgroundColor: ColorType.grayScale }]}>
      <Banner />
      <BaseContainer>
        <View style={styles.header}>
          <BaseText variant={TextVariant.H3}>
            {t('FORMS.AUTH.SIGN_UP.TITLE')}
          </BaseText>
          <BaseText>{t('FORMS.AUTH.SIGN_UP.DESCRIPTION')}</BaseText>
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
                    placeholder={'FORMS.AUTH.LABELS.NAME'}
                    value={values.name}
                    InputLeftElement={<></>}
                  />
                  <FormTextInput
                    required
                    name={'firstName'}
                    placeholder={'FORMS.AUTH.LABELS.FIRST_NAME'}
                    value={values.firstName}
                    InputLeftElement={<></>}
                  />
                  <FormTextInput
                    required
                    name={'email'}
                    placeholder={'FORMS.AUTH.LABELS.EMAIL'}
                    value={values.email}
                    InputLeftElement={<></>}
                  />
                  <FormTextInput
                    required
                    name={'phone'}
                    value={values.phone}
                    placeholder={'FORMS.AUTH.LABELS.PHONE_NUMBER'}
                  />
                  <FormTextInput
                    required
                    type={'password'}
                    name={'FORMS.AUTH.LABELS.PASSWORD'}
                    value={values.password}
                    placeholder={'password'}
                  />
                  <BaseButton
                    onPress={() => handleSubmit()}
                    title={'COMMON.CREATE_ACCOUNT'}
                    size={ButtonSizes.Large}
                  />
                  <TouchableWithoutFeedback
                    style={styles.signUpContainer}
                    onPress={() => navigation.goBack()}>
                    <BaseText>
                      {t('FORMS.AUTH.LABELS.ALREADY_ACCOUNT')}{' '}
                      <BaseText color={'primary.500'}>
                        {t('FORMS.AUTH.LABELS.BTN_SIGN_IN')}
                      </BaseText>
                    </BaseText>
                  </TouchableWithoutFeedback>
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
