import React from 'react'
import useService from './service'
import styles from './styles'

import { View } from 'react-native'
import { Text } from '@components'

const Welcome = props => {
  const { welcomeText } = useService(props)

  return (
    <View style={styles.container}>
      <Text>{welcomeText}</Text>
    </View>
  )
}

export default Welcome
