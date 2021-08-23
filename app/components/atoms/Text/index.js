import React from 'react'
import { Text as RNText } from 'react-native'

const Text = props => {
  const { children } = props

  const styles = {
    fontSize: 18,
  }

  return <RNText style={styles}>{children}</RNText>
}

export default Text
