import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },
  insideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.6,
  },
  imageStyle: {
    width: 200,
    height: 50,
  },
});
