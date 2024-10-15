import { NavigatorScreenParams } from '@react-navigation/core';
import {
  AppRoute,
  MainRoute,
  MainTabRoute,
} from '../navigation/routes/app.routes';
import { AuthRouteParams } from '_screens/auth/navigation/auth.routes.ts';

export type AppNavigatorParams = {
  [AppRoute.ROOT]: NavigatorScreenParams<MainNavigatorParams>;
  [AppRoute.AUTH]: NavigatorScreenParams<AuthRouteParams>;
};

export type MainNavigatorParams = {
  [MainRoute.BOTTOM_TAB_NAVIGATOR]: NavigatorScreenParams<MainTabRouteParams>;
};

export type MainTabRouteParams = {
  [MainTabRoute.DASHBOARD]: undefined;
  [MainTabRoute.CHAT]: undefined;
  [MainTabRoute.NOTIFICATION]: undefined;
  [MainTabRoute.SETTINGS]: undefined;
};
