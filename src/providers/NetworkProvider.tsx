import React, {ReactNode, useEffect, useState} from 'react';

import NetInfo, {
  NetInfoCellularGeneration,
  NetInfoState,
  NetInfoStateType,
} from '@react-native-community/netinfo';
import {useAppState} from '_hooks/useAppState';

export const NetworkContext = React.createContext<State>({
  isConnected: true,
  isInternetReachable: false,
  isSlowConnection: false,
});

type State = Partial<NetInfoState> & {
  isSlowConnection: boolean;
};

type Props = {
  children: ReactNode;
};

export const NetworkProvider = ({children}: Props) => {
  const [netInfo, setNetInfo] = useState<State>({
    isConnected: true,
    isInternetReachable: false,
    isSlowConnection: false,
  });

  const isSlowConnection = (state: NetInfoState) =>
    state.type === NetInfoStateType.cellular &&
    state.details.cellularGeneration === NetInfoCellularGeneration['2g'];

  const updateNetInfo = (newState: NetInfoState) => {
    setNetInfo({
      ...newState,
      isSlowConnection: isSlowConnection(newState),
    });
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(updateNetInfo);

    return () => {
      unsubscribe();
    };
  }, []);

  const checkNetworkState = () => {
    NetInfo.fetch().then(newState => {
      setNetInfo({
        ...newState,
        isSlowConnection: isSlowConnection(newState),
      });
    });
  };

  useAppState({onResume: checkNetworkState});

  return (
    <NetworkContext.Provider value={netInfo}>
      {children}
    </NetworkContext.Provider>
  );
};
