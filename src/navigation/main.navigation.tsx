import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNavigatorParams } from '_types/navigation';
import { AppRoute } from './routes/app.routes';
import { AppBottomTabNavigator } from './bottom.tab.navigation';
import AuthNavigator from '_screens/auth/navigation/AuthNavigator';

const RootStack = createNativeStackNavigator<AppNavigatorParams>();
const AppMainNavigation = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {false ? (
        <RootStack.Screen
          name={AppRoute.ROOT}
          component={AppBottomTabNavigator}
        />
      ) : (
        <RootStack.Screen name={AppRoute.AUTH} component={AuthNavigator} />
      )}
    </RootStack.Navigator>
  );
};

export default AppMainNavigation;
