import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { MainNavigatorParams } from '_types/navigation';

export const navigationRef =
  createNavigationContainerRef<MainNavigatorParams>();

export function navigate(name: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.navigate({
        name,
        params,
      }),
    );
  }
}

export const goBack = () => {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
};

export function navigateAndReset(routes = [], index = 0) {
  navigationRef.isReady() &&
    navigationRef.current?.dispatch(
      CommonActions.reset({
        index,
        routes,
      }),
    );
}
