import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppNavigatorParams} from '../types/navigation';
import {AppRoute} from './routes/app.routes.ts';
import Login from '../screens/auth/login/screens/Login.tsx';
import {AppBottomTabNavigator} from './bottom.tab.navigation.tsx';

const RootStack = createNativeStackNavigator<AppNavigatorParams>();
const AppMainNavigation = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {false ? (
        <RootStack.Screen
          name={AppRoute.ROOT}
          component={AppBottomTabNavigator}
        />
      ) : (
        <RootStack.Screen name={AppRoute.AUTH} component={Login} />
      )}
    </RootStack.Navigator>
  );
};

export default AppMainNavigation;
