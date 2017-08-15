import React from 'react'
import { View, Text, Alert } from 'react-native'

const SingleText = () => {
  return (
    <Text style={{ fontSize: 16, color: 'red', }}>我是单行文本。</Text>
  )
}

const EllipsisText = () => {
  return (
    <Text
      numberOfLines={1}
      ellipsizeMode='middle'
      style={{ padding: 10, backgroundColor: '#ddd' }}>
      Text supports nesting, styling, and touch handling.Text supports nesting, styling, and touch handling.Text supports nesting, styling, and touch handling.
    </Text>
  )
}

const NestText = () => {
  return (
    <Text style={{ fontSize: 20, color: 'blue' }}>
      我是外层Text
      <Text style={{ fontSize: 16, color: 'green' }}>我是内层个性化Text</Text>
      <Text>我是继承外层样式的内层Text</Text>
    </Text>
  )
}

const TouchText = () => {
  return (
    <Text
      style={{ padding: 10, color: '#0078ef' }}
      onPress={() => Alert.alert('click text')}
      onLongPress={() => Alert.alert('long long long press')}>
      我是可点击的文本
    </Text>
  )
}

const TextScreen = () => {
  return (
    <View>
      <SingleText />
      <EllipsisText />
      <NestText />
      <TouchText />
    </View>
  )
}

TextScreen.navigationOptions = {
  title: 'TextScreen',
}

export default TextScreen
