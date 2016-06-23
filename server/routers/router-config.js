/*

  路由配置文件

  参数:{
    routerUrl: 路由地址
    renderUrl: 模板路径
    reactOutput: 需要渲染的内容
  }

*/

module.exports = [
  {
    routerUrl: '/first',
    renderUrl: 'moduleA/views/index',
    reactOutput: '🐒'
  },
  {
    routerUrl: '/second',
    renderUrl: 'moduleA/views/index',
    reactOutput: '🌝'
  },
  {
    routerUrl: '/third',
    renderUrl: 'moduleA/views/index',
    reactOutput: '🔥'
  },
  {
    routerUrl: '/forth',
    renderUrl: 'moduleA/views/index',
    reactOutput: '🌚'
  },
  {
    routerUrl: '/fifth',
    renderUrl: 'moduleA/views/index',
    reactOutput: '🍓'
  },
];
