import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AuthRouteParams,
  AuthRoutes,
} from '_screens/auth/navigation/auth.routes.ts';
import { Login, ForgotPassword, Register } from '_screens/auth';

const AuthStack = createNativeStackNavigator<AuthRouteParams>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={AuthRoutes.LOGIN}
      screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={AuthRoutes.LOGIN} component={Login} />
      <AuthStack.Screen name={AuthRoutes.SIGN_UP} component={Register} />
      <AuthStack.Screen
        name={AuthRoutes.FORGOT_PASSWORD}
        component={ForgotPassword}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
