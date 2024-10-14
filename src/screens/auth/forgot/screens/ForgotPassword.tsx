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
import { ArrowBackIcon } from 'native-base';
import Banner from '_screens/auth/components/Banner.tsx';
import { styles } from '_screens/auth/styles/styles.ts';

const ForgotPassword = () => {
  const formikRef = useRef<FormikContextType<any>>(null);
  const navigation = TypedNavigation<AuthRouteParams>();
  return (
    <View style={[styles.container, { backgroundColor: ColorType.grayScale }]}>
      <Banner />

      <BaseContainer>
        <View style={styles.header}>
          <BaseText variant={TextVariant.L}>Forgot Password</BaseText>
          <BaseText variant={TextVariant.S}>
            A message with verification code was sent to your mobile phone.
          </BaseText>
        </View>
        <ScrollView
          contentContainerStyle={[styles.form]}
          showsHorizontalScrollIndicator={false}>
          <Formik
            initialValues={{
              email: '',
            }}
            onSubmit={() => {}}
            innerRef={formikRef}>
            {({ values, handleSubmit }) => {
              return (
                <>
                  <FormTextInput
                    required
                    name={'email'}
                    placeholder={'email'}
                    value={values.name}
                    InputLeftElement={<></>}
                  />

                  <BaseButton
                    onPress={() => handleSubmit()}
                    title={'COMMON.SEND'}
                    size={ButtonSizes.Large}
                  />
                  <View style={styles.signUpContainer}>
                    <BaseButton
                      onPress={() => navigation.goBack()}
                      renderIcon={() => <ArrowBackIcon />}
                      title={'COMMON.GO_BACK'}
                      size={ButtonSizes.Large}
                    />
                  </View>
                </>
              );
            }}
          </Formik>
        </ScrollView>
      </BaseContainer>
    </View>
  );
};

export default ForgotPassword;
