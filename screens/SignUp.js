import React from 'react'
import {
  View, TextInput, Button, authStylesheet, Text
} from 'react-native'
import { authStyles } from '../styles'

export default function SignUpScreen() {
  return (
    <View style={authStyles.container}>
      <TextInput  style={authStyles.textInput} placeholder='Email'/>
      <TextInput  style={authStyles.textInput} placeholder='Password'/>
      <Button title='Login' color='#27c7d2' style={authStyles.btn}/>
      <Text style={authStyles.forget}>Forget Password</Text>
    </View>
  )
}

