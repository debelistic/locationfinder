import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  LoginScreen, PropertiesScreen
} from './screens'
import Auth from './routes/authRoutes'

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(user)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log('while getting user', e)
    return 'user not found'
  }
}

export default function App() {
  const [user, setUser] = useState({})
  useEffect(() => {
    
    const user = (async () => getData())()
    setUser(user)
    console.log('here>>', user)
    // const user = await getData
    // console.log(user)
    // return setUser(user)
  })
  console.log('here now', user)
  if(user === `while getting user [ReferenceError: Can't find variable: user]`) return <LoginScreen />
  console.log(Object.keys(user).length, '>>b3')
  return user ? <PropertiesScreen /> : <LoginScreen />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
