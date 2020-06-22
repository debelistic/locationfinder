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

  return (
    <View>
      <Text>Location finder is loading</Text>
    </View>
    
  )
}

