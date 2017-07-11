import React from 'react'
import { View, ScrollView } from 'react-native'
import { Provider } from 'react-redux'

import styles from './styles/App_styles'
import configureStore from './src/store'
import Main from './src/Main'

const App = () => (
  <View style={styles.container}>
    <Provider store={configureStore()}>
      <ScrollView>
        <Main />
      </ScrollView>
    </Provider>
  </View>
)

export default App