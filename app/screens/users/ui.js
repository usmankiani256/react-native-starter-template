import React from 'react'
import useService from './service'
import styles from './styles'

import { View } from 'react-native'
import { Text, Button } from '@components'

const Welcome = props => {
  const { getUsers } = useService(props)

  const { loading, error, data, refetch } = getUsers

  if (!loading) {
    return (
      <View style={styles.container}>
        <Text>Fetching users...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error.message}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(data)}</Text>
      <Button onPress={() => refetch()}>Refetch</Button>
    </View>
  )
}

export default Welcome
