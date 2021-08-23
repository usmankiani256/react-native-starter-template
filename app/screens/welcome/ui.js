import React from 'react'
import useService from './service'
import styles from './styles'

import { View } from 'react-native'
import { Text } from '@components'

const Welcome = props => {
  const { message } = useService(props)

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  )
}

export default Welcome
