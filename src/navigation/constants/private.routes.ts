import { SvgProps } from 'react-native-svg';
import React from 'react';
import { MainTabRouteParams } from '_types/navigation';
import { MainTabRoute } from '../routes/app.routes';
import ChatScreen from '_screens/chat/screens/Chat';
import { BellIcon, ChatIcon, HomeIcon, SettingIcon } from '_assets/svg';
import DashboardNavigator from '_screens/dashboard/navigation/DashboardNavigator';

export interface BottomTabItem {
  title: string;
  isCustomButton?: boolean;
  icon?: (style?: SvgProps) => React.ReactElement;
  route: keyof MainTabRouteParams;
  viewComponent: React.FC;
  key?: string;
}
export const tabPrivateRoute: BottomTabItem[] = [
  {
    title: 'TAB_BAR.DASHBOARD',
    route: MainTabRoute.DASHBOARD,
    viewComponent: DashboardNavigator,
    icon: (style?: SvgProps) => {
      return React.createElement(HomeIcon, { ...style });
    },
  },

  {
    title: 'TAB_BAR.NOTIFICATION',
    route: MainTabRoute.NOTIFICATION,
    viewComponent: ChatScreen,
    icon: (style?: SvgProps) => {
      return React.createElement(BellIcon, { ...style });
    },
  },
  {
    title: 'TAB_BAR.SETTINGS',
    route: MainTabRoute.SETTINGS,
    viewComponent: ChatScreen,
    icon: (style?: SvgProps) => {
      return React.createElement(SettingIcon, { ...style });
    },
  },
];
