'use strict';

var _SomeComponents = require('./components/SomeComponents.jsx');

require('node-jsx').install({
    extension: '.jsx'
});

var koa = require('koa');
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
var reactHtml = ReactDOMServer.renderToString(element);

var React = require('react');
var ReactDOMServer = require('react-dom/server');

app.use(route.get('/index', regeneratorRuntime.mark(function _callee(next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return this.render('index', {
                        reactOutput: reactHtml
                    });

                case 2:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
})));

app.use(route.get('/first', regeneratorRuntime.mark(function _callee2(next) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    this.body = "router success!";
                    //我是首页
                    //this 指向请求

                case 1:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, this);
})));

app.listen(3000);
console.log(someComponent);
console.log(element);
console.log(aaa);
console.log('listening on port 3000');