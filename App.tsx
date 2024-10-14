/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NetworkProvider} from '_providers/NetworkProvider';
import AppMainNavigation from '_navigation/main.navigation';
import customTheme from '_theme/customTheme.tsx';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <NativeBaseProvider theme={customTheme}>
        <SafeAreaProvider>
          <NavigationContainer>
            <NetworkProvider>
              <AppMainNavigation />
            </NetworkProvider>
          </NavigationContainer>
        </SafeAreaProvider>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}

export default App;
