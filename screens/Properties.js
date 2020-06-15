import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { authStyles } from '../styles'
import axios from 'axios'




export default function App({navigation}) {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://realtor.p.rapidapi.com/properties/v2/list-for-rent?sort=relevance&city=New%20York%20City&state_code=NY&limit=200&offset=0", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "realtor.p.rapidapi.com",
        "x-rapidapi-key": "46f8c47de3msh18811c6b2fb375ap18f76ajsn301a3619419a"
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  })
  return(
    <View style={authStyles.container}>
      <Text>Properties</Text>
    </View>
  )
}
