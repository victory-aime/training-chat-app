import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabRoute } from './routes/app.routes';
import { MainTabRouteParams } from '_types/navigation';
import { tabPrivateRoute } from './constants/private.routes';
import { ColorType } from '_theme/variables.ts';

const AppBottomTab = createBottomTabNavigator<MainTabRouteParams>();

export const AppBottomTabNavigator = () => {
  return (
    <AppBottomTab.Navigator
      initialRouteName={MainTabRoute.CHAT}
      screenOptions={() => ({
        tabBarHideOnKeyboard: true,
        //tabBarShowLabel: false,
        tabBarActiveTintColor: ColorType.primary,
        tabBarInactiveTintColor: ColorType.grayScale,
        tabBarStyle: {},
      })}
      safeAreaInsets={{ bottom: 20 }}>
      {tabPrivateRoute.map((obj, index) => {
        const title = obj.title || '';
        return (
          <AppBottomTab.Screen
            key={obj.title + index}
            name={obj.route as keyof MainTabRouteParams}
            component={obj.viewComponent}
            options={{
              title,
              unmountOnBlur: true,
              tabBarIcon: ({ color, size }) =>
                obj.icon &&
                obj.icon({ fill: color, width: size, height: size }),
            }}
          />
        );
      })}
    </AppBottomTab.Navigator>
  );
};
