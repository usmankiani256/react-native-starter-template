import React from 'react'
import RootNavigator from '@navigation'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@redux'

import { ApolloProvider } from '@apollo/client'
import { client } from '@services/client'

import { Provider as PaperProvider } from 'react-native-paper'
import { theme } from '@theme'

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        <PaperProvider theme={theme}>
          <RootNavigator />
        </PaperProvider>
      </ApolloProvider>
    </ReduxProvider>
  )
}

export default App
