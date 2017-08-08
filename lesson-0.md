## 使用react-native开发，我们需要学习什么?
#### javascript基础语法, [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

#### React及JXS [入门教程](http://www.ruanyifeng.com/blog/2015/03/react.html)

#### ES6 [入门教程](http://es6.ruanyifeng.com/)
[react-native使用到的新语法](https://github.com/facebook/react-native/blob/master/babel-preset/configs/main.js#L16)
* 箭头函数Arrow functions 
* 块级作用域Block scoping
* 数组的扩展运算Call spread
* 类Classes
* 常量Constants
* 解构Destructuring
* for...of
* 模块Modules,import/export
* 动态属性键Computed Properties
* 对象方法的简写Object Consise Method
* 对象属性的简写Object Short Notation
* 参数的扩展运算Rest Params
* 字符串模板Template Literals

#### ES7
* 对象的扩展运算Object Spread
* 参数列表末尾允许放置逗号Function Trailing Comma
* async/await函数

## RN开发
1. create-react-native-app myapp
   优点: 基于expo，没必要使用Android Studio or Xcode, 仅专注于js层面开发就好。
   缺点: 太依赖于expo，很难集成到现有app，模块定制自由度为零。
2. react-native init myapp
   优点: 自由度高，可方便依赖第三方插件，封装自定义的原生模块,集成到现有app
   缺点: 没有比较统一的UI组件，没有统一的打包上线规范。

## RN集成到现有app，helloWorld演示(以ios项目为例子)
[参考官方链接](http://facebook.github.io/react-native/docs/integration-with-existing-apps.html)
> 本示例在 react-native@0.47.1版本上搭建
1. react-native init HelloWorldJs && cd HelloWorldJs
2. 删除原生项目依赖，rm -rf ios android
3. cd HelloWorldJs && yarn add react-native@0.47.1 确保新安装的是0.47.1
3. 进入原生项目, cd => HelloWorldSwift
4. mkdir ReactNative
5. yarn init
6. yarn add react-native@0.47.1, 确保安装的版本号和具体js项目一致
7. 安装ios包管理工具pod, `sudo brew install cocoapods`, 并更新 Podfile

```ruby
# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'

platform :ios,'9.0'
use_frameworks!

target 'HelloWorldSwift' do
  # Pods for HelloWorldSwift
  # Your 'node_modules' directory is probably in the root of your project,
  # but if not, adjust the `:path` accordingly
  pod 'React', :path => 'ReactNative/node_modules/react-native', :subspecs => [
    'Core',
    'DevSupport', # Include this to enable In-App Devmenu if RN >= 0.43
    'RCTText',
    'RCTImage',
    'RCTNetwork',
    'BatchedBridge',
    'RCTWebSocket',
    'RCTAnimation',
  ]
  # Explicitly include Yoga if you are using RN >= 0.42.0
  pod "Yoga", :path => "ReactNative/node_modules/react-native/ReactCommon/yoga"

end

```
8. pod install
9. 新建入口文件 HelloWorldViewController.swift
```swift
// HelloWorldViewController.swift
import UIKit
import React

class HelloWorldViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.navigationController?.isNavigationBarHidden = true
        
        let jsCodeLocation = NSURL(string: "http://127.0.0.1:8081/index.ios.bundle")
        
        let rootView = RCTRootView(
            bundleURL: jsCodeLocation! as URL,
            moduleName: "helloworld",
            initialProperties: nil,
            launchOptions: nil
        )
        
        self.view = rootView;
    }
}
```
10. 加载RN入口页面
```swift
// ViewController.swift
let vc = HelloWorldViewController()
self.navigationController?.pushViewController(vc, animated: true);
```
11. 示例源码请见, HelloWorldJs 和 HelloWorldSwift

## 问题集锦
1. 如遇报错
```
Unable to find a specification for `Folly` depended upon by `React/CxxBridge`

请将Podfile文件中 CxxBridge => BatchedBridge 后重新pod install
```
2. 如遇报错
```
#import <NativeAnimation/RCTValueAnimatedNode.h>
请改为
#import "RCTValueAnimatedNode.h"
```

参考链接
1. [集成到现有应用](http://facebook.github.io/react-native/docs/integration-with-existing-apps.html)
2. [js环境](http://facebook.github.io/react-native/docs/javascript-environment.html)
1. [写给移动开发者的 React Native 指南](http://wingjay.com/2017/03/14/%E5%86%99%E7%BB%99%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91%E8%80%85%E7%9A%84-React-Native-%E6%8C%87%E5%8D%97/)
