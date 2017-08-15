import React from 'react'
import { Image, ImageResizeModeStatic, View } from 'react-native'


const loadUri = () => {
  const uri = 'https://oe3n2j0gt.qnssl.com/panda/1.0.34/images/shangjia/mobile.jpg'

  return <Image source={{ uri }} style={{ height: 300, }} />
}

const requireImg = () => {
  return <Image source={require('./images/lion.jpg')} />
}

const ImageScreen = () => {
  return (
    <View>
      { loadUri() }
      { requireImg() }
    </View>
  )
}

ImageScreen.navigationOptions = {
  title: 'ImageScreen',
}

export default ImageScreen

