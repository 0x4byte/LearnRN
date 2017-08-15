import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ViewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>默认垂直排列</Text>
      <Text>我是第一行</Text>
      <Text>我是第二行</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0078ef',
  }
})

ViewScreen.navigationOptions = {
  title: 'ViewScreen',
}

export default ViewScreen
