import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum AuthRoutes {
  LOGIN = 'login',
  SIGN_UP = 'register',
  FORGOT_PASSWORD = 'forgotPassword',
}

export type AuthRouteParams = {
  [AuthRoutes.LOGIN]: undefined;
  [AuthRoutes.SIGN_UP]: undefined;
  [AuthRoutes.FORGOT_PASSWORD]: undefined;
};

export type AuthScreenProps<T extends keyof AuthRouteParams> =
  NativeStackScreenProps<AuthRouteParams, T>;
