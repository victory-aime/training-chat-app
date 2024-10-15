import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Chat screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ChatScreen;
