import React from 'react'
import { StatusBar } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import styles from './styles.js'

import WelcomeScreen from '@screens/welcome'
import UserScreen from '@screens/user'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={styles.statusBar} />
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={styles.headerHidden}
        />
        <Stack.Screen
          name="Users"
          component={UserScreen}
          options={styles.headerHidden}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
