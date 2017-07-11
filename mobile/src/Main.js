import React from 'react'
import { View } from 'react-native'
import { Divider } from 'react-native-elements'

import SignUpFormContainer from './containers/SignUpFormContainer'
// import AuthFormContainer from './containers/AuthFormContainer'

const Main = () => (
  <View>
    <SignUpFormContainer />
    <Divider style={{ backgroundColor: 'red' }} />
  </View>
)

export default Main