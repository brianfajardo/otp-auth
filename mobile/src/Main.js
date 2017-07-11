import React from 'react'
import { View } from 'react-native'
import { Divider } from 'react-native-elements'

import SignUpFormContainer from './containers/SignUpFormContainer'
import SignInFormContainer from './containers/SignInFormContainer'

const Main = () => (
  <View style={{ flex: 1, backgroundColor: 'white' }}>
    <SignUpFormContainer />
    <Divider style={{ backgroundColor: 'red' }} />
    <SignInFormContainer />
  </View>
)

export default Main