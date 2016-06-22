
require('node-jsx').install({
    extension: '.jsx'
});

import koa from 'koa';
import path from 'path';
import logger from 'koa-logger';
import serve from 'koa-static';
import Router from 'koa-router';
import render from 'koa-ejs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import routers from './routers/index.js';
import apiRouters from './routers/api.js';


var app = koa();
app.use(logger());

render(app, {
  root: './app',
  layout: false,
  viewExt: 'ejs'
});

app.use(routers(Router));
app.use(apiRouters(Router));

app.listen(3000);
console.log('listening on port 3000');
