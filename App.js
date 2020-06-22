import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import auth, { firebase } from '@react-native-firebase/auth'

import {
  LoginScreen, PropertiesScreen
} from './screens'
import Auth from './routes/authRoutes'

export default function App() {
  const [user, setUser] = useState({})
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      const user = JSON.parse(jsonValue)
      setUser(user)
      auth().signInWithEmailAndPassword(user.email, user.password).then(() => console.log('user in')).catch((e) => console.log(e))
      return 'done';
    } catch(e) {
      console.log('while getting user', e)
      return 'user not found'
    }
  }
  useEffect(() => {
    (async () => await getData())()
  }, [])
  return /*user ? <PropertiesScreen /> : */<Auth />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
