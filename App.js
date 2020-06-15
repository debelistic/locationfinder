import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {
  LoginScreen
} from './screens'

export default function App() {
  return (
    <TouchableWithoutFeedback 
      onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.container}>
        <LoginScreen />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
