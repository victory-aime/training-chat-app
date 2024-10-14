import { StyleSheet, View } from 'react-native';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const BaseContainer = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingLeft: 18,
    paddingRight: 18,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
export default BaseContainer;
