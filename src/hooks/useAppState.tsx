import {useCallback, useEffect, useState} from 'react';

import {AppState, AppStateStatus} from 'react-native';

import useIsMounted from './useIsMounted';

const inactiveStatus: AppStateStatus = 'inactive';
const activeStatus: AppStateStatus = 'active';
const inActivePattern = /inactive|background/;

type UseAppStateProps = {
  onForeground?: () => void;
  onChange?: () => void;
  onResume?: () => void;
};

type UseAppStateValue = {
  appState: AppStateStatus;
};

export const useAppState = (
  appStateHandlers: UseAppStateProps,
): UseAppStateValue => {
  const [appState, setAppState] = useState(AppState.currentState);
  const isMounted = useIsMounted();

  const handleAppStateChange = useCallback(
    (nextAppState: AppStateStatus) => {
      switch (nextAppState) {
        case inactiveStatus: {
          appStateHandlers?.onForeground?.();
          break;
        }
        case activeStatus: {
          if (inActivePattern.exec(appState)) {
            appStateHandlers?.onResume?.();
          }
          break;
        }
      }
      appStateHandlers?.onChange?.();

      isMounted.current && setAppState(nextAppState);
    },
    [appState, isMounted, appStateHandlers],
  );

  useEffect(() => {
    const {remove} = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      remove();
    };
  }, [handleAppStateChange]);

  return {appState};
};
