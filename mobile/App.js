import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'

import configureStore from './src/store'
import Main from './src/Main'

const App = () => (
  <Provider store={configureStore()}>
    <View style={styles.container}>
      <Main />
    </View>
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App