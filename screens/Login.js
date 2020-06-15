import React, { useState } from 'react'
import {
  View, TextInput, Button, Text, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity
} from 'react-native'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'
import { authStyles } from '../styles'
import * as yup from 'yup'

const loginValidation = yup.object({
  email: yup.string()
            .required()
            .email(),
  password: yup.string()
              .required()
              .min(6)
})


export default function LoginScreen({ navigation }) {
  const submit = ({email, password}) => {
    auth().signInWithEmailAndPassword(email, password).then(res => {
      navigation.navigate('Properties')
    }).catch(error => {
      let message
      if(error.code.trim() === 'auth/user-not-found') message = 'User not found. \n Check email and password'
      if(error.code.trim() === 'auth/network-request-failed') message = 'Check your Internet connection'
      if(error.code.trim() === 'auth/wrong-password') message = 'Email and password do not match'
      Alert.alert('Error', message || 'server error')
    })
  }


  return (
    <TouchableWithoutFeedback 
      onPress={() => Keyboard.dismiss()}
    >
      <View style={authStyles.container}>
        <View style={authStyles.formWrapper}>
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={loginValidation}
            onSubmit={(values) => {
              submit(values)
            }}
          >
            {(props) => (
              <View>
                <TextInput
                  style={authStyles.textInput}
                  onChangeText={props.handleChange('email')}
                  value={props.values.email} 
                  placeholder='Email'
                  onBlur={props.handleBlur('email')}
                />
                <Text style={authStyles.errMsg}>{props.touched.email && props.errors.email}</Text>
                <TextInput
                  style={authStyles.textInput}
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                  placeholder='Password'
                  secureTextEntry={true}
                  onBlur={props.handleBlur('password')}
                />
                <Text style={authStyles.errMsg}>{props.touched.password && props.errors.password}</Text>
                <Button title='Login' color='#27c7d2' onPress={props.handleSubmit} style={authStyles.btn}/>
              </View>
            )}
          </Formik>
          <View style={authStyles.forget}>
            <Text style={authStyles.smallFont}>Forget password</Text>
            <Text style={authStyles.smallFont}>
              Don't have an account
              <Text onPress={() => navigation.navigate('Signup')} style={authStyles.smallLink}> Signup</Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

