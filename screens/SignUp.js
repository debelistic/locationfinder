import React, { useState } from 'react'
import {
  View, TextInput, Button, Text, Alert, TouchableWithoutFeedback, Keyboard
} from 'react-native'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'
import { authStyles } from '../styles'
import * as yup from 'yup'

const signupValidation = yup.object({
  email: yup.string()
            .required()
            .email(),
  password: yup.string()
              .required()
              .min(6),
  confirmPassword: yup.string()
                      .oneOf([yup.ref('password'), null], 'Password fields must match')
})


export default function SignupScreen({ navigation }) {
  const submit = ({email, password}) => {
    auth().createUserWithEmailAndPassword(email, password).then(res => {
      navigation.navigate('Properties')
    }).catch(error => {
      let message
      console.log(error)
      if(error.code === 'auth/network-request-failed') message = 'Check your Internet connection'
      if(error.code === 'auth/email-already-in-use') message = 'User exist'
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
            initialValues={{email: '', password: '', confirmPassword: ''}}
            validationSchema={signupValidation}
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
                <TextInput
                  style={authStyles.textInput}
                  onChangeText={props.handleChange('confirmPassword')}
                  value={props.values.confirmPassword}
                  placeholder='Password'
                  secureTextEntry={true}
                  onBlur={props.handleBlur('confirmPassword')}
                />
                <Text style={authStyles.errMsg}>{props.touched.confirmPassword && props.errors.confirmPassword}</Text>
                <Button title='Signup' color='#27c7d2' onPress={props.handleSubmit} style={authStyles.btn}/>
              </View>
            )}
          </Formik>
          <View style={authStyles.forget}>
            <Text style={authStyles.smallFont}>
              Registered User
              <Text onPress={() => navigation.navigate('Login')} style={authStyles.smallLink}> Login</Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

