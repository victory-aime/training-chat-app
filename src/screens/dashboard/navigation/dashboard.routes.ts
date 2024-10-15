import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum DashboardRoutes {
  HOME = 'home',
  DETAIL_USER = 'detail_user',
  CHAT_SCREEN = 'chat_screen',
}

export type DashboardRouteParams = {
  [DashboardRoutes.HOME]: undefined;
  [DashboardRoutes.DETAIL_USER]: undefined;
  [DashboardRoutes.CHAT_SCREEN]: undefined;
};

export type DashboardScreenProps<T extends keyof DashboardRouteParams> =
  NativeStackScreenProps<DashboardRouteParams, T>;
