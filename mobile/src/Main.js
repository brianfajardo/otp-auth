import React, { Component } from 'react'
import { View } from 'react-native'
import { Divider } from 'react-native-elements'
import firebase from 'firebase'

import SignUpFormContainer from './containers/SignUpFormContainer'
import SignInFormContainer from './containers/SignInFormContainer'

class Main extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA5z6sND7dAH92W2A1VHXWxMkvBvQSSFN0',
      authDomain: 'rn-otp-auth.firebaseapp.com',
      databaseURL: 'https://rn-otp-auth.firebaseio.com',
      projectId: 'rn-otp-auth',
      storageBucket: 'rn-otp-auth.appspot.com',
      messagingSenderId: '56819372949'
    }
    firebase.initializeApp(config)
  }

  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <SignUpFormContainer />
        <Divider style={{ backgroundColor: 'red' }} />
        <SignInFormContainer />
      </View>
    )
  }
}

export default Main