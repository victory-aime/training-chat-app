/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppMainNavigation from './src/navigation/main.navigation.tsx';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppMainNavigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}

export default App;
