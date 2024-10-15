import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DashboardRouteParams,
  DashboardRoutes,
} from '_screens/dashboard/navigation/dashboard.routes.ts';
import {
  HomeScreen,
  ChatScreen,
  DetailUserScreen,
} from '_screens/dashboard/screens';
import HeaderApp from '_components/header/header.tsx';

const DashStack = createNativeStackNavigator<DashboardRouteParams>();

const DashboardNavigator = () => {
  return (
    <DashStack.Navigator
      initialRouteName={DashboardRoutes.HOME}
      screenOptions={{
        header: props => <HeaderApp {...props} />,
      }}>
      <DashStack.Screen name={DashboardRoutes.HOME} component={HomeScreen} />
      <DashStack.Screen
        name={DashboardRoutes.DETAIL_USER}
        component={DetailUserScreen}
      />
      <DashStack.Screen
        name={DashboardRoutes.CHAT_SCREEN}
        component={ChatScreen}
      />
    </DashStack.Navigator>
  );
};

export default DashboardNavigator;
