import {StyleSheet} from 'react-native'

export const authStyles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formWrapper: {
    width: '80%'
  },
  textInput: {
    borderBottomWidth: 2,
    borderColor: '#27c7d2',
    padding: 8,
    marginBottom: 14,
  },
  btn: {
    margin: 40,
    height: 70,
    fontWeight: '900'
  },
  forget: {
    textAlign: 'center',
    alignItems: 'center',
    margin: 20,
    fontSize: 1
  },
  smallFont: {
    fontSize: 12
  },
  errMsg: {
    fontSize: 10,
    color: 'red',
  },
  smallLink: {
    color: '#27c7d2',
    marginVertical: 20
  }
})
