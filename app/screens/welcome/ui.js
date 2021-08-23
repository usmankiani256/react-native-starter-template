import React from 'react'
import useService from './service'
import styles from './styles'

import { View } from 'react-native'
import { Text, Button } from '@components'

const Welcome = props => {
  const { message, onContinue } = useService(props)

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <Button onPress={onContinue}>Continue</Button>
    </View>
  )
}

export default Welcome
