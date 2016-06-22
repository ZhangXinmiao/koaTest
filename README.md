# koaTest
### 配置环境

```
open ~/.bash_profile
添加 alias node='node --harmony'
保存
查看是否成功alias
可以看见  node='node --harmony'
```

#### No.1

```javascript
var someComponent = React.createFactory(require('./components/SomeComponents.jsx'));
var reactHtml = ReactDOMServer.renderToString(someComponent({}));
```



记得加上({}),否则会报错

```
renderToString(): You must pass a valid ReactElement
```

#### No.2

```
"scripts": {
    "start": "DEBUG=* babel-node index"
  },
```

解决node环境下用import引入模块的错误

