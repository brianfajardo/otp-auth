import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'

import styles from './styles/App_styles'
import configureStore from './src/store'
import Main from './src/Main'

const App = () => (
  <Provider store={configureStore()}>
    <View style={styles.container}>
      <Main />
    </View>
  </Provider>
)

export default App