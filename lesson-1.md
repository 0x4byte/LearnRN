## 基础组件的使用

### StyleSheet
> StyleSheet提供了一种类似CSS样式表的抽象。属性书写方式由css的短划线连接变成了驼峰连接。RN中尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点

#### 书写组件样式有两种方式
1. 直接书写内联样式
2. 使用StyleSheet创建

```js
// 内联样式
<Text style={{ color: '#0078ef' }}>我是达达蓝</Text>

// StyleSheet引用
<Text style={styles.text}>我是达达蓝</Text>

const styles = StyleSheet.create({
  text: {
    color: '#0078ef',
  },
})
```

#### 优点
从代码质量角度：
> 1. 从render函数中移除具体的样式内容，可以使代码更清晰易懂。
> 2. 给样式命名也是对render函数中的原始组件的作用的一种标记。

从性能角度：
> 1. 创建一个样式表，就可以使得我们后续更容易通过ID来引用样式，而不是每次都创建一个新的对象。
> 2. 它还使得样式只会在JavaScript和原生之间传递一次，随后的过程都可以只传递一个ID（这个优化还未实现）。

#### 一些常用属性
1. hairlineWidth: 当前平台上的最细的宽度。

### Text
> 一个用于显示文本的React组件，并且它也支持嵌套、样式，以及触摸处理

#### 嵌套
> `<Text>`元素在布局上不同于其它组件：在Text内部的元素不再使用flexbox布局，而是采用文本布局。这意味着<Text>内部的元素不再是一个个矩形，而可能会在行末进行折叠。有点类似于html中的内联元素。

```html
<Text>
  <Text>First part and </Text>
  <Text>second part</Text>
</Text>

<!-- output -->
First part and second part
```

#### 属性
> 能设置的属性: [可参考](https://facebook.github.io/react-native/docs/text.html#props)<br>
> 更方便的查询: 可安装IDE插件，直接跳转源码查看已支持的属性及样式，或用vscode直接跳转查看。
```js
// 属性举例: 超过文字部分显示省略号...
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

// output
Text supports nesting, styling...touch handling

// 可触发点击文本事件，长按事件，长按选择文本
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
```


#### 样式
> 能设置的样式: [可参考](https://facebook.github.io/react-native/docs/textstyleproptypes.html)<br>

就目前版本而言(0.47.1):
1. 只有Text组件能够继承样式。
2. 如果要复用样式，可以封装成小组件。
3. 不同组件之间是强隔离的。

```js
const NestText = () => {
  return (
    <Text style={{ fontSize: 20, color: 'blue' }}>
      我是外层Text
      <Text style={{ fontSize: 16, color: 'green' }}>
        我是内层个性化Text
      </Text>
      <Text>我是继承外层样式的内层Text</Text>
    </Text>
  )
}
```

> 注意<br>
> $1. ReactNative组件在概念上被设计为强隔离性的：你应当可以在应用的任何位置放置一个组件，而且只要属性相同，其外观和表现都将完全相同。文本如果能够继承外面的样式属性，将会打破这种隔离性。<br>
> $2. React Native的实现也被简化了。我们不需要在每个元素上都添加一个fontFamily字段，并且我们也不需要隐含地在显示文本的时候向上遍历树。唯一的样式继承在原生Text组件中编码，也不会影响到其它组件或者系统本身。


### View
> View是一个支持Flexbox布局、样式、一些触摸处理、和一些无障碍功能的容器，并且它可以放到其它的视图里，也可以有任意多个任意类型的子视图。不论在什么平台上，View都会直接对应一个平台的原生视图，无论它是`UIView`、`<div>`还是`android.view.View`

#### Flexbox布局
> 与css中flex存在差异: <br>
> flexDirection的默认值是column而不是row.<br>
> flex只能指定一个数字值。

### Image及ImageBackground
> 与web的img标签不同的是
1.引用图片的方式不同
2.不同平台会自动选中最接近精度的一个图

应用图片有三种方式:
1. 静态图片资源`require`, require是在编译时期执行，而非运行时期执行，可以提前得知图片尺寸。
```js
// 错误
var icon = this.props.active ? 'my-icon-active' : 'my-icon-inactive';
<Image source={require('./' + icon + '.png')} />

// 正确
var icon = this.props.active ? require('./my-icon-active.png') : require('./my-icon-inactive.png');
<Image source={icon} />
```
2. 应用混合app中的资源`<Image source={{ uri: 'app中图标名称' }} />`
3. 网络请求`必须指定图片尺寸`
```js
// 正确
<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 400, height: 400}} />

// 也可以发post请求
<Image source={{
  uri: 'https://facebook.github.io/react/img/logo_og.png',
  method: 'POST',
  headers: {
    Pragma: 'no-cache'
  },
  body: 'Your Body goes here'
}}
style={{width: 400, height: 400}} />
```

## 报错集锦
1. 引入react-navigation，报错 `native module cannot be null`, 在Podfile中添加`RCTLinkingIOS` subspecs.
2. `RCTStatusBarManager module requires that the                 UIViewControllerBasedStatusBarAppearance key in the Info.plist is set to NO`,在Info.list中将`UIViewControllerBasedStatusBarAppearance`设置为NO.

