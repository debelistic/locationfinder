import React, { useState } from 'react'
import {
  View, TextInput, Button, Text, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity
} from 'react-native'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'
import { authStyles } from '../styles'
import * as yup from 'yup'
import AsyncStorage from '@react-native-community/async-storage'

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
    return 'done'
  } catch (e) {
    // saving error
    console.log('while storing user', e)
    return 'error'
  }
}

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
    auth().signInWithEmailAndPassword(email, password).then(async (res) => {
      const {uid} = res.user
      const user = {email, password, uid}
      await storeData('user', user)
      navigation.navigate('Properties')
    }).catch(error => {
      console.log(error)
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



// {"additionalUserInfo": {"isNewUser": false, "profile": null, "providerId": "password", "username": null}, 
// "user": {"displayName": null, "email": "victor@gmail.com", "emailVerified": false, "isAnonymous": false, "metadata": [Object], "phoneNumber": null, "photoURL": null, "providerData": [Array], "providerId": "firebase", "refreshToken": "AE0u-Nchfo1a3LkBXijyFipk06uz04yi94UFPth5iRrGXC4ezbWhZoQe3Yjuynzdah4JiqIh89KxMxY3-4DGrlfulv1iqTo9dFX8IiUBuK8tH0uQeDsYqMhoCsCTPZ6iow08HSu-Ue7vJoX22hAfkVFEYBwVA-TpmU6389UTGZJlHYfbUMaMSwoaIyfFpzCFm6-KP_dzqbLRFJI0Jk4jZWPTNfuTn5qMrA", "uid": "ZPK2xHmI0iXU2nLEKm06RkFo4lc2"}}
