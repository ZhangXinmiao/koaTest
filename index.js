
require('node-jsx').install({
    extension: '.jsx'
});

import koa from 'koa';
// var koa =  require('koa');
var path = require('path');
var logger = require('koa-logger');
var serve = require('koa-static');
var route = require('koa-route');
var render = require('koa-ejs');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var React = require('react');
var someComponent = React.createFactory(require('./components/SomeComponents.jsx'));

var aaa = require('./components/SomeComponents.jsx');



var app = koa();
app.use(logger());

render(app, {
  root: path.join(__dirname, 'views'),
  layout: false,
  viewExt: 'ejs'
});
var element = React.createElement('div', null, 'Hello World!');
var reactHtml = ReactDOMServer.renderToString(aaa);

var React = require('react');
var ReactDOMServer = require('react-dom/server');


app.use(route.get('/index', function *(next) {
    //this.body = "welcom to koa!";
    //我是首页
    //this 指向请求
    yield this.render('index', {
      reactOutput: reactHtml,
    });
}));

app.use(route.get('/first', function *(next) {
    this.body = "router success!";
    //我是首页
    //this 指向请求
}));



app.listen(3000);
console.log(someComponent);
console.log(element);
console.log(aaa);
console.log('listening on port 3000');
