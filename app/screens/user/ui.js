import React from 'react'
import useService from './service'
import styles from './styles'

import { View } from 'react-native'
import { Text, Button } from '@components'

const Welcome = props => {
  const { getUser } = useService(props)

  const { loading, error, data, refetch } = getUser

  if (loading) {
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

  let user = data.user

  return (
    <View style={styles.container}>
      <Text>ID: {user.id}</Text>
      <Text>Name: {user.name}</Text>
      <Text>Username: {user.username}</Text>
      <View style={styles.space} />
      <Button onPress={() => refetch()}>Refetch</Button>
    </View>
  )
}

export default Welcome
