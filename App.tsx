/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NetworkProvider } from '_providers/NetworkProvider';
import AppMainNavigation from '_navigation/main.navigation';
import customTheme from '_theme/customTheme.tsx';
import I18nProvider from '_locales/i18n.provider.tsx';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <NativeBaseProvider theme={customTheme}>
        <SafeAreaProvider>
          <NavigationContainer>
            <NetworkProvider>
              <I18nProvider>
                <AppMainNavigation />
              </I18nProvider>
            </NetworkProvider>
          </NavigationContainer>
        </SafeAreaProvider>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}

export default App;
