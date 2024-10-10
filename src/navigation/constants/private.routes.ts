import {SvgProps} from 'react-native-svg';
import React from 'react';
import {MainTabRouteParams} from '../../types/navigation';
import {MainTabRoute} from '../routes/app.routes.ts';
import ChatScreen from '../../screens/chat/screens/Chat.tsx';
import {BellIcon, ChatIcon, SettingIcon} from '../../assets/svg';

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
    title: 'SIDE_BAR.DASHBOARD',
    route: MainTabRoute.CHAT,
    viewComponent: ChatScreen,
    icon: (style?: SvgProps) => {
      return React.createElement(ChatIcon, {...style});
    },
  },

  {
    title: 'COMMON.DEMO',
    route: MainTabRoute.NOTIFICATION,
    viewComponent: ChatScreen,
    icon: (style?: SvgProps) => {
      return React.createElement(BellIcon, {...style});
    },
  },
  {
    title: 'COMMON.TEST',
    route: MainTabRoute.SETTINGS,
    viewComponent: ChatScreen,
    icon: (style?: SvgProps) => {
      return React.createElement(SettingIcon, {...style});
    },
  },
];
