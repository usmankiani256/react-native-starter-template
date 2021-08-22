import React, { useState, useEffect } from 'react'
import { View, Text as RNText } from 'react-native'

const Text = props => {
  const { children } = props

  return <RNText>{children}</RNText>
}

export default Text
