import React from 'react'
import { NavigationContainer, useRoute, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView } from 'react-native-safe-area-context';
import { authStyles } from '../styles'

import {
  LoginScreen, SignUpScreen, PropertiesScreen
} from '../screens'


const Stack = createStackNavigator()


// <Stack.
export default function AuthStacks() {
  return (
    // <SafeAreaView >
      <NavigationContainer style={{ flex: 1}}>
        <Stack.Navigator initialRouteName='Login' screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignUpScreen} />
          <Stack.Screen name="Properties" component={PropertiesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    // </SafeAreaView>
  );
}
