import React from 'react'
import RootNavigator from '@navigation'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@redux'

const App = () => {
  return (
    <ReduxProvider store={store}>
      <RootNavigator />
    </ReduxProvider>
  )
}

export default App
