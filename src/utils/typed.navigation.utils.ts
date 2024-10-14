import { NavigationProp, useNavigation } from '@react-navigation/native';

export const TypedNavigation = <T extends object>() => {
  return useNavigation<NavigationProp<T>>();
};
