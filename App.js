import React from 'react'
import RootNavigator from '@navigation'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@redux'

import { Provider as PaperProvider } from 'react-native-paper'
import { PaperTheme } from '@theme'

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={PaperTheme}>
        <RootNavigator />
      </PaperProvider>
    </ReduxProvider>
  )
}

export default App
