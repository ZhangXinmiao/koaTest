
require('node-jsx').install({
    extension: '.jsx'
});

import koa from 'koa';
import path from 'path';
import logger from 'koa-logger';
import serve from 'koa-static';
import route from 'koa-route';
import render from 'koa-ejs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

var someComponent = React.createFactory(require('./components/SomeComponents.jsx'));

var app = koa();
app.use(logger());

render(app, {
  root: path.join(__dirname, 'views'),
  layout: false,
  viewExt: 'ejs'
});
var reactHtml = ReactDOMServer.renderToString(someComponent({}));


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
console.log('listening on port 3000');
