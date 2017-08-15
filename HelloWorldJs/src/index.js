import { AppRegistry, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'

import HomeScreen from './HomeScreen'
import TextScreen from './TextScreen'
import ViewScreen from './ViewScreen'
import ImageScreen from './ImageScreen'

StatusBar.setBarStyle('dark-content')

const screens = {
  HomeScreen: { screen: HomeScreen },
  TextScreen: { screen: TextScreen },
  ViewScreen: { screen: ViewScreen },
  ImageScreen: { screen: ImageScreen },
}

const App = StackNavigator(screens, {
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerBackTitle: '返回',
  },
})

AppRegistry.registerComponent('helloworld', () => App)
