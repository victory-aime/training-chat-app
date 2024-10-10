import {NavigatorScreenParams} from '@react-navigation/core';
import {
  AppRoute,
  MainRoute,
  MainTabRoute,
} from '../navigation/routes/app.routes';

export type AppNavigatorParams = {
  [AppRoute.ROOT]: NavigatorScreenParams<MainNavigatorParams>;
  [AppRoute.AUTH]: undefined;
};

export type MainNavigatorParams = {
  [MainRoute.BOTTOM_TAB_NAVIGATOR]: NavigatorScreenParams<MainTabRouteParams>;
};

export type MainTabRouteParams = {
  [MainTabRoute.CHAT]: undefined;
  [MainTabRoute.NOTIFICATION]: undefined;
  [MainTabRoute.SETTINGS]: undefined;
};
