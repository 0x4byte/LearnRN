import React, { Component } from 'react'
import {
  View,
  Button,
  NativeModules,
} from 'react-native'
import { HeaderBackButton } from 'react-navigation'

const HomeScreen = props => {
  const { navigation } = props

  return (
    <View>
      <Button
        title='TextScreen'
        onPress={() => navigation.navigate('TextScreen')} />
      <Button
        title='ViewScreen'
        onPress={() => navigation.navigate('ViewScreen')} />
      <Button
        title='ImageScreen'
        onPress={() => navigation.navigate('ImageScreen')} />
    </View>
  )
}

HomeScreen.navigationOptions = {
  title: '首页',
  headerLeft: <HeaderBackButton
    title='返回'
    onPress={() => NativeModules.NativeUtils.goBack()} />,
};

export default HomeScreen
