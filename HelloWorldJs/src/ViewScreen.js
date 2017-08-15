import React from 'react'
import { View, Text, Alert, StyleSheet } from 'react-native'

const ViewScreen = () => {
  return (
    <View>
      <Text>默认垂直排列</Text>
      <Text>我是第一行</Text>
      <Text>我是第二行</Text>
    </View>
  )
}

ViewScreen.navigationOptions = {
  title: 'ViewScreen',
}

export default ViewScreen
